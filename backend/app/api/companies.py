from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Optional
from app.core.database import get_db
from app.models.models import Company

router = APIRouter()

class CompanyCreate(BaseModel):
    name:     str
    website:  Optional[str] = None
    industry: Optional[str] = None
    location: Optional[str] = None

@router.get("/")
def list_companies(skip: int = 0, limit: int = 20, db: Session = Depends(get_db)):
    companies = db.query(Company).offset(skip).limit(limit).all()
    return companies

@router.get("/{company_id}")
def get_company(company_id: int, db: Session = Depends(get_db)):
    company = db.query(Company).filter(Company.id == company_id).first()
    if not company:
        raise HTTPException(status_code=404, detail="Company not found")
    return company

@router.post("/", status_code=201)
def create_company(req: CompanyCreate, db: Session = Depends(get_db)):
    company = Company(**req.dict())
    db.add(company)
    db.commit()
    db.refresh(company)
    return company

@router.get("/search/{query}")
def search_company(query: str, db: Session = Depends(get_db)):
    results = db.query(Company).filter(
        Company.name.ilike(f"%{query}%")
    ).limit(10).all()
    return results
