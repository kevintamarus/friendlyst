const Comment = require('../db/index').Comment;
const Post = require('../db/index').Post;
const User = require('../db/index').User

module.exports = {

  postComment: ((req, res) => {
    User.find({
      where: {email: req.body.email}
    })
    .then(user => {
      Comment.create({
        comment: req.body.message,
        postId: req.body.postId
      })
      .then(comment => res.status(201).send(comment))
      .catch(err => res.status(500).send(`Can't comment! ${err}`))
    })
    .catch(err => res.status(500).send(`Can't find user! ${err}`))
  })
};