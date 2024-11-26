import Comment from '../models/comment';
import Post from '../models/post';


export const getPost = (id: string) => {
  return posts.find((p) => p.id === id);
};

const posts = [];

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

// GET /posts/category/:category 
const getPostsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const post = await Post.find({category});
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

// GET /posts/:id 
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, image, description, category, comments} = req.body;

    if (!title || !image || !description || !category) {
      return res.status(400).json({ message: 'Review some fields are missing.' });
    }
    const newPost = {
      title,
      image,
      description,
      category,
      comments
    };
    const post = await Post.create(newPost);
    res.status(201).json(post);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

// POST /posts/:id/comments
const createCommentForPost = async (req, res) => {
    try {
      const { id } = req.params;
      const { author, content} = req.body;
  
      const post = await Post.findById(id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      if (!author || !content) {
        return res.status(400).json({ message: 'Review some fields are missing.' });
      }
  
      const newComment = {
        author,
        content
      };
      const comment = await Comment.create(newComment);
      post.comments.push(comment._id.toString());
      await post.save();
  
      res.status(201).json(comment);
  
    } catch (error) {
      const { message } = error;
      res.status(500).json({ message });
    }
  };
  

// PATCH /posts/:id 
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

// DELETE /posts/:id 
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id, {});
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    await Comment.deleteMany({ _id: { $in: post.comments } });
    res.status(200).json(post);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

export default {
  getPosts,
  getPostsByCategory,
  getPostById,
  createPost,
  createCommentForPost,
  updatePost,
  deletePost
};