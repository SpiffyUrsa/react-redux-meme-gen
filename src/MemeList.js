import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Meme from "./Meme"

function MemeList() {
  const memes = useSelector(store => store.memes);
  const dispatch = useDispatch();

  const memeDisplay = memes.map(meme => 
    <Meme 
      topText={meme.topText} 
      bottomText={meme.bottomText} 
      imgUrl={meme.imgUrl} 
    />);

  return (
    <section id="meme-display">
      {memeDisplay}
    </section>
  )
}

export default MemeList;