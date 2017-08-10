const router = require('express').Router();

router.use('/user', require('./user'));
router.use('/friend', require('./friend'));
router.use('/post', require('./post'));
router.use('/userComment', require('./usercomment'));
router.use('/like', require('./like'));
router.use('/message', require('./message'));

module.exports = router;