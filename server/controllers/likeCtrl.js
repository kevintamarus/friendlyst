const Like = require('../db/index').Like;

module.exports = {

  getLikes: ((req, res) => {
    console.log(req.query, 'this is the body')
    Like.findAll({
      where: {
        postId: req.query.postId
      },
      limit: 10,
      order: [
        ['createdAt', 'ASC']
      ]
    })
    .then(likes => res.status(200).send(likes))
    .catch(err => res.status(500).send(`Can't find likes! ${err}`))
  }),

  likePost: ((req, res) => {
    Like.findOrCreate({
      where: {
        userId: req.body.userId,
        postId: req.body.postId
      }
    })
      .spread((liked, created) => {
        if (created) {
          res.status(201).send(`Post liked!`)
        } else {
          res.status(500).send(`Already liked post!`)
        }
      })
      .catch(err => res.status(500).send(`Error liking post! ${err}`))
  }),

  likeComment: ((req, res) => {
    Like.findOrCreate({
      where: {
        userId: req.body.userId,
        userCommentId: req.body.userCommentId
      }
    })
      .spread((liked, created) => {
        if (created) {
          res.status(201).send(`Comment liked!`)
        } else {
          res.status(500).send(`Already liked comment!`)
        }
      })
      .catch(err => res.status(500).send(`Error liking comment! ${err}`))
  }),

  unlikePost: ((req, res) => {
    Like.destroy({
      where: {
        userId: req.query.userId,
        postId: req.query.postId
      }
    })
      .then((num) => {
        return num ? res.status(200).send(`Post unliked!`) : res.status(500).send(`Post like doesn't exist!`)
      })
      .catch(err => res.status(500).send(`Can't unlike post! ${err}`))
  }),

  unlikeComment: ((req, res) => {
    Like.destroy({
      where: {
        userId: req.body.userId,
        userCommentId: req.body.userCommentId
      }
    })
      .then((num) => {
        return num ? res.status(200).send(`User comment unliked!`) : res.status(500).send(`User comment like doesn't exist!`)
      })
      .catch(err => res.status(500).send(`Can't unlike user comment! ${err}`))
  })

};