const router = require('express').Router();
const controller = require('../controllers/userCtrl');

router.post('/addUser', controller.addUser);
router.get('/getUser', controller.getUser);
router.get('/getUserById', controller.getUserById);
router.get('/getAllUser', controller.getAllUser);

module.exports = router;