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
        username: 'kevin',
        password: 'kevin'
      }
    ])
  })
  .catch(err => console.log(err))

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
        userId: 2,
        buddyId: 3
      },
      {
        id: 3,
        userId: 1,
        buddyId: 3
      }
    ])
  })

models.Post.sync({force: true})

models.UserComment.sync({force: true})

models.Like.sync({force: true})