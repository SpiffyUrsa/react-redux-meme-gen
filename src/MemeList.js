import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Meme from "./Meme"
import { v4 as uuidv4 } from 'uuid';

function MemeList() {
  const memes = useSelector(store => store.memes);
  const dispatch = useDispatch();

  const memeDisplay = memes.map(meme => 
    <Meme
       
      topText={meme.topText} 
      bottomText={meme.bottomText} 
      imgUrl={meme.imgUrl} 
      key={uuidv4()}
    />);

  return (
    <section id="meme-display">
      {memeDisplay}
    </section>
  )
}

export default MemeList;