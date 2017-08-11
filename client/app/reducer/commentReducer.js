module.exports = (state = {
  comments: []
}, action) => {
  switch (action.type) {
    case 'NEW_POST':
      state = Object.assign({}, state, {
        comments: [...state.comments, action.payload]
      })

      return state
    default:
      return state
  }
}