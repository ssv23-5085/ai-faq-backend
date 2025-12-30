# AI FAQ Backend (Mocked AI)

## 📌 Project Overview
This project is a simple Node.js backend application built using Express.js that demonstrates REST APIs along with mocked AI-driven logic. The application acts as an AI FAQ / Chat Support system where user questions are processed and meaningful responses are returned based on predefined logic.

The goal of this project is to showcase backend fundamentals, clean folder structure, API design, and simulated AI behavior without using any paid external AI APIs.

---

## 🎯 Chosen Use Case
**AI FAQ / Chat Support**

Users can send questions related to Node.js, Express, APIs, or AI, and the backend responds with intelligent answers using keyword-based logic.

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- dotenv
- nodemon (development)

---

## 📂 Project Structure

ai-faq-backend/
│
├── controllers/
│ └── faqController.js
├── routes/
│ └── faqRoutes.js
├── services/
│ └── aiLogic.js
├── data/
│ └── faqData.js
├── server.js
├── .env
├── package.json
└── README.md


---

## 🔌 API Endpoints

### 1️. POST `/api/process`
**Description:**  
Accepts user question and returns an AI-generated (mocked) response.

**Request Body (JSON):**
```json
{
  "question": "What is Express?"
}

Response (JSON):
{
  "success": true,
  "question": "What is Express?",
  "answer": "Express.js is a minimal Node.js framework used to build REST APIs easily."
}

2️. GET /api/health (Bonus API)

Description:
Health check endpoint to verify backend status.

Response:
{
  "status": "OK",
  "message": "AI FAQ Backend is running successfully",
  "timestamp": "2026-01-01T10:30:00.000Z"
}

* AI Logic Explanation (Mocked)

The AI functionality is simulated using keyword-based logic.
When a user submits a question, the system checks for keywords such as node, express, api, or ai and returns predefined intelligent responses.
This approach demonstrates how AI-like behavior can be implemented without using paid APIs.

▶️ Steps to Run the Project

1. Clone the repository:
git clone https://github.com/YOUR_USERNAME/ai-faq-backend.git

2. Navigate to the project folder :
cd ai-faq-backend

3. Install Dependencies :
npm install

4. Create .env file :
 PORT = 5000

5. Start the server :
npm run dev

6. Test APIs using Thunder Client or Postman.

Learnings & Challenges : 

Understood how to structure a Node.js backend project properly

Implemented REST APIs using Express.js

Simulated AI behavior using logical conditions

Debugged real-world environment and path issues

Learned how to test APIs using Thunder Client


---

#  Learning Lines (For Submission Form)

1. I learned how to resolve Windows PowerShell execution policy issues while setting up a Node.js environment.

2. I debugged and fixed npm installation and SSL certificate errors related to system date and configuration.

3. I understood the importance of correct folder structure and relative path imports in Node.js applications.

4. I learned how a small typo mismatch (controllers vs controller) can break an entire application and how to debug it.

5. I implemented REST APIs using Express.js with proper validation and response handling.

6. I learned how to simulate AI logic using keyword-based responses without relying on paid APIs.

7. I gained hands-on experience testing backend APIs using Thunder Client.









