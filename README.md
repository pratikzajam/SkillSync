# SkillSync – Full Stack Job Portal

SkillSync is a full-stack web application that allows candidates to register, log in, and explore job-related functionalities. Built using the MERN stack (MongoDB, Express, React, Node), this project is scalable and easy to maintain.

---

## 🚀 Features

### 👨‍💻 Candidate Side (Frontend)
- Register & Login with form validation
- Responsive UI with Tailwind CSS
- Toast notifications for feedback
- Protected routes using JWT
- React Router for seamless navigation

### 🔐 Backend (API)
- RESTful API built with Express
- MongoDB for database
- CORS enabled for cross-origin frontend
- JWT-based authentication
- Environment configuration using `.env`
- Static file serving for uploaded files

---

## 📁 Folder Structure

```
skill-sync/
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── controllers/
│   │   └── uploads/
│   ├── dbConnection.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.jsx
    │   └── main.jsx
    ├── .env
    └── package.json
```

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, React Router, Axios, Toastify
- **Backend:** Node.js, Express, Mongoose, JWT
- **Database:** MongoDB Atlas
- **Deployment:** Vercel (Frontend) & Render/Heroku (Backend)

---

## 🔧 Setup Instructions

### 📦 Clone the repo
```bash
git clone https://github.com/yourusername/skill-sync.git
cd skill-sync
```

### ▶️ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run the server:
```bash
npm run dev
```

Server will start at `http://localhost:3000`

---

### 💻 Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in `frontend/`:
```env
VITE_BACKEND_URL=http://localhost:3000
```

Run the React app:
```bash
npm run dev
```

App will start at `http://localhost:5173`

---

## 🔐 API Endpoints

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| POST   | `/register`      | Register a user      |
| POST   | `/login`         | Login a user         |
| GET    | `/uploads/:file` | Serve static uploads |

---

## 🧪 Example .env Files

### Backend (`backend/.env`)
```
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/skill-sync
JWT_SECRET=supersecretkey
```

### Frontend (`frontend/.env`)
```
VITE_BACKEND_URL=http://localhost:3000
```

---

## 🌐 Deployment Notes

- **Frontend:** Vercel
- **Backend:** Render or Cyclic
- Add environment variables in the deployment platforms
- Allow CORS from your deployed frontend domain

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgments

- [React Docs](https://react.dev/)
- [Express Docs](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Tailwind CSS](https://tailwindcss.com/)

---

## ✨ Author

Made with ❤️ by Pratik Zajam
