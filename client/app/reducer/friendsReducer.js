module.exports = (state = {
  friends: []
}, action) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      state = Object.assign({}, state, {
        friends: action.payload
      })
      return state
    case 'FRIEND_OFFLINE':
      state = Object.assign({}, state, {
        friends: action.payload
      })
      return state


    default:
      return state
  }
}