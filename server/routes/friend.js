const router = require('express').Router();
const controller = require('../controllers/friendCtrl');

router.post('/addFriend', controller.addFriend);
router.get('/getAllFriend', controller.getAllFriend);
router.delete('/deleteFriend', controller.deleteFriend);

module.exports = router;