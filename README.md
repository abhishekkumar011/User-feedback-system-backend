
## 📝 User Feedback System

This is a full-stack project that allows users to submit feedback and view/manage all feedback via a dashboard.
Built with Node.js, Express.js, MongoDB, React (Vite), and Shadcn UI.

### 📦 Tech Stack
    1. Backend: Node.js, Express.js, MongoDB, Mongoose
    2. Frontend: React (Vite), Shadcn UI, Tailwind CSS


### 🚀 Installation

### 1. Clone the Repository

There are two separate repositories for this project
```bash
1. user-feedback-system-frontend -> (https://github.com/abhishekkumar011/User-feedback-system-frontend)
2. user-feedback-system-backend -> (https://github.com/abhishekkumar011/User-feedback-system-backend)
```

```bash
git clone (both the repo that mentioned above)
cd user-feedback-system
```

### 2. Backend Setup
Go to the backend directory:
```bash
cd backend
npm install
```
Create a .env file inside backend/ and add:

```bash
PORT=8000
MONGODB_URI=YOUR MONGODB URI
DB_NAME=YOUR DBNAME
```

Start the backend server:
```bash
npm run dev
```

The backend will run at: http://localhost:8000/api/v1/

#### API Endpoints:

| Method | Endpoint     | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/feedback` | Submit new feedback |
| `GET` | `/feedback` | Fetch all feedback |    

### 2. Frontend Setup

Go to the frontend directory
```bash
cd frontend
npm install
```

Create a .env file inside frontend/ and add:
```bash
VITE_API_ENDPOINT=http://localhost:8000/feedback
```

Start the frontend development server:
```bash
npm run dev
```
The frontend will run at: http://localhost:5173

### ✨ Features
Submit Feedback: Fill in name, email, feedback text, and select a category (Suggestion, Bug, Feature Request).

#### Feedback Dashboard:

```bash
1. View all submitted feedback.
2. Filter feedback by category.
3. Sort feedback by Newest or Oldest.
4. Responsive Design: Works on mobile, tablet, and desktop.
5. Simple & Clean UI: Powered by Shadcn UI components.
```