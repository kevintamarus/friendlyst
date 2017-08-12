const Friend = require('../db/index').Friend;
const User = require('../db/index').User;

module.exports = {

  addFriend: ((req, res) => {
    User.find({
        where: {
          email: req.body.friend
        }
      })
      .then(friend => {
        Friend.findOrCreate({
            where: {
              userId: req.body.userId,
              buddyId: friend.dataValues.id
            }
          })
          .spread((connected, created) => {
            if (created) {
              res.status(201).send(connected);
            } else {
              res.status(500).send(`Already friends!`)
            }
          })
          .catch(err => res.status(500).send(`Error finding relationship! ${err}`))
      })
      .catch(err => res.status(500).send(`Error finding friend! ${err}`))
  }),

  deleteFriend: ((req, res) => {
    User.find({
        where: {
          email: req.body.friend
        }
      })
      .then(friend => {
        console.log(friend);
        Friend.destroy({
            where: {
              userId: req.body.userId,
              buddyId: friend.dataValues.id
            }
          })
          .then(num => res.status(200).send(`Friend deleted!`))
          .catch(err => res.status(500).send(`Error deleting friend! ${err}`))
      })
      .catch(err => res.status(500).send(`Error finding friend! ${err}`))
  }),

  getAllFriend: ((req, res) => {
    Friend.findAll({
        where: {
          userId: req.query.userId
        }
      })
      .then(friends => res.status(200).send(friends))
      .catch(err => res.status(500).send(`Error finding friends! ${err}`))
  })

}