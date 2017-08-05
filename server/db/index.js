const Sequelize = require('sequelize');
const db = require('./config');

const User = db.define('user', {
  username: {type: Sequelize.STRING, allowNull: false},
  password: {type: Sequelize.STRING, allowNull: false},
  profilePicture: {type: Sequelize.TEXT, allowNull: true}
});

const Friend = db.define('friend', {
  friendId: {type: Sequelize.INTEGER, allowNull: false},
  profilePicture: {type: Sequelize.TEXT, allowNull: true}
});

const Post = db.define('post', {
  message: {type: Sequelize.TEXT, allowNull: false},
});

const UserComment = db.define('userComment', {
  userComment: {type: Sequelize.TEXT, allowNull: false},
});

const Like = db.define('like', {}); 

User.hasMany(Friend);
User.hasMany(Post);
User.hasMany(UserComment);
User.hasMany(Like);
Friend.belongsTo(User);
Post.belongsTo(User);
Post.hasMany(UserComment);
Post.hasMany(Like);
UserComment.belongsTo(User);
UserComment.belongsTo(Post);
Like.belongsTo(Post);
Like.belongsTo(User);

User.sync();
Friend.sync();
Post.sync();
UserComment.sync();
Like.sync();

module.exports = {
  User,
  Friend,
  Post,
  UserComment,
  Like
};