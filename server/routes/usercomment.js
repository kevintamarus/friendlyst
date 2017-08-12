const router = require('express').Router();
const controller = require('../controllers/commentCtrl');

router.post('/postComment', controller.postComment);

module.exports = router;