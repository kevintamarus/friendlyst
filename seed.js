const models = require('./server/db/index');

models.User.sync({force: true})
  .then(() => {
    models.User.bulkCreate([
      {
        email: 'joejoe',
        password: 'joejoe',
        profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
      },
      {
        email: 'james',
        password: 'james',
        profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
      },
      {
        email: 'taeminpak',
        password: 'taeminpak',
        profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
      },
      {
        email: 'kevin',
        password: 'kevin',
        profilePicture: 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/19366468_10100764456410460_270583895771912490_n.jpg?oh=20a818a4fa156b1a4e7b4424589ff832&oe=59F19DE8'
      }
    ])
  })
  .then(() => {
    models.Friend.sync({force: true})
      .then(() => {
        models.Friend.bulkCreate([
          {
            id: 1,
            userId: 1,
            buddyId: 4
          },
          {
            id: 2,
            userId: 1,
            buddyId: 3
          },
          {
            id: 3,
            userId: 2,
            buddyId: 3
          },
          {
            id: 4,
            userId: 3,
            buddyId: 2
          },
          {
            id: 5,
            userId: 4,
            buddyId: 1
          }
        ])
      })
  })
  .then(() => {
    models.Post.sync({force: true})
      .then(() => {
        models.Post.bulkCreate([
          {
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
  })
  .then(() => {
    models.UserComment.sync({force: true})
    .then(() => {
        models.UserComment.bulkCreate([
          {
            comment: 'I am commenting on this',
            postId: 1
          },
          {
            comment: 'test comment test comment',
            postId: 1
          }
        ])
      })
  })
  .then(() => {
    models.Like.sync({force: true})
  })
  .then(() => {
    models.Message.sync({force: true})
  })
  .catch(err => console.log(`Error seeding db! ${err}`))