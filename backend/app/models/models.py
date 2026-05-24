from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean, Text, ForeignKey, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base
import enum

class RoleEnum(str, enum.Enum):
    admin      = "admin"
    researcher = "researcher"
    viewer     = "viewer"

class StatusEnum(str, enum.Enum):
    legit      = "legit"
    suspicious = "suspicious"
    fraud      = "fraud"
    unknown    = "unknown"

# ── Users ──────────────────────────────────────────────────────
class User(Base):
    __tablename__ = "users"

    id         = Column(Integer, primary_key=True, index=True)
    name       = Column(String(100), nullable=False)
    email      = Column(String(200), unique=True, index=True, nullable=False)
    password   = Column(String(200), nullable=False)
    role       = Column(Enum(RoleEnum), default=RoleEnum.viewer)
    is_active  = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    searches   = relationship("SearchLog", back_populates="user")

# ── Companies ──────────────────────────────────────────────────
class Company(Base):
    __tablename__ = "companies"

    id             = Column(Integer, primary_key=True, index=True)
    name           = Column(String(200), nullable=False, index=True)
    website        = Column(String(300))
    industry       = Column(String(100))
    location       = Column(String(200))
    health_score   = Column(Float, default=0.0)
    status         = Column(Enum(StatusEnum), default=StatusEnum.unknown)
    last_scraped   = Column(DateTime(timezone=True))
    created_at     = Column(DateTime(timezone=True), server_default=func.now())

    reports        = relationship("Report", back_populates="company")
    red_flags      = relationship("RedFlag", back_populates="company")

# ── Reports ────────────────────────────────────────────────────
class Report(Base):
    __tablename__ = "reports"

    id              = Column(Integer, primary_key=True, index=True)
    company_id      = Column(Integer, ForeignKey("companies.id"), nullable=False)
    news_sentiment  = Column(Float, default=0.0)
    github_score    = Column(Float, default=0.0)
    job_post_count  = Column(Integer, default=0)
    mca_verified    = Column(Boolean, default=False)
    raw_data        = Column(Text)
    explanation     = Column(Text)
    created_at      = Column(DateTime(timezone=True), server_default=func.now())

    company         = relationship("Company", back_populates="reports")

# ── Red Flags ──────────────────────────────────────────────────
class RedFlag(Base):
    __tablename__ = "red_flags"

    id          = Column(Integer, primary_key=True, index=True)
    company_id  = Column(Integer, ForeignKey("companies.id"), nullable=False)
    flag_type   = Column(String(100))
    description = Column(Text)
    severity    = Column(String(20))  # low / medium / high
    created_at  = Column(DateTime(timezone=True), server_default=func.now())

    company     = relationship("Company", back_populates="red_flags")

# ── Search / Audit Log ─────────────────────────────────────────
class SearchLog(Base):
    __tablename__ = "search_logs"

    id          = Column(Integer, primary_key=True, index=True)
    user_id     = Column(Integer, ForeignKey("users.id"))
    query       = Column(String(300))
    ip_address  = Column(String(50))
    created_at  = Column(DateTime(timezone=True), server_default=func.now())

    user        = relationship("User", back_populates="searches")
