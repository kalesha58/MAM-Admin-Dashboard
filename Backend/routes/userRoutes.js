const express = require('express');
const router = express.Router();

// GET /api/users - Get all users
router.get('/', (req, res) => {
  res.json({
    message: 'Get all users',
    data: [],
    status: 'success'
  });
});

// GET /api/users/:id - Get user by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Get user with ID: ${id}`,
    data: null,
    status: 'success'
  });
});

// POST /api/users - Create new user
router.post('/', (req, res) => {
  const userData = req.body;
  res.status(201).json({
    message: 'User created successfully',
    data: userData,
    status: 'success'
  });
});

// PUT /api/users/:id - Update user
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  res.json({
    message: `User ${id} updated successfully`,
    data: updateData,
    status: 'success'
  });
});

// DELETE /api/users/:id - Delete user
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: `User ${id} deleted successfully`,
    status: 'success'
  });
});

module.exports = router;
