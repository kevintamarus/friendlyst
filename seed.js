const models = require('./server/db/index');

models.User.sync({
    force: true
  })
  .then(() => {
    models.User.bulkCreate([{
        email: 'joejoe@gmail.com',
        nickname: 'joejoe',
        profilePicture: "https://avatars3.githubusercontent.com/u/25360287?v=4&s=400"
      },
      {
        email: 'james@gmail.com',
        nickname: 'james',
        profilePicture: "https://avatars2.githubusercontent.com/u/30710715?v=4&s=200"
      },
      {
        email: 'taeminpak@gmail.com',
        nickname: 'taeminpak',
        profilePicture: "https://scontent-dft4-3.xx.fbcdn.net/v/t1.0-1/c9.0.160.160/p160x160/1236123_10202181547725371_1279259312_n.jpg?oh=d6e3a3b1db3988c47bc10944293de23c&oe=59EB09BA"
      },
      {
        email: 'kevin@gmail.com',
        nickname: 'kevin',
        profilePicture: "https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/19366468_10100764456410460_270583895771912490_n.jpg?oh=20a818a4fa156b1a4e7b4424589ff832&oe=59F19DE8"
      }
    ])
  })
  .then(() => {
    models.Friend.sync({
        force: true
      })
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
            userComment: 'Kevin, you suck!',
            userId: 3,
            postId: 1
          },
          {
            userComment: 'Trying my best, bro...Ping Pong???',
            userId: 4,
            postId: 1
          },
          {
            userComment: 'But Hack Reactor is not open right now',
            userId: 1,
            postId: 1
          },
          {
            userComment: 'What about Yellow House?',
            userId: 2,
            postId: 1
          },
          {
            userComment: 'test comment on post 7',
            userId: 4,
            postId: 7
          },
          {
            userComment: 'test comment on post 77',
            userId: 4,
            postId: 2
          },
          {
            userComment: 'TESTTTTTTTTTTTTT IT NOW!',
            userId: 2,
            postId: 6
          }
        ])
      })
  })
  .then(() => {
    models.Like.sync({force: true})
    .then(() => {
      models.Like.bulkCreate([
        {
          postId: 1,
          userId: 1,
        },
        {
          postId: 1,
          userId: 2,
        },
        {
          postId: 1,
          userId: 3,
        },
        {
          postId: 1,
          userId: 4,
        },
        {
          postId: 2,
          userId: 1,
        },
        {
          postId: 2,
          userId: 2,
        },
        {
          postId: 3,
          userId: 3,
        },
        {
          postId: 3,
          userId: 4,
        }
      ])
    })
  })
  .then(() => {
    models.Message.sync({
      force: true
    })
  })
  .catch(err => console.log(`Error seeding db! ${err}`))