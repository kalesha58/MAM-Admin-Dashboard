const express = require('express');
const router = express.Router();

// POST /api/auth/login - User login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Basic validation
  if (!email || !password) {
    return res.status(400).json({
      message: 'Email and password are required',
      status: 'error'
    });
  }

  // Mock login response (replace with actual authentication logic)
  res.json({
    message: 'Login successful',
    data: {
      user: {
        id: '1',
        email: email,
        name: 'Admin User'
      },
      token: 'mock-jwt-token-here'
    },
    status: 'success'
  });
});

// POST /api/auth/register - User registration
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  
  // Basic validation
  if (!name || !email || !password) {
    return res.status(400).json({
      message: 'Name, email and password are required',
      status: 'error'
    });
  }

  // Mock registration response
  res.status(201).json({
    message: 'User registered successfully',
    data: {
      user: {
        id: '2',
        name: name,
        email: email
      }
    },
    status: 'success'
  });
});

// POST /api/auth/logout - User logout
router.post('/logout', (req, res) => {
  res.json({
    message: 'Logout successful',
    status: 'success'
  });
});

// GET /api/auth/me - Get current user
router.get('/me', (req, res) => {
  // Mock current user response
  res.json({
    message: 'Current user retrieved',
    data: {
      user: {
        id: '1',
        name: 'Admin User',
        email: 'admin@example.com'
      }
    },
    status: 'success'
  });
});

module.exports = router;
