const router = require('express').Router();
const controller = require('../controllers/userCommentCtrl');

router.get('/getAllCommentForPost', controller.getAllCommentForPost);
router.post('/postComment', controller.postComment);
router.delete('/deleteComment', controller.deleteComment);

module.exports = router;