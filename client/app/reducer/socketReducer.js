module.exports = (state = {
  socket: {}
}, action) => {
  switch (action.type) {
    case 'NEW_SOCKET':
      state = Object.assign({}, state, {
        socket: action.payload
      })

      return state
    default:
      return state
  }
}