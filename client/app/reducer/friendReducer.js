module.exports = (state = {
  friend: {}
}, action) => {
  switch (action.type) {
    case 'NEW_FRIEND':
      state = Object.assign({}, state, {
        friend: action.payload
      })

      return state
    default:
      return state
  }
}