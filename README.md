# 🍽️ MERN Recipe Sharing Platform – Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

This is the **backend server** for the MERN-based Recipe Sharing Platform. It exposes a RESTful API for user authentication and recipe management, built using **Node.js**, **Express.js**, and **MongoDB**.

> 🌐 **Live Backend API:** [https://mern-recipe-backend-oz8a.onrender.com](https://mern-recipe-backend-oz8a.onrender.com)  
> 💻 **Frontend GitHub Repo:** [MERN_Recipe](https://github.com/jit21/MERN_Recipe)  
> 🚀 **Frontend Live App (Vercel):** [https://mern-recipe-ecru.vercel.app/](https://mern-recipe-ecru.vercel.app/)

---

## 📁 Folder Structure

```
MERN-Recipe-Backend/
├── config/          # MongoDB connection
├── controllers/     # Route logic
├── middleware/      # Auth middleware
├── models/          # Mongoose schemas
├── routes/          # API endpoints
├── uploads/         # Uploaded recipe images
├── .env             # Environment variables
└── server.js        # Entry point
```

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT + bcrypt
- **Image Uploads:** Multer
- **Environment Config:** dotenv
- **Dev Tools:** Nodemon, CORS

---

## 📦 Getting Started

### ✅ Prerequisites

- Node.js & npm
- MongoDB URI (local or Atlas)
- Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/jit21/MERN-Recipe-Backend.git
cd MERN-Recipe-Backend
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Environment Variables

Create a `.env` file in the root:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

### 4. Start the Server

```bash
npm start
```

Local server runs at:  
`http://localhost:5000`

---

## 📡 API Endpoints

All routes are prefixed with `/api`.

### 🔐 Authentication

| Method | Endpoint             | Description        |
|--------|----------------------|--------------------|
| POST   | `/api/auth/register` | Register user      |
| POST   | `/api/auth/login`    | Login user (JWT)   |

---

### 🍱 Recipes

| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| GET    | `/api/recipes`      | Get all recipes        |
| GET    | `/api/recipes/:id`  | Get single recipe      |
| POST   | `/api/recipes`      | Create new recipe      |
| PUT    | `/api/recipes/:id`  | Update recipe          |
| DELETE | `/api/recipes/:id`  | Delete recipe          |

> 🔐 **Protected routes require:**  
```http
Authorization: Bearer <your_token>
```

---

## 🧪 Future Improvements

- ✅ Validation and Error Handling Enhancements
- 🌐 Public Recipe Sharing URLs
- 📁 Recipe Categories and Tags
- 🔎 Advanced Search with Filters
- 📈 Admin Analytics APIs
- 🔐 Refresh Token System
- 💬 Comments and Reviews

---

## 🙌 Author

**Jit Kumar Das**  
📧 Email: [jitkumardas2002@gmail.com](mailto:jitkumardas2002@gmail.com)  
🔗 GitHub: [https://github.com/jit21](https://github.com/jit21)

---

## 📄 License

This backend is licensed under the **MIT License**.
