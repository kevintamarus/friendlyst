const Message = require('../db/index').Message;
const User = require('../db/index').User;

module.exports = {

  postMessage: ((req, res) => {
    User.find({
      where: {email: req.body.to}
    })
      .then(friend => {
        Message.create({
          userId: req.body.from,
          messagePartnerId: friend.dataValues.id,
          message: req.body.msg
        })
          .then(message => {
            res.status(201).send(message)
          })
          .catch(err => res.status(500).send(`Can't post message! ${err}`))
      })
      .catch(err => res.status(500).send(`Cant find user! ${err}`))
  }),

  getAllMessage: ((req, res) => {
    User.findAll({
      where: {email: [req.query.mainUser, req.query.friend]}
    })
      .then(users => users.map(user => user.dataValues.id))
      .then(users => {
        Message.findAll({
          where: {
            userId: users,
            messagePartnerId: users
          },
          order: [['createdAt', 'ASC']]
        })
          .then(messages => res.status(200).send(messages))
          .catch(err => res.status(500).send(`Can't get messages! ${err}`))
      })
      .catch(err => res.status(500).send(`User can't be found! ${err}`))
  })
    
}