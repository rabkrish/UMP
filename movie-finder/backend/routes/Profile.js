const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Mock user data
const mockUser = {
  id: 'mockUserId',
  username: 'mockUser',
  email: 'mockuser@example.com',
};

// Get user profile
router.get('/', authMiddleware, async (req, res) => {
  try {
    // Mock response
    res.json(mockUser);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user profile
router.put('/', authMiddleware, async (req, res) => {
  const { username, email } = req.body;
  try {
    // Update mock user data
    mockUser.username = username || mockUser.username;
    mockUser.email = email || mockUser.email;
    res.json(mockUser);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
