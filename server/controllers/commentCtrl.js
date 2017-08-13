const UserComment = require('../db/index').UserComment;
const Post = require('../db/index').Post;
const User = require('../db/index').User

module.exports = {

  postComment: ((req, res) => {
    User.find({
      where: {email: req.body.email}
    })
    .then(user => {
      UserComment.create({
        comment: req.body.message,
        postId: req.body.postId,
        userId: user.id,
      })
      .then(comment => res.status(201).send(comment))
      .catch(err => res.status(500).send(`Can't comment! ${err}`))
    })
    .catch(err => res.status(500).send(`Can't find user! ${err}`))
  }),

  getAllCommentForPost: ((req, res) => {
    UserComment.findAll({
          where: {
            postId: req.body.id
          },
          limit: 10,
          order: [
            ['createdAt', 'ASC']
          ]
        })
        .then(comments => res.status(200).send(comments))
        .catch(err => res.status(500).send(`Can't find comments! ${err}`))
    })
};