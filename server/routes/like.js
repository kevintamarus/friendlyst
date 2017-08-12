const router = require('express').Router();
const controller = require('../controllers/likeCtrl');

router.post('/like', controller.like);

module.exports = router;