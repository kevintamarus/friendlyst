const friendsReducer = require('./friendsReducer')
const postReducer = require("./postReducer")
const { combineReducers } = require('redux')

module.exports = combineReducers({
  friends: friendsReducer,
  newsFeed: postReducer
})