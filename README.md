# 🏦 TD Mock App

A **TD Bank–inspired full-stack demo application** built for portfolio and educational purposes.  
This project demonstrates modern **React front-end development**, a **Spring Boot + MongoDB backend**, and clean, production-style deployment practices.

> ⚠️ **Disclaimer:** This project is **not affiliated with TD Bank**.  
> It is a mock application created for learning and portfolio demonstration only.

---

## ✨ Features

- 💻 **Modern React Frontend**
  - Landing page and hero section styled with TD brand-inspired green (`#007a3d`)
  - “Open an Account” modal with client-side validation and API integration
  - Responsive, accessible layout with focus handling and keyboard navigation  
  - Email + Name + Password registration flow connected to backend

- ⚙️ **Spring Boot Backend**
  - RESTful API endpoints (`/api/auth/register`, `/api/auth/login`)
  - User data stored securely in **MongoDB Atlas**
  - Password hashing via **BCrypt**
  - Centralized error handling (`ApiExceptionHandler.java`)
  - CORS & Security configuration for safe local development

- 🧠 **MongoDB Integration**
  - Persistent user collection (`app_users`)
  - Indexed unique email field
  - Connected via environment variable or application properties

- 🚀 **Dev Experience**
  - Runs both frontend (`Vite`) and backend (`Spring Boot`) concurrently  
  - Hot reload for frontend, auto-rebuild for backend
  - Proxy or CORS-enabled communication between ports 5173 ↔ 8080
  - Clean Gradle build for backend, npm scripts for frontend

---

## 🧰 Tech Stack

**Frontend:**  
- React (Vite)  
- JavaScript / JSX  
- CSS / Tailwind (optional)

**Backend:**  
- Java 17+ (Spring Boot 3)  
- Spring Web, Spring Security, Spring Data MongoDB  
- Gradle build system  

**Database:**  
- MongoDB Atlas (Cloud Database)

**Deployment:**  
- GitHub Pages (frontend)  
- Local or cloud Spring Boot runtime (backend)

---

## ⚙️ Getting Started

### 1️⃣ Clone and install dependencies
```bash
git clone https://github.com/itsRobertoBorges/TD-Mock-App.git
cd TD-Mock-App/frontend
npm install

