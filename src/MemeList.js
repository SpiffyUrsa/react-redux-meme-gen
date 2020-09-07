import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Meme from "./Meme"
import { v4 as uuidv4 } from 'uuid';

/** Renders list of memes
 * 
 * fetch memes and iterate through each meme and render Meme component for each one of them
 * 
 * function : handleDelete
 * invoke dispatch by passing type and payload to delete meme from memes list
 * 
 * App -> MemeList -> Meme
 */
function MemeList() {
  const memes = useSelector(store => store.memes);
  const dispatch = useDispatch();

  function handleDelete(evt){
    console.log("deleting")
    const id = evt.target.id
    console.log("deleting id", id)
    dispatch({type: "DELETE_MEME", payload : id})
  }

  const memeDisplay = memes.map((meme, idx) => 
    <Meme
      id={idx}
      topText={meme.topText} 
      bottomText={meme.bottomText} 
      imgUrl={meme.imgUrl} 
      key={uuidv4()}
      handleClick={handleDelete}
    />);

  return (
    <section id="meme-display">
      {memeDisplay}
    </section>
  )
}

export default MemeList;