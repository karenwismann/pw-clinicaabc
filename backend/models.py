from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean
from database import Base

class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(200), nullable=False)
    birth_date = Column(String(50), nullable=True)
    phone = Column(String(50), nullable=False)
    email = Column(String(150), nullable=False)
    referral_source = Column(String(100), nullable=False) # internet, referido, redes sociales, médico, otro
    message = Column(Text, nullable=False)
    target_email = Column(String(150), default="karenwismann27@gmail.com")
    created_at = Column(DateTime, default=datetime.utcnow)
    status = Column(String(50), default="Pendiente")

class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), nullable=False)
    email = Column(String(150), nullable=False)
    phone = Column(String(50), nullable=True)
    subject = Column(String(200), nullable=True)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

class ChatHistory(Base):
    __tablename__ = "chat_history"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String(100), index=True)
    sender = Column(String(20)) # "user" or "baby_ia"
    message = Column(Text, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)
