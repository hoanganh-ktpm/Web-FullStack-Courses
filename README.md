# Fullstack Course Management System

A modern, full-stack web application for managing online courses. Built with React, Node.js, Express, and MongoDB using a Monorepo architecture.

## Features
- **View Courses**: Browse all available courses in a responsive grid layout.
- **Manage Courses**: Interactive Admin Dashboard table to oversee all data.
- **Add New Courses**: Interactive form to create and store new courses with titles, descriptions, images, and prices.
- **Delete Courses**: Instantly remove courses with real-time UI updates.
- **Dynamic Routing**: Seamless navigation using React Router DOM.
- **Beautiful UI**: Styled with TailwindCSS and Shadcn UI components (HoverCards, Buttons, Tables).

## Tech Stack
**Frontend:**
- React (Vite)
- Tailwind CSS
- Shadcn UI (Radix Primitives)
- React Router DOM
- Lucide React (Icons)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- CORS & Dotenv

## Project Structure (Monorepo)
- `/frontend`: Contains the React application (Port 5173).
- `/backend`: Contains the Node.js REST API server (Port 3000).

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hoanganh-ktpm/Web-FullStack-Courses.git
   ```

2. **Install dependencies:**
   Run this in the root directory to install the concurrent manager:
   ```bash
   npm install
   ```
   Then install dependencies for both frontend and backend:
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   cd ..
   ```

3. **Environment Variables:**
   Create a `.env` file in the `/backend` directory and add your MongoDB connection string:
   ```env
   MONGODB_URL=mongodb://localhost:27017/FullStack-Courses
   PORT=3000
   ```

4. **Run the Application:**
   Run the magic command from the **root directory** to start both Backend and Frontend simultaneously:
   ```bash
   npm run dev
   ```

## API Endpoints
- `GET /api/courses` - Fetch all courses
- `POST /api/courses/store` - Create a new course
- `DELETE /api/courses/:id` - Delete a specific course

---
