const Comment = require('../db/index').Like;
const Post = require('../db/index').Post;
const User = require('../db/index').User

module.exports = {

  like: ((req, res) => {
    User.find({
      where: {email: req.body.email}
    })
    .then(user => {
      Comment.create({
        postId: req.body.postId,
        userId: user.id
      })
      .then(like => res.status(201).send('liked!'))
      .catch(err => res.status(500).send(`an error occured, couldn't like! ${err}`))
    })
    .catch(err => res.status(500).send(`Can't find user! ${err}`))
  })
};