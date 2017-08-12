const router = require('express').Router();
const controller = require('../controllers/likeCtrl');

router.post('/likePost', controller.likePost);
router.post('/likeComment', controller.likeComment);
router.delete('/unlikePost', controller.unlikePost);
router.delete('/unlikeComment', controller.unlikeComment);

module.exports = router;