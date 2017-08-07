const Sequelize = require('sequelize');
const Post = require('../db/index').Post;
const User = require('../db/index').User;
const Friend = require('../db/index').Friend;

module.exports = {
  post: ((req, res) => {
    User.find({
      where: {username: req.body.username}
    })
      .then(user => {
        Post.create({
          message: req.body.message,
          username: req.body.username,
          userId: user.id
        })
          .then(post => res.status(201).send('Posted!'))
          .catch(err => res.status(500).send(`Can't post! ${err}`))
      })
      .catch(err => res.status(500).send(`Can't find user! ${err}`))
  }),
  getAllUserPost: ((req, res) => {
    User.find({
      where: {username: req.query.username}
    })
      .then(user => {
        Post.findAll({
          where: {userId: user.dataValues.id},
          limit: 10,
          order: [['createdAt', 'ASC']]
        })
          .then(posts => res.status(200).send(posts))
          .catch(err => res.status(500).send(`Can't find user post! ${err}`))
      })
      .catch(err => res.status(500).send(`Can't find user! ${err}`))
  }),
  getAllFriendPost: ((req, res) => {
    User.find({
      where: {username: req.query.username}
    })
      .then(user => {
        Friend.findAll({
          where: {userId: user.dataValues.id}
        })
          .then(friends => {
            friends = friends.map(friend => friend.dataValues.buddyId);
            Post.findAll({
              where: {userId: friends},
              limit: 10,
              order: [['createdAt', 'ASC']]
            })
              .then(posts => {
                posts = posts.map(post => post.dataValues);
                res.status(200).send(posts);
              })
              .catch(err => console.log(`Can't find friend posts! ${err}`))
          })
          .catch(err => res.status(500).send(`Can't find friends! ${err}`))
      })
      .catch(err => res.status(500).send(`Can't find user! ${err}`))
  })
};