
const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

// TODO - create a POST route for creating a new comment
// This should be a protected route, so you'll need to use the withAuth middleware
router.post ('/', withAuth, async (req, res) => {
    try {
        const comment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

