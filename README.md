📝 iTask-Manager

iTask-Manager is a simple yet powerful task management app built with React.js, Express.js, and MongoDB Atlas. It allows users to manage tasks along with usernames, with full functionality like adding, editing, deleting, completing, and copying tasks.

✨ Features

✅ Add new tasks with a username

✏️ Edit existing tasks in one click

✅ Mark tasks as completed using checkboxes

📋 Copy task or username using the clipboard API

🗑️ Delete tasks from the list

🔔 Real-time toast notifications for actions

📱 Responsive and clean UI using Tailwind CSS

🔧 Tech Stack

Frontend: React.js (Functional components + Hooks)

Styling: Tailwind CSS

Icons: react-icons

Notifications: react-toastify

Clipboard: navigator.clipboard API

ID Generator: uuid

Backend: Express.js + MongoDB Atlas

🖼️ Home Page
![Home Page](/src/assets/web.png)


🚀 Getting Started

Follow these steps to run the project locally:

1. Clone the Repository
git clone https://github.com/tulsishukla/iTask-Manager.git
cd iTask-Manager

2. Setup Backend
cd backend
npm install


Create a .env file inside the backend folder and add the following:

PORT=3000
MONGO_URL=your_mongodb_atlas_connection_string


Start the backend server:

npm start


The backend will run at: http://localhost:3000

3. Setup Frontend
cd frontend
npm install
npm run dev


The frontend will run at: http://localhost:5173 (default Vite port)

🌐 Deployment

Frontend deployed on: Vercel

Backend: Runs locally (planning deployment soon 🚀)

📌 Notes

Make sure your backend is running before using the frontend.

Update the frontend API URL if you deploy your backend publicly.

Don’t forget to set the correct .env variables.

👉 This README makes it easy for others to:

Understand your project

Set up .env properly

Run both frontend & backend

