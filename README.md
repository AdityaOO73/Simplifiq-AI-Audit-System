# Simplifiq AI Lead Automation System

Simplifiq AI Lead Automation System is a full-stack AI-powered workflow automation platform designed to streamline the lead intake and business audit process.

The system automatically captures prospect information, enriches company data through website scraping, generates personalized AI-driven business audit reports in professional PDF format, and delivers the report directly to the prospect via email — all without human intervention.

This project demonstrates a real-world automated business workflow combining AI, backend automation, PDF generation, web scraping, and email delivery into a single scalable system.

---

# Project Objective

Many businesses manually handle:
- lead intake
- company research
- audit preparation
- report generation
- outreach emails

This project automates the entire process to provide a highly personalized and professional first interaction immediately after a prospect submits their company details.

The goal is to create an intelligent workflow that:
- understands the prospect’s business
- performs contextual website analysis
- generates strategic recommendations
- creates polished reports
- automates communication

---

# Key Features

## AI-Powered Lead Intake Workflow
- Captures prospect details through a responsive frontend form
- Validates required business information
- Stores lead data securely in MongoDB

---

## Website Data Enrichment
The system automatically scrapes and analyzes publicly available website data including:
- Website title
- Meta description
- Heading structure
- Website content snippets

This enriched data helps generate more contextual and personalized AI reports.

---

## AI Business Audit Generation
Uses Groq API with Llama 3.1 to generate:
- Executive summaries
- SEO analysis
- UX recommendations
- Conversion optimization suggestions
- Growth opportunities
- Strategic business recommendations
- Brand positioning insights

The generated audit is highly personalized based on:
- company information
- business goals
- website content
- scraped metadata

---

## Professional PDF Report Generation
Automatically generates visually polished PDF reports including:
- Company branding
- Executive summary
- AI business audit
- Digital presence score
- Strategic recommendations
- Structured sections and formatting

The report is designed to resemble a premium consulting-style audit document.

---

## Automated Email Delivery
After report generation:
- the PDF is automatically attached
- a professional email is generated
- the report is delivered directly to the prospect

This creates a complete automated outreach workflow.

---

## Workflow Resilience & Error Handling
The system includes robust fallback mechanisms:
- scraping failures handled gracefully
- AI generation fallbacks included
- email failures tracked separately
- workflow continues even when individual services fail

---

# Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

---

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## AI & Automation
- Groq API
- Llama 3.1 Model

---

## PDF Generation
- PDFKit

---

## Web Scraping
- Axios
- Cheerio

---

## Email Service
- Nodemailer

---

# Project Architecture

```bash
Simplifiq/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── reports/
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

# System Workflow

```text
Lead Form Submission
          ↓
Frontend Validation
          ↓
Backend API Request
          ↓
MongoDB Lead Storage
          ↓
Website Scraping & Data Enrichment
          ↓
AI Audit Generation
          ↓
Professional PDF Report Generation
          ↓
Automatic Email Delivery
          ↓
Workflow Status Update
```

---

# Backend Architecture

```text
Frontend (React)
      ↓
Express API Server
      ↓
MongoDB Database
      ↓
Website Scraper Service
      ↓
AI Audit Generation Service
      ↓
PDF Generator Service
      ↓
Email Delivery Service
```

---

# Database Schema

## Lead Model

```js
{
  name: String,
  email: String,
  company: String,
  website: String,
  goals: String,

  reportStatus: String,

  scrapedData: Object,

  auditReport: String,

  pdfPath: String
}
```

---

# API Endpoint

## Create Lead

```http
POST /api/leads
```

### Request Body

```json
{
  "name": "Aditya Roy",
  "email": "aditya@gmail.com",
  "company": "Vercel",
  "website": "https://vercel.com",
  "goals": "Improve SEO and increase lead generation"
}
```

---

# Installation & Setup

## Clone Repository

```bash
git clone <repository-url>
```

---

# Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

# Backend Setup

```bash
cd server

npm install

npm run dev
```

---

# Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

GROQ_API_KEY=your_groq_api_key

EMAIL_USER=your_email_address

EMAIL_PASS=your_gmail_app_password
```

---

# Error Handling Strategy

## Website Scraping Failure
If scraping fails:
- fallback metadata is generated
- workflow continues normally

---

## AI Generation Failure
If AI response fails:
- default strategic recommendations are generated
- PDF creation still continues

---

## Email Delivery Failure
If email sending fails:
- report generation still completes
- workflow status updates accordingly

---

# PDF Report Features

Generated reports include:
- Company Information
- Executive Summary
- AI Business Audit
- SEO Suggestions
- UX Recommendations
- Growth Opportunities
- Strategic Recommendations
- Digital Presence Score
- Professional Footer Branding

---

# Security Considerations

- Environment variables protected using `.env`
- Sensitive credentials excluded from GitHub
- Database credentials securely managed
- Gmail App Password authentication used for email automation

---

# .gitignore

```gitignore
node_modules
.env
reports
dist
```

---

# Future Improvements

Potential future enhancements include:
- Google Sheets integration
- Google Drive PDF archiving
- CRM integrations
- Admin dashboard
- Advanced analytics
- Multi-page audit reports
- AI scoring engine
- Lead tracking dashboard

---

# Screenshots

Recommended screenshots to include:
- Lead intake form
- MongoDB database entry
- Generated PDF report
- Email delivery preview
- Workflow execution logs

---

# Key Highlights

- Fully automated AI-powered workflow
- Real-world backend architecture
- AI-generated contextual business insights
- Professional PDF automation
- Automated email outreach
- Modular and scalable code structure
- Resilient fallback handling
- Production-oriented workflow design

---

# Conclusion

Simplifiq AI Lead Automation System demonstrates a complete AI-powered business workflow automation platform capable of handling lead intake, website analysis, AI-driven business audits, professional document generation, and automated outreach communication in a scalable and production-oriented architecture.

The project focuses not only on functionality, but also on workflow resilience, personalization quality, modular backend design, and professional user experience.