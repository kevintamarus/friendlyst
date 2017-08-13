const models = require('./server/db/index');

models.User.sync({
    force: true
  })
  .then(() => {
    models.User.bulkCreate([{
        email: 'joejoe',
        nickname: 'joejoe'
      },
      {
        email: 'james',
        nickname: 'james'
      },
      {
        email: 'taeminpak',
        nickname: 'taeminpak'
      },
      {
        email: 'kevin@hack.com',
        nickname: 'kevin',
        profilePicture: "https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/19366468_10100764456410460_270583895771912490_n.jpg?oh=20a818a4fa156b1a4e7b4424589ff832&oe=59F19DE8"
      }
    ])
  })
  .then(() => {
    models.Friend.sync({
        force: true
      })
      .then(() => {
        models.Friend.bulkCreate([{
            userId: 1,
            buddyId: 4
          },
          {
            userId: 1,
            buddyId: 3
          },
          {
            userId: 2,
            buddyId: 3
          },
          {
            userId: 3,
            buddyId: 2
          },
          {
            userId: 4,
            buddyId: 1
          },
          {
            userId: 4,
            buddyId: 2
          }
        ])
      })
      .catch(err => console.log(`Error creating friend data! ${err}`))
  })
  .then(() => {
    models.Post.sync({
        force: true
      })
      .then(() => {
        models.Post.bulkCreate([{
            message: 'Here we go!',
            userId: 4
          },
          {
            message: '@&$#$%@#',
            userId: 1
          },
          {
            message: 'Hmmmm.',
            userId: 2
          },
          {
            message: 'What do we have here?',
            userId: 3
          },
          {
            message: '僕は天才だ！',
            userId: 1
          },
          {
            message: '本当にどうしよう。。。',
            userId: 2
          },
          {
            message: 'English gentlemen, this is America.',
            userId: 4
          },
          {
            message: 'Fin',
            userId: 3
          }
        ])
      })
      .catch(err => console.log(`Error creating post data! ${err}`))
  })
  .then(() => {
    models.UserComment.sync({force: true})
    .then(() => {
        models.UserComment.bulkCreate([
          {
            userComment: 'I am commenting on this',
            userId: 4,
            postId: 1
          },
          {
            userComment: 'test comment test comment',
            userId: 4,
            postId: 1
          },
          {
            userComment: 'test comment on post 7',
            userId: 4,
            postId: 7
          },
          {
            userComment: 'test comment on post 2',
            userId: 4,
            postId: 2
          }
        ])
      })
  })
  .then(() => {
    models.Like.sync({
      force: true
    })
  })
  .then(() => {
    models.Message.sync({
      force: true
    })
  })
  .catch(err => console.log(`Error seeding db! ${err}`))