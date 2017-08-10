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
          // to: req.body.to,
          // from: req.body.from,
          userId: req.body.mainUserId,
          partnerId: friend.dataValues.id,
          message: req.body.message
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
    .then(users => {
      // console.log(users)
      users = users.map(user => user.dataValues.id)
    
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