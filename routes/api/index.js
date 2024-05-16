// routes/api/index.js

const express = require('express');
const router = express.Router();

// Import controller modules
const postController = require('../../controllers/postController');
const userController = require('../../controllers/authController');

// Define API routes

// Posts API routes
router.get('/posts', postController.getAllPosts);
router.post('/posts', postController.createPost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

// Users API routes
router.post('/users/signup', userController.signup);
router.post('/users/login', userController.login);
router.post('/users/logout', userController.logout);

// Export the router
module.exports = router;
