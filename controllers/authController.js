// controllers/authController.js

const bcrypt = require('bcrypt');
const { User } = require('../models');

const authController = {
  // Handle user signup
  signup: async (req, res) => {
    try {
      const { username, password } = req.body;
      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);
      // Create a new user record in the database
      const newUser = await User.create({ username, password: hashedPassword });
      // Send a success response
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      // Handle errors
      console.error('Error in signup:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Handle user login
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      // Find the user in the database by username
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      // Compare the hashed password with the provided password
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Invalid password' });
      }
      // Set user session if login is successful
      req.session.user = user;
      // Send a success response
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      // Handle errors
      console.error('Error in login:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Handle user logout
  logout: (req, res) => {
    try {
      // Destroy user session
      req.session.destroy();
      // Redirect to homepage or send a success response
      res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      // Handle errors
      console.error('Error in logout:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = authController;
