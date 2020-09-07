import React from "react";

/** Renders meme
 * 
 * props :{id, topText, bottomText, imgUrl, handleClick}
 * 
 * renders the information passed in props
 * 
 * MemeList -> Meme -> view(meme)
*/
function Meme({id, topText, bottomText, imgUrl, handleClick}) {

  return (
    <div className="Meme meme my-3" >
      <h1 className="topText text-center py-2">{topText}</h1>
      <img id={id} onClick={handleClick} className="memeImg img-fluid rounded" src={imgUrl} alt={`${topText} ${bottomText}`} />
      <h1 className="bottomText text-center py-2">{bottomText}</h1>
    </div>
  )
}

export default Meme;