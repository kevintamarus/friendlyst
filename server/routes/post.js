const router = require('express').Router();
const controller = require('../controllers/postCtrl');

router.post('/post', controller.post);

module.exports = router;