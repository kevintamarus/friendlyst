const router = require('express').Router();
const controller = require('../controllers/postCtrl');

router.post('/post', controller.post);
router.get('/getAll', controller.getAll);

module.exports = router;