<<<<<<< HEAD
# 🔐 HireShield

**Pre-Employment Company OSINT & Fraud Detection Platform**

HireShield aggregates public data (news, GitHub, MCA records, job boards)
to generate a Company Health Score and detect fraudulent hiring schemes.

---

## 🛠 Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Backend   | Python, FastAPI, SQLAlchemy         |
| Frontend  | React, Vite, Tailwind CSS, Chart.js |
| Database  | PostgreSQL                          |
| Scraping  | BeautifulSoup, Playwright, Celery   |
| ML / NLP  | scikit-learn, VADER, TextBlob       |
| Queue     | Redis + Celery                      |
| Deploy    | Vercel + Railway + Supabase         |

---

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose installed

### Run Locally
```bash
git clone https://github.com/YOUR_USERNAME/hireshield.git
cd hireshield
docker-compose up --build
```

- Frontend → http://localhost:5173
- Backend API → http://localhost:8000
- API Docs → http://localhost:8000/docs

---

## 📁 Folder Structure

```
hireshield/
├── backend/
│   ├── app/
│   │   ├── api/        # Route handlers
│   │   ├── models/     # SQLAlchemy models
│   │   ├── services/   # Business logic
│   │   ├── scrapers/   # OSINT scrapers
│   │   ├── ml/         # Scoring engine
│   │   └── core/       # Config, auth, DB
│   └── requirements.txt
├── frontend/
│   └── src/
│       ├── pages/
│       ├── components/
│       └── hooks/
└── docker-compose.yml
```

---

## 👤 Author

**Shyamsunder Kalyanapu**  
B.Tech IT — KU College of Engineering & Technology, Warangal

---

## 📄 License
MIT
=======
# hireshield
>>>>>>> 0f1365cbb96a8870a44bf4cfe849d9de37c25e3e
