// models/index.js

const { Sequelize } = require('sequelize');
const config = require('../config/config.json'); // Your database configuration
const User = require('./user'); // Import the User model directly
const PostModel = require('./post');

// Initialize Sequelize instance
const sequelize = new Sequelize(config.development);

// Initialize models
const Post = PostModel(sequelize, Sequelize); // Use the PostModel function

// Define associations
User.hasMany(Post);
Post.belongsTo(User);

// Export models
module.exports = { User, Post, sequelize };
