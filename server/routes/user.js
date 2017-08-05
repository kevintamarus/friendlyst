const router = require('express').Router();
const controller = require('../controllers/userCtrl');

router.post('/addUser', controller.addUser);
router.get('/getAll', controller.getAll);

module.exports = router;