const Message = require('../db/index').Message;
const User = require('../db/index').User;

module.exports = {

  postMessage: ((req, res) => {
    User.find({
      where: {email: req.body.friendEmail}
    })
    .then(friend => {
        console.log('?????????', req.body, friend.dataValues)
        Message.create({
          userId: req.body.mainUserId,
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
      where: {email: [req.query.mainUserEmail, req.query.friendEmail]}
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