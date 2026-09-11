#!/bin/bash

# Script de arranque para Clínica de Fertilización ABC (Frontend + Backend)

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Priorizar Node.js incluido o del sistema
if [ -d "$SCRIPT_DIR/.tools/node-v20.18.0-darwin-arm64/bin" ]; then
  export PATH="$SCRIPT_DIR/.tools/node-v20.18.0-darwin-arm64/bin:$PATH"
fi

echo "========================================================"
echo "  Clínica de Fertilización Asistida - Centro Médico ABC"
echo "========================================================"

# 1. Liberar puertos si estaban ocupados
echo "-> Verificando y liberando puertos (3000, 8000)..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true
lsof -ti:8000 | xargs kill -9 2>/dev/null || true
pkill -f "next dev" 2>/dev/null || true
pkill -f "uvicorn main:app" 2>/dev/null || true

# 2. Iniciar Backend FastAPI en background
echo "-> Iniciando Backend FastAPI en http://localhost:8000 ..."
cd "$SCRIPT_DIR/backend"
if [ -f "$SCRIPT_DIR/backend/venv/bin/uvicorn" ]; then
  "$SCRIPT_DIR/backend/venv/bin/uvicorn" main:app --host 0.0.0.0 --port 8000 > /dev/null 2>&1 &
elif command -v uvicorn &> /dev/null; then
  uvicorn main:app --host 0.0.0.0 --port 8000 > /dev/null 2>&1 &
elif command -v python3 &> /dev/null; then
  python3 -m uvicorn main:app --host 0.0.0.0 --port 8000 > /dev/null 2>&1 &
fi
BACKEND_PID=$!

# Esperar a que el backend inicialice
sleep 1

# 3. Limpiar caché temporal de Next.js si existía conflicto de compilación
cd "$SCRIPT_DIR/frontend"
rm -rf .next/cache

# 4. Iniciar Frontend Next.js
echo "-> Iniciando Frontend Next.js en http://localhost:3000 ..."
echo ""
echo "  ✨ Plataforma lista en: http://localhost:3000"
echo "  ✨ Backend API en:      http://localhost:8000"
echo "  ✨ Presiona Ctrl+C para detener ambos servicios."
echo "========================================================"

trap "kill $BACKEND_PID 2>/dev/null; exit" INT TERM EXIT

npm run dev
