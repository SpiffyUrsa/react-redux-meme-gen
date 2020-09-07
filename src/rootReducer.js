
const INITIAL_STATE = {
  memes: []
}

function rootReducer(currentState=INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_MEME":
      return {memes: [ ...currentState.memes, action.payload ]}
    case "DELETE_MEME":
      return {};
    default:
      return currentState;
  }
}

export default rootReducer;