const router = require('express').Router();
const controller = require('../controllers/postCtrl');

router.post('/postPost', controller.postPost);
router.get('/getAllUserPost', controller.getAllUserPost);
router.get('/getAllFriendPost', controller.getAllFriendPost);
router.delete('/deletePost', controller.deletePost);

module.exports = router;