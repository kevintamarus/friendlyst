const User = require('../db/index').User;
const UserComment = require('../db/index').UserComment;

module.exports = {

  getAllCommentForPost: ((req, res) => {

  }),

  deleteComment: ((req, res) => {

  }),

  postComment: ((req, res) => {
    UserComment.create({
        userComment: req.body.comment,
        userId: req.body.id,
        postId: req.body.postId
      })
      .then(comment => res.status(201).send(comment))
      .catch(err => res.status(500).send(`Error creating comment! ${err}`))
  })

};