# Personal Task Manager

## Project Overview

This project is a Full-Stack Personal Task Manager built using React for the frontend and Node.js with Express for the backend. The application allows users to create, update, delete, search, filter, and manage tasks through a responsive user interface. Task data is stored in a JSON file as required by the assignment, without using a database.

The goal of this project was to demonstrate a clear separation between frontend and backend concerns, REST API development, React component design, state management with hooks, and basic CRUD functionality.

---

## Live Demo Links

### Frontend

https://frontend-deployment-9v1j.vercel.app?_vercel_share=u5ea6qR3zfokTdHsHQFT3cwIUaynfUzx

### Backend

https://tasktakingapp-backend.onrender.com/api/tasks

### GitHub Repository

https://github.com/sanyogitashukla/TaskTakingApp_Backend

## Features

### Backend

- RESTful API built with Express
- JSON file storage
- CRUD operations
- Task status toggle endpoint
- Modular project structure
- ES Modules (import/export)

### Frontend

- React with functional components and hooks
- Axios for API communication
- Create Task
- Edit Task
- Delete Task
- Toggle Task Status
- Search Tasks
- Filter Tasks (All / Completed / Pending)
- Statistics Dashboard
- Responsive Design

---

## Tech Stack

### Frontend

- React
  - Component-based architecture and state management

- Vite
  - Fast development and build tooling

- Axios
  - HTTP requests to backend APIs

- CSS
  - Styling and responsive layout

### Backend

- Node.js
  - JavaScript runtime

- Express.js
  - REST API development

- ES Modules
  - Modern JavaScript module system

### Storage

- JSON File Storage
  - Lightweight persistence solution appropriate for assignment requirements

### Version Control

- Git
- GitHub

### Deployment

- Render (Backend)
- Vercel (Frontend)

---

## How to Run Locally

### 1. Clone Repository

```bash
git clone <repository-url>
cd Personal_Task_Manager
```

### 2. Start Backend

```bash
cd server
npm install
npm start
```

Backend runs on:

```text
http://localhost:5000
```

### 3. Start Frontend

Open a second terminal:

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Documentation

### Get All Tasks

```http
GET /api/tasks
```

Response:

```json
[
  {
    "id": 1,
    "title": "Learn React",
    "completed": false
  }
]
```

---

### Create Task

```http
POST /api/tasks
```

Request Body:

```json
{
  "title": "Build Task Manager"
}
```

Response:

```json
{
  "id": 123,
  "title": "Build Task Manager",
  "completed": false
}
```

---

### Update Task

```http
PUT /api/tasks/:id
```

Request Body:

```json
{
  "title": "Updated Task"
}
```

Response:

```json
{
  "id": 123,
  "title": "Updated Task",
  "completed": false
}
```

---

### Toggle Task Status

```http
PATCH /api/tasks/:id/toggle
```

Response:

```json
{
  "id": 123,
  "title": "Updated Task",
  "completed": true
}
```

---

### Delete Task

```http
DELETE /api/tasks/:id
```

Response:

```json
{
  "message": "Task deleted successfully"
}
```

---

## Project Structure

```text
Personal_Task_Manager
│
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   ├── Filters.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── Stats.jsx
│   │   │
│   │   ├── pages
│   │   │   └── Home.jsx
│   │   │
│   │   ├── services
│   │   │   └── taskService.js
│   │   │
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server
│   ├── controllers
│   ├── routes
│   ├── data
│   │   └── tasks.json
│   ├── app.js
│   ├── index.js
│   └── package.json
│
└── README.md
```

### Folder Responsibilities

- components → Reusable React UI components
- pages → Application page containers
- services → API communication layer
- routes → Express route definitions
- controllers → Request handling logic
- data → JSON file storage

---

## What Works

- Create Task
- Read Tasks
- Update Task
- Delete Task
- Toggle Task Status
- Search Tasks
- Filter Tasks
- Statistics Dashboard
- Responsive UI
- Frontend and Backend Deployment

---

## Known Limitations

- Uses JSON file storage instead of a database
- JSON storage is suitable for local development but not ideal for production environments
- No authentication or user accounts
- No automated tests implemented
- No task priority or due date functionality

---

## Next Steps / Improvements

Given more time, I would add:

- User Authentication and Authorization
- MongoDB integration
- Task Categories and Labels
- Task Priorities
- Due Dates and Reminders
- Dark Mode
- Unit Testing

---

## Notes

This project was intentionally kept focused on the assignment requirements. The primary goal was to demonstrate clean code structure, REST API design, React component architecture, state management with hooks, and full CRUD functionality while maintaining a clear separation between frontend and backend applications.

## Development Notes

During the development process, I used ChatGPT and GitHub Copilot as learning and debugging aids to help understand concepts, troubleshoot errors, and explore implementation approaches. I also referred to official documentation for React, Node.js, Express, Axios, Vite, and other libraries when setting up features and resolving issues.

All code was reviewed, understood, integrated, and tested by me as part of the learning and development process.
