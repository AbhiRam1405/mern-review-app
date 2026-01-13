# MERN Review App

A production-ready review submission application built with the MERN stack (MongoDB, Express, React, Node.js).
This project demonstrates a clean, scalable architecture suitable for beginners and interview scenarios.

## Features

- **Submit Reviews**: Users can submit a name, rating (1-5), and comment.
- **View Reviews**: Real-time listing of all submitted reviews, sorted by newest.
- **Form Validation**: Client-side and server-side validation for data integrity.
- **Responsive UI**: Clean, accessible interface built with React.
- **Robust Backend**: RESTful API with error handling and strict schema validation.

## Tech Stack

- **Frontend**: React (Hooks, Functional Components)
- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Tools**: Git, Nodemon, Dotenv, CORS

## Project Structure

```
mern-review-app/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components (ReviewForm, ReviewList)
│   │   ├── services/      # API service layer
│   │   └── App.js         # Main application container
│   └── package.json
│
├── server/                 # Express Backend
│   ├── config/            # Database connection logic
│   ├── controllers/       # Business logic
│   ├── middleware/        # Error handling & custom middleware
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API route definitions
│   └── server.js          # Entry point
│
├── .gitignore             # Git exclusions
└── README.md              # Project documentation
```

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- MongoDB (Running locally or MongoDB Atlas URI)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd mern-review-app
```

### 2. Backend Setup
```bash
cd server
npm install
cp .env.example .env
# Open .env and set your MONGO_URI (e.g., mongodb://localhost:27017/mern-review-app)
npm run dev
```
*Server runs on http://localhost:5000*

### 3. Frontend Setup
Open a new terminal:
```bash
cd client
npm install
npm start
```
*Client runs on http://localhost:3000*

## API Documentation

### Base URL: `/api/reviews`

| Method | Endpoint | Description | Body / Payload |
|:--- |:--- |:--- |:--- |
| **GET** | `/` | Fetch all reviews | None |
| **POST** | `/` | Create a new review | `{ "name": "John", "rating": 5, "comment": "Great!" }` |

### Validation Rules
- **Name**: Required, Max 50 chars.
- **Rating**: Required, Number 1-5.
- **Comment**: Required, Max 500 chars.

## Development Workflow
1.  Frontend calls `reviewService` methods.
2.  Service sends HTTP requests to Express backend.
3.  Backend validates data against Mongoose schema.
4.  Data saved to MongoDB.
5.  Response sent back to update UI.

## License
MIT
