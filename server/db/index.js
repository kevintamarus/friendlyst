const Sequelize = require('sequelize');
const db = require('./config');

const User = db.define('user', {
  username: {type: Sequelize.STRING, allowNull: false},
  password: {type: Sequelize.STRING, allowNull: false},
  profilePicture: {type: Sequelize.TEXT, allowNull: true}
});

const Friend = db.define('friend', {
  username: {type: Sequelize.STRING, allowNull: false},
  profilePicture: {type: Sequelize.TEXT, allowNull: true}
});

const Post = db.define('post', {
  username: {type: Sequelize.STRING, allowNull: false},
  post: {type: Sequelize.TEXT, allowNull: false},
  comment: {type: Sequelize.TEXT, allowNull: true},
});

db.sync(User);
db.sync(Friend);
db.sync(Post);

module.exports = {
  User,
  Friend,
  Post
};