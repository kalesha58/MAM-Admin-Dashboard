# Admin Panel Backend

A Node.js and Express backend application with MongoDB integration for the Admin Panel.

## Features

- Express.js server with middleware setup
- MongoDB connection using Mongoose
- CORS enabled for cross-origin requests
- Security middleware (Helmet)
- Request logging (Morgan)
- Environment configuration
- Basic API routes for users and authentication
- Nodemon for development

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation

1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `config.env` and update the MongoDB URI if needed
   - Default MongoDB URI: `mongodb://localhost:27017/admin-panel`

4. Make sure MongoDB is running on your system

## Running the Application

### Development Mode (with nodemon)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on port 5000 by default (configurable via PORT environment variable).

## API Endpoints

### Health Check
- `GET /` - Basic server status
- `GET /api/health` - Detailed health check with database status

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Project Structure

```
Backend/
├── config/
│   └── database.js          # Database connection configuration
├── models/
│   └── User.js             # User model schema
├── routes/
│   ├── authRoutes.js       # Authentication routes
│   └── userRoutes.js       # User management routes
├── config.env              # Environment variables
├── nodemon.json            # Nodemon configuration
├── package.json            # Dependencies and scripts
├── server.js               # Main server file
└── README.md               # This file
```

## Environment Variables

- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `NODE_ENV` - Environment (development/production)

## Development

The application uses nodemon for automatic server restarts during development. The server will restart automatically when you make changes to:
- server.js
- Files in routes/, config/, or models/ directories
- Any .js or .json files

## Next Steps

1. Implement proper authentication with JWT
2. Add input validation and sanitization
3. Implement proper error handling
4. Add database models for your specific use case
5. Add API documentation (Swagger)
6. Implement logging system
7. Add unit and integration tests
