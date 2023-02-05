
const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// TODO - create a POST route for creating a new post
// This should be a protected route, so you'll need to use the withAuth middleware
router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// TODO - create a PUT route for updating a post's title or body
// This should be a protected route, so you'll need to use the withAuth middleware


// TODO - create a DELETE route for deleting a post with a specific id
// This should be a protected route, so you'll need to use the withAuth middleware
router.post('/delete/:id', withAuth, async (req, res) => {
    try {
      const deletePost = await Post.destroy({
        where: {
          id: req.params.id,
          
        },
      });
  
      if (!deletePost) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.redirect('/dashboard');
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
