from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from database import get_db
import models
import schemas

router = APIRouter(prefix="/api/appointments", tags=["appointments"])

@router.post("/", response_model=schemas.AppointmentResponse, status_code=status.HTTP_201_CREATED)
def create_appointment(appointment_in: schemas.AppointmentCreate, db: Session = Depends(get_db)):
    try:
        new_appointment = models.Appointment(
            full_name=appointment_in.nombre,
            phone=appointment_in.telefono,
            email=appointment_in.correo,
            referral_source=appointment_in.como_te_enteraste,
            message=appointment_in.como_podemos_ayudarte,
            target_email="karenwismann27@gmail.com",
            status="Pendiente"
        )
        db.add(new_appointment)
        db.commit()
        db.refresh(new_appointment)
        
        # En producción se envía correo a karenwismann27@gmail.com
        print(f"[NOTIFICACIÓN CORREO] Nueva cita agendada de {new_appointment.full_name} ({new_appointment.email}). Destino: karenwismann27@gmail.com")
        
        return new_appointment
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Error al agendar cita: {str(e)}")

@router.get("/", response_model=List[schemas.AppointmentResponse])
def get_appointments(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    appointments = db.query(models.Appointment).order_by(models.Appointment.created_at.desc()).offset(skip).limit(limit).all()
    return appointments
