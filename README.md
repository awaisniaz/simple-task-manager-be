# 📝 Task Manager API

A scalable, modular, and RESTful Task Manager API built with Node.js, Express.js, and MongoDB. This API allows users to manage tasks effectively by creating, updating, retrieving, and deleting task entries. Built following industry best practices and structured for future scalability using API versioning and layered architecture.

---

## 📌 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [Versioning](#versioning)
- [Best Practices](#best-practices)
- [Future Enhancements](#future-enhancements)
- [License](#license)
- [Author](#author)

---

## ✅ Features

- 🔁 Full CRUD operations on tasks
- ⏳ Task due dates and priority levels
- ✅ Mark tasks as completed or pending
- 📁 API Versioning (`v1`, `v2`, ...)
- 🔒 Input validation using middleware
- 🔄 Centralized error handling
- 🧱 Follows MVC + Service Layer architecture

---

## 🧰 Tech Stack

- **Node.js** – Backend runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **dotenv** – Environment config
- **Joi / express-validator** – Data validation
- **Postman** – API testing

---

## 🏗️ Architecture

This project follows **Modular MVC + Service Layer**:

- **Controllers** – Handle request/response logic
- **Services** – Contain business rules
- **Models** – Define Mongoose schemas
- **Routes** – Define versioned API paths
- **Middlewares** – Error handling, validation
- **Utils** – Utility/helper functions

---

## 📁 Project Structure

task-manager-api/ ├── src/ │ ├── config/ # DB and environment setup │ ├── controllers/ # API request handlers (v1) │ ├── models/ # Mongoose schemas │ ├── routes/ # API routes (versioned) │ ├── services/ # Business logic │ ├── middlewares/ # Error, validation middleware │ ├── utils/ # Reusable utilities │ └── app.js # Express app initialization ├── .env # Environment variables ├── .gitignore ├── package.json └── README.md


## 🌐 API Endpoints (v1)

| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| GET    | `/api/v1/tasks`       | Get all tasks         |
| GET    | `/api/v1/tasks/:id`   | Get task by ID        |
| POST   | `/api/v1/tasks`       | Create a new task     |
| PUT    | `/api/v1/tasks/:id`   | Update a task         |
| DELETE | `/api/v1/tasks/:id`   | Delete a task         |

### Task Schema

```json
{
  "title": "Task title",
  "description": "Optional task description",
  "priority": "low | medium | high",
  "status": "pending | completed",
  "dueDate": "2025-05-01T00:00:00.000Z"
}