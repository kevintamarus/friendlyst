const Sequelize = require('sequelize');
const Post = require('../db/index').Post;
const User = require('../db/index').User;

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
  })
};