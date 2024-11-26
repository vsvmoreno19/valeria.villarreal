import express from 'express';

import postController from '../controllers/post';

const router = express.Router();

// Get all posts
router.get('/', postController.getPosts);

// Get posts by category
router.get('/category/:category', postController.getPostsByCategory);

// Get post by id
router.get('/:id', postController.getPostById);

// Create posts
router.post('/', postController.createPost);

// Create comment for post
router.post('/:id/comments', postController.createCommentForPost);

// Update posts
router.patch('/:id', postController.updatePost);

// Delete posts
router.delete('/:id', postController.deletePost);

export default router;