from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
import models
import schemas
from services.gemini_service import ask_baby_ia

router = APIRouter(prefix="/api/chat", tags=["chat"])

@router.post("/", response_model=schemas.ChatResponse)
def chat_with_baby_ia(req: schemas.ChatRequest, db: Session = Depends(get_db)):
    try:
        # Registrar mensaje del usuario en base de datos
        user_log = models.ChatHistory(
            session_id=req.session_id or "web-user",
            sender="user",
            message=req.message
        )
        db.add(user_log)
        db.commit()

        # Generar respuesta con IA / Base de conocimiento
        history_dicts = [{"role": h.role, "content": h.content} for h in (req.history or [])]
        result = ask_baby_ia(req.message, history_dicts, language=req.language or "es")

        # Registrar respuesta en base de datos
        bot_log = models.ChatHistory(
            session_id=req.session_id or "web-user",
            sender="baby_ia",
            message=result["reply"]
        )
        db.add(bot_log)
        db.commit()

        return schemas.ChatResponse(
            reply=result["reply"],
            session_id=req.session_id or "web-user",
            suggested_actions=result.get("suggested_actions", [])
        )
    except Exception as e:
        print(f"Error en chat_with_baby_ia: {e}")
        is_en = (req.language == "en")
        return schemas.ChatResponse(
            reply="Hello, I am Baby.IA. I am currently updating my systems, but feel free to call us at +52 (55) 5273 5194 or book online." if is_en else "Hola, soy Baby.IA. En este momento estoy actualizando mis sistemas, pero con gusto puedes llamarnos al (55) 5273 5194 o dejarnos tus datos para orientarte.",
            session_id=req.session_id or "web-user",
            suggested_actions=["Book an appointment", "View treatments", "Call clinic"] if is_en else ["Agendar cita", "Ver tratamientos", "Llamar a recepción"]
        )
