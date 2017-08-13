module.exports = (state = {
  friendinfo: {}
}, action) => {
  switch (action.type) {
    case 'NEW_FRIENDINFO':
      state = Object.assign({}, state, {
        friendinfo: action.payload
      })
      return state
    default:
      return state
  }
}

