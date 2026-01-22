# Simple Task Tracker

This is a simple task tracker application that allows users to create tasks, view all tasks, and update the status of a task.

## Tech Stack

- Backend: Django, Django REST Framework
- Frontend: React (Vite)
- Database: SQLite (for development)

## Features

- Create a task
- View all tasks
- Update task status
- Delete a task

## Data Model

Each task contains the following fields:

- id: Unique identifier for the task
- title: Title or description of the task
- status: Current status of the task (TODO, IN_PROGRESS, DONE)
- createdAt: Timestamp of when the task was created
- updatedAt: Timestamp of when the task is updated

Tasks start with a default status of **TODO**.
The status field is limited to predefined values to prevent invalid task states and ensure consistent business logic.

## Backend APIs

The backend exposes REST APIs to manage tasks. These APIs handle task creation, retrieval, status updates, and validation logic.

### Create Task

- **Endpoint:** `POST /api/tasks/`
- **Description:** Creates a new task with a default status of TODO.
- **Request Body:**

```json
{
  "title": "Run in the morning"
}

Success Response: 200 OK
Error Response: 400 Bad Request (if title is missing or invalid)
```

### Get All Tasks

- **Endpoint:** `GET /api/tasks/`
- **Description:** Retrieves all tasks ordered by creation time (latest first).
- **Request Body:**

```json
[
  {
    "id": 1,
    "title": "Run in the morning",
    "status": "TODO",
    "created_at": "2026-01-21T07:01:00Z",
    "updated_at": "2026-01-21T07:01:00Z"
  }
]

Success Response: 200 OK
Error Response: 400 Bad Request (if title is missing or invalid)

```

### Update Task Status

- **Endpoint:**  `PATCH /api/tasks/{id}/status/`
- **Description:** Updates the status of an existing task.
- **Request Body:**

``` json
{
  "status": "IN_PROGRESS"
}

A task cannot move directly from TODO to DONE.
This rule is enforced in the backend to ensure data integrity.
Success Response: 200 OK
Error Response: 400 Bad Request (cannot move directly from TODO to DONE)
```

### Delete Task (Optional Bonus)

- **Endpoint:** `DELETE /api/tasks/{id}/`
- **Description:** Deletes a task by its ID.

Success Response: 200 OK
Error Response: 400 Bad Request (task not found)

### Frontend UI

#### Components

- **CreateTask:** – Form to create a new task
- **TaskList:** – Displays all tasks
- **TaskItem:** – Displays a single task and status update buttons

### Data Flow

1) The frontend fetches tasks from the backend on page load.
2) Creating a task sends a POST request to the backend.
3) Updating task status sends a PATCH request to the backend.
4) Deleting atask sends a DELETE request to backend
5) After each action, the task list is refreshed to reflect the latest data.

### Optional Bonus

1) Task deletion support implemented
2) Simple UI styling using Tailwind CSS

## How to Run the Project Locally

### Backend

git clone <https://github.com/adhilna/simple-task-tracker>
cd simple-task-tracker/backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

The backend will run at <http://127.0.0.1:8000>

### Frontend (React + Vite + Tailwind CSS)

cd ../frontend
npm install
npm run dev

The frontend will run at <http://localhost:5173>
