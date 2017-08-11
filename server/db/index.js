const Sequelize = require('sequelize');
const db = require('./config');

const User = db.define('user', {
  nickname: {type: Sequelize.STRING, allowNull: true},
  email: {type: Sequelize.STRING, allowNull: false},
  password: {type: Sequelize.STRING, allowNull: false},
  profilePicture: {type: Sequelize.TEXT, allowNull: true}
}, {timestamps: false});

const Friend = db.define('friend', {});

const Post = db.define('post', {
  message: {type: Sequelize.TEXT, allowNull: false}
});

const UserComment = db.define('userComment', {
  userComment: {type: Sequelize.TEXT, allowNull: false}
});

const Like = db.define('like', {});

const Message = db.define('message', {
  message: {type: Sequelize.TEXT, allowNull: false},
  userId: {type: Sequelize.INTEGER, allowNull: false},
  partnerId: {type: Sequelize.INTEGER, allowNull: false}
});

User.belongsToMany(User, {as:'buddy', through: Friend, unique: false, allowNull: true});

// User.belongsToMany(User, {as:'messagePartner', through: Message, unique: false, allowNull: true});

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(UserComment);
UserComment.belongsTo(User);

User.hasMany(Like);
Like.belongsTo(User);

Post.hasMany(UserComment);
UserComment.belongsTo(Post);

Post.hasMany(Like);
Like.belongsTo(Post);

User.sync();
Friend.sync();
Post.sync();
UserComment.sync();
Like.sync();
Message.sync();

module.exports = {
  User,
  Friend,
  Post,
  UserComment,
  Like,
  Message
};