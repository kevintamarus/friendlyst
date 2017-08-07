const router = require('express').Router();
const controller = require('../controllers/postCtrl');

router.post('/post', controller.post);
router.get('/getAllUserPost', controller.getAllUserPost);
router.get('/getAllFriendPost', controller.getAllFriendPost)

module.exports = router;