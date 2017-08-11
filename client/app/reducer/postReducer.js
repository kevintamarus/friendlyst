module.exports = (state = {
  posts: []
}, action) => {
  switch (action.type) {
    case 'NEW_POST':
      state = Object.assign({}, state, {
        posts: [...state.posts, action.payload]
      })

      return state
    default:
      return state
  }
}