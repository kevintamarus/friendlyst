module.exports = (state={
  notificationCount:0
}, action) => {
  switch(action.type) {
    case 'NEW_NOTIFICATION':
      state = Object.assign({}, state, {
        notificationCount: state.notificationCount + 1
      })
      return state
    case 'RESET_NOTIFICATION':
      state = Object.assign({}, state, {
        notificationCount:0
      })
      return state


    default:
      return state
  }
}