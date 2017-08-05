const Sequelize = require('sequelize');
const Post = require('../db/index').Post;
const User = require('../db/index').User;
const Friend = require('../db/index').Friend;

module.exports = {
  post: ((req, res) => {
    const username = req.body.username;
    const message = req.body.message;
    User.find({
      username
    })
      .then(user => {
        const userId = user.id;
        Post.create({
          message,
          userId
        })
          .then(post => res.status(201).send('success'))
          .catch(err => res.status(500).send(err))
      })
  }),
  getAll: ((req, res) => {
    Friend.findAll({
      userId: req.body.id
    })
      .then(friends => {
        let postArr = [];
        friends.forEach(friend => {
          Post.findAll({
            userId: friend.id
          })
            .then(posts => {
              postArr.concat(posts);
            })
        })
        return postArr;
      })
        .then(posts => {
          res.status(200).send(posts);
        })
  })
};