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
  message: {type: Sequelize.TEXT, allowNull: false},
});

const UserComment = db.define('userComment', {
  userComment: {type: Sequelize.TEXT, allowNull: false},
});

const Like = db.define('like', {
  username: {type: Sequelize.STRING, allowNull: false}
}); 

User.hasMany(Friend);
Friend.belongsTo(User);
User.hasMany(Post);
Post.belongsTo(User);
User.hasMany(UserComment);
UserComment.belongsTo(User);
Post.hasMany(Like);
Like.belongsTo(Post);

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