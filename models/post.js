// models/post.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Post = db.define('Post', {
  // Define the schema of the posts table
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  // Add any other fields as needed
});

// Define associations (if any)
// For example, if a post belongs to a user:
// Post.belongsTo(User);

module.exports = Post;
