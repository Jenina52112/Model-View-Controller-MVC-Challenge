// controllers/postController.js

const { Post } = require('../models');

const postController = {
  // Handle displaying all posts
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.findAll();
      res.status(200).json(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Handle creating a new post
  createPost: async (req, res) => {
    try {
      const { title, content } = req.body;
      const newPost = await Post.create({ title, content });
      res.status(201).json(newPost);
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Handle updating an existing post
  updatePost: async (req, res) => {
    try {
      const postId = req.params.id;
      const { title, content } = req.body;
      const updatedPost = await Post.update({ title, content }, { where: { id: postId } });
      res.status(200).json(updatedPost);
    } catch (error) {
      console.error('Error updating post:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Handle deleting a post
  deletePost: async (req, res) => {
    try {
      const postId = req.params.id;
      await Post.destroy({ where: { id: postId } });
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting post:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = postController;
