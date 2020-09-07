import React from "react";

function Meme({topText, bottomText, imgUrl}) {

  return (
    <div className="Meme meme my-3">
      <h1 className="topText text-center py-2">{topText}</h1>
      <img className="memeImg img-fluid rounded" src={imgUrl} alt={`${topText} ${bottomText}`} />
      <h1 className="bottomText text-center py-2">{bottomText}</h1>
    </div>
  )
}

export default Meme;