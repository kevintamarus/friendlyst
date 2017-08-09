const router = require('express').Router()


router.post('/message', (req, res) => {
  console.log(req.body)
})

module.exports = router