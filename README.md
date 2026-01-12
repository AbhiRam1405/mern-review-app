# MERN Review App

A simple, production-ready review submission application built with the MERN stack.

## Features

- Submit reviews with name, rating (1-5), and text
- View all submitted reviews
- RESTful API architecture
- MongoDB data persistence

## Tech Stack

- **Frontend**: React (functional components + hooks)
- **Backend**: Node.js + Express
- **Database**: MongoDB + Mongoose
- **API**: REST

## Project Structure

```
mern-review-app/
├── client/          # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/          # Express backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd "Web app"
```

### 2. Install dependencies

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Configure environment variables

```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB connection string
```

### 4. Run the application

```bash
# Terminal 1 - Run backend (from server/)
npm run dev

# Terminal 2 - Run frontend (from client/)
npm start
```

## API Endpoints

*To be documented in Phase 2*

## Development Phases

- [x] Phase 1: Project Initialization & Git Setup
- [ ] Phase 2: Backend Architecture & Database Design
- [ ] Phase 3: Server Configuration & Environment Setup
- [ ] Phase 4: Frontend Review Form (React)
- [ ] Phase 5: Review Listing & Data Rendering
- [ ] Phase 6: Git Discipline & Documentation

## Contributing

This is a learning project. Follow the commit conventions:
- Use descriptive commit messages
- One feature per commit
- Test before committing

## License

MIT

## Author

Abhishek
