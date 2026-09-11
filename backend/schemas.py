from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

class AppointmentCreate(BaseModel):
    nombre: str
    telefono: str
    correo: EmailStr
    como_te_enteraste: str
    como_podemos_ayudarte: str

class AppointmentResponse(BaseModel):
    id: int
    full_name: str
    phone: str
    email: str
    referral_source: str
    message: str
    target_email: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    subject: Optional[str] = None
    message: str

class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: Optional[str] = None
    subject: Optional[str] = None
    message: str
    created_at: datetime

    class Config:
        from_attributes = True

class ChatMessage(BaseModel):
    role: str # "user" or "assistant"
    content: str

class ChatRequest(BaseModel):
    session_id: Optional[str] = "default-session"
    message: str
    language: Optional[str] = "es"
    history: Optional[List[ChatMessage]] = []

class ChatResponse(BaseModel):
    reply: str
    session_id: str
    suggested_actions: Optional[List[str]] = []
