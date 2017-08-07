const Sequelize = require('sequelize');
const Post = require('../db/index').Post;
const User = require('../db/index').User;
const Friend = require('../db/index').Friend;

module.exports = {
  post: ((req, res) => {
    const username = req.body.username;
    const message = req.body.message;
    User.find({
      where: {username}
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
    console.log(req.query);
    User.find({
      where: {username: req.query.userame}
    })
      .then(user => {
        Friend.findAll({
          
        })
      })
      .catch(err => res.status(500).send(err))
    // console.log(req.query.id);
    // Friend.findAll({
    //   where: {userId: req.query.id}
    // })
    //   .then(friends => {
    //     console.log(friends);
    //     let postArr = [];
    //     friends.forEach(friend => {
    //       console.log(friend.dataValues.buddyId);
    //       Post.findAll({
    //         where: {userId: friend.dataValues.buddyId}
    //       })
    //         .then(posts => {
    //           postArr.concat(posts);
    //         })
    //     })
    //     return postArr;
    //   })
    //     .then(posts => {
    //       res.status(200).send(posts);
    //     })
  }),
  deletePost: ((req, res) => {
    Post.destroy({
      where: {username: req.body.username}
    })
      .then(() => res.status(200).send('Deleted'))
      .catch(err => res.status(500).send(err))
  })
};