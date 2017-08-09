const Message = require('../db/index').Message;

module.exports = {
  postMessage: ((req, res) => {
    Message.create({
      where: {
        userId: req.query.from,
        messagePartnerId: req.body.to,
        message: msg
      }
    })
      .then(message => {
        res.status(201).send(message)
      })
      .catch(err => res.status(500).send(`Can't post message! ${err}`))
  }),

  getAllMessage: ((req, res) => {
    Message.findAll({
      where: {
        userId: req.query.from,
        messagePartnerId: req.query.to
      }
        .then(messages => {
          res.status(200).send(messages)
        })
        .catch(err => res.status(500).send(`Can't get messages! ${err}`))
    })
  })
}