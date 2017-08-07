const Sequelize = require('sequelize');
const User = require('../db/index').User;

module.exports = {
  addUser: ((req, res) => {
    const profilePicture = req.body.profilePicture || 'https://goo.gl/Vmv1zN';
    User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: req.body.password,
      profilePicture
    })
      .then(user => res.status(201).send(user))
      .catch(err => res.status(500).send(err))
  }),
  getAll: ((req, res) => {
    User.findAll({})
      .then(users => res.status(200).send(users))
      .catch(err => res.status(500).send(err))
  })
}