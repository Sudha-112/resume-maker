# AI Resume Maker

A full-stack web app that turns a short, plain-English description of your background into a formatted, downloadable resume — using an LLM to generate structured resume content, with authentication and a contact form.

**Live Demo:** https://ai-resume-maker-lovat-two.vercel.app
**Backend API:** https://resume-ai-backend-cd74.onrender.com

> Note: the backend is hosted on Render's free tier, which spins down after periods of inactivity. The first request after a period of idle time can take 30–50 seconds to respond while the instance wakes up.

## Features

- **AI resume generation** — describe your background in a few sentences and get back structured resume data (summary, skills, experience, education, projects, certifications, achievements, languages, interests), generated via an LLM (Groq, `openai/gpt-oss-120b`) through Spring AI.
- **Editable resume form** — generated content is loaded into an editable form (dynamic field arrays for experience, education, projects, etc.) before final rendering.
- **PDF export** — download the finished resume as a PDF, rendered client-side (`html-to-image` + `jsPDF`).
- **Authentication** — email/password signup & login, passwords hashed with BCrypt, stateless JWT-based sessions, protected frontend routes.
- **Contact form** — public endpoint for visitor messages, persisted to the database with duplicate-email prevention.

## Tech Stack

**Backend**
- Java, Spring Boot 4 (Web MVC, Security, Validation, Data JPA)
- Spring AI (OpenAI-compatible client, pointed at Groq's API)
- MySQL (JPA/Hibernate)
- JWT auth (`jjwt`), BCrypt password hashing
- Maven
- Docker

**Frontend**
- React 19 + Vite
- Tailwind CSS + DaisyUI
- React Router, React Hook Form
- Axios (with request/response interceptors for auth)

**Deployment**
- Backend: Docker container on Render
- Frontend: Vercel
- Database: MySQL on Clever Cloud

## Architecture

```
resume-ai-frontend (React/Vite, on Vercel)  ──HTTP/JWT──▶  resume-ai-backend (Spring Boot, Dockerized, on Render)
                                                                   │
                                                                   ├──▶ MySQL on Clever Cloud (users, contact messages)
                                                                   └──▶ Groq API (LLM resume generation)
```

Backend follows a standard layered structure: `Controller → Service → Repository`, with DTOs for requests/responses, a global exception handler for consistent error responses, and a JWT filter chain for stateless authentication.

## API Overview

| Method | Endpoint                  | Auth required | Description                          |
|--------|----------------------------|:--------------:|---------------------------------------|
| POST   | `/api/v1/auth/register`   | No             | Create an account, returns a JWT      |
| POST   | `/api/v1/auth/login`      | No             | Authenticate, returns a JWT           |
| GET    | `/api/v1/auth/me`         | Yes            | Get the current logged-in user        |
| POST   | `/api/v1/resume/generate` | Yes            | Generate structured resume JSON from a text description |
| POST   | `/api/v1/contact`         | No             | Submit a contact message              |

## Getting Started

### Prerequisites
- Java 17+ and Maven
- Node.js 18+
- MySQL (local, or a hosted instance such as Clever Cloud)
- A [Groq](https://console.groq.com) API key

### Backend

```bash
cd resume-ai-backend

# create the database
mysql -u your_database_username -p -e "CREATE DATABASE <database-name> ;"

# set required environment variables
export GROQ_API_KEY=your_groq_key
export DB_URL=jdbc:mysql://<host>:<port>/<database-name>
export DB_USERNAME=your_database_username
export DB_PASSWORD=your_mysql_password
export JWT_SECRET=a_long_random_secret_string
export JWT_EXPIRATION=<token-validity-in-ms>   # e.g. 24 hours in milliseconds

./mvnw spring-boot:run
```
The API starts on the backend's configured local port.

#### Running with Docker

```bash
cd resume-ai-backend
docker build -t resume-ai-backend .
docker run -p 8080:8080 \
  -e GROQ_API_KEY=your_groq_key \
  -e DB_URL=jdbc:mysql://<host>:<port>/<database-name> \
  -e DB_USERNAME=your_database_username \
  -e DB_PASSWORD=your_mysql_password \
  -e JWT_SECRET=a_long_random_secret_string \
  -e JWT_EXPIRATION=<token-validity-in-ms> \
  resume-ai-backend
```

### Frontend

```bash
cd resume-ai-frontend
cp .env.sample .env       # set VITE_API_URL to your backend's base URL
npm install
npm run dev
```
The app starts on the Vite dev server's default local port.

## Deployment Notes

- **Backend** is containerized with a Dockerfile and deployed on Render's free tier. The Hikari connection pool is intentionally capped (`maximum-pool-size=3`) to stay within the free-tier database's max simultaneous connection limit.
- **Frontend** is deployed on Vercel, built from the `resume-ai-frontend` directory, with `VITE_API_URL` pointing at the Render backend URL.
- **Database** is a free-tier MySQL instance on Clever Cloud.
- **CORS** is restricted to the local dev origin and the production Vercel domain (no longer wildcard).

## Known Limitations / Roadmap

This is an actively evolving personal project. Current gaps I'm aware of and plan to address:

- [ ] Automated backend/frontend test coverage
- [ ] Rate limiting on `/resume/generate` and `/contact`
- [ ] Persist generated resumes per user (currently generate-and-download only, no history)
- [ ] Email verification and password reset flow
- [x] Tighten CORS policy for production
- [ ] Move JWT storage to httpOnly cookies instead of `localStorage`
- [ ] API documentation (OpenAPI/Swagger)
- [ ] Add refresh-token flow with a short-lived access token (currently a single longer-lived token for simplicity, since this is a portfolio project)

## License

This project is for personal/portfolio use.