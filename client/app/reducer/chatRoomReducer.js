module.exports = (state={
  chatRooms: []
}, action) => {
  switch(action.type) {
    case 'ADD_ROOM':
      state = Object.assign({}, state, {
        chatRooms: [...state.chatRooms, action.payload]
      })
      return state
    case 'CLOSE_ROOM':
      let remainingRooms = [...state.chatRooms].slice(0, state.chatRooms.length - 1)
      state = Object.assign({}, state, {
        chatRooms: remainingRooms
      })
      return state

    default:
      return state
  }
}