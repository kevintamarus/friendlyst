const friendsReducer = require('./friendsReducer')
const postReducer = require("./postReducer")
const chatRoomReducer = require('./chatRoomReducer')
const { combineReducers } = require('redux')

module.exports = combineReducers({
  friends: friendsReducer,
  newsFeed: postReducer,
  chatRooms: chatRoomReducer
})