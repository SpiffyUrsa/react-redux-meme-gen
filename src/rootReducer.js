
const INITIAL_STATE = {
  memes: []
}

/**  Functions to create/modify state : memes
 * 
 * Initially sets to empty list
 * 
 * Two cases :
 * -ADD_MEME -> adds the payload to memes list, returns the new list of memes
 * -DELETE_MEME -> deletes the meme that matches id passed in payload, returns the new list of memes
 * 
 * Returns list of memes
 */
function rootReducer(currentState = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_MEME":
      return { memes: [...currentState.memes, action.payload] }
    case "DELETE_MEME":
      const updatedMemes = currentState.memes.
        filter((meme, idx) => {
          return idx.toString() !== action.payload
        })
      console.log("updatedMemes", updatedMemes)

      return { memes: updatedMemes };
    default:
      return currentState;
  }
}

export default rootReducer;