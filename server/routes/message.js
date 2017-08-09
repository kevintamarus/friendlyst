const router = require('express').Router();
const controller = require('../controllers/messageCtrl');

router.post('/postMessage', controller.postMessage);
router.get('/getAllMessage', controller.getAllMessage);

module.exports = router;