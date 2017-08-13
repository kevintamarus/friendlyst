const Message = require('../db/index').Message;
const User = require('../db/index').User;

module.exports = {

  postMessage: ((req, res) => {
   
    Message.create({
      to: req.body.to,
      from: req.body.from,
      userId: req.body.userId,
      partnerId: req.body.friendId,
      message: req.body.message
    })
    .then(message => {
      res.status(201).send(message)
    })
    .catch(err => res.status(500).send(`Can't post message! ${err}`))
  }),

  getAllMessage: ((req, res) => {

    console.log(req.query)
    Message.findAll({
        where: {
          userId: [req.query.userId, req.query.friendId],
          partnerId: [req.query.friendId, +req.query.userId]
        },
        order: [
          ['createdAt', 'ASC']
        ]
      })
      .then(messages => {
        if (req.query.friendId === req.query.userId) {
          messages = messages.filter(message => message.dataValues.userId === message.dataValues.partnerId)
          return res.status(200).send(messages)
        }
        messages = messages.filter(message => message.dataValues.userId !== message.dataValues.partnerId)
        
        res.status(200).send(messages)
      })
      .catch(err => res.status(500).send(`Can't get messages! ${err}`))
  })


}