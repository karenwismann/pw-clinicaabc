import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
import models
from routers import appointments, contact, chat

# Crear tablas en SQLite si no existen
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Clínica de Fertilización ABC API",
    description="API de servicios médicos, citas y chatbot Baby.IA para Clínica de Fertilización Asistida en el Centro Médico ABC",
    version="1.0.0"
)

# Configuración CORS para Next.js
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(appointments.router)
app.include_router(contact.router)
app.include_router(chat.router)

@app.get("/")
def root():
    return {
        "status": "online",
        "clinica": "Clínica de Fertilización Asistida en el Centro Médico ABC",
        "campus": "Centro Médico ABC Santa Fe",
        "recepcion_email": "recepcion@infertilidadabc.com",
        "telefonos": ["(55) 5273 5194", "(55) 5276 5463"],
        "chatbot": "Baby.IA activo"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
