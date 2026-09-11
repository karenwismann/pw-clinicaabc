from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from database import get_db
import models
import schemas

router = APIRouter(prefix="/api/contact", tags=["contact"])

@router.post("/", response_model=schemas.ContactResponse, status_code=status.HTTP_201_CREATED)
def submit_contact(contact_in: schemas.ContactCreate, db: Session = Depends(get_db)):
    try:
        new_msg = models.ContactMessage(
            name=contact_in.name,
            email=contact_in.email,
            phone=contact_in.phone,
            subject=contact_in.subject,
            message=contact_in.message
        )
        db.add(new_msg)
        db.commit()
        db.refresh(new_msg)
        print(f"[CONTACTO] Nuevo mensaje de {new_msg.name} ({new_msg.email})")
        return new_msg
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Error al enviar mensaje: {str(e)}")

@router.get("/", response_model=List[schemas.ContactResponse])
def get_contact_messages(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(models.ContactMessage).order_by(models.ContactMessage.created_at.desc()).offset(skip).limit(limit).all()
