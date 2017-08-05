const models = require('./server/db/index');

models.User.sync({force: true})
  .then(() => {
    models.User.bulkCreate([
      {
        username: 'joejoe',
        password: 'joejoe'
      },
      {
        username: 'james',
        password: 'james'
      },
      {
        username: 'taeminpak',
        password: 'taeminpak'
      },
      {
        username: 'keven',
        password: 'kevin'
      }
    ])
  })
  .catch(err => console.log(err))

models.Friend.sync({force: true})
  .then(() => {
    models.Friend.bulkCreate([
      {
        userId: 1,
        friendId: 4
      },
      {
        userId: 2,
        friendId: 3
      },
      {
        userId: 1,
        friendId: 3
      }
    ])
  })

models.Post.sync({force: true})

models.UserComment.sync({force: true})

models.Like.sync({force: true})