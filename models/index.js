// models/index.js

const { Sequelize } = require('sequelize');
const config = require('../config/config.json'); // Your database configuration
const UserModel = require('./user');
const PostModel = require('./post');

// Initialize Sequelize instance
const sequelize = new Sequelize(config.development);

// Initialize models
const User = UserModel(sequelize, Sequelize);
const Post = PostModel(sequelize, Sequelize);

// Define associations
User.hasMany(Post);
Post.belongsTo(User);

// Export models
module.exports = { User, Post, sequelize };
