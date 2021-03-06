import React, { useState } from "react";

/** Renders a Form 
 * 
 * props: generateMeme (function passed by parent component)
 * 
 * state: formData 
 * 
 * functions : 
 * -handleChange => To keep track of change in values
 * -handleSubmit => invoke generateMeme by passing formData
 * 
 * App -> MemeGenForm -> renders form
*/
function MemeGenForm({ generateMeme }) {
  const initialData = {
    topText: "",
    bottomText: "",
    imgUrl: ""
  }
  const [formData, setFormData] = useState(initialData)

  const { topText, bottomText, imgUrl } = formData;


  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  //Invoke dispatch here
  function handleSubmit(evt) {
    evt.preventDefault();
    generateMeme(formData);
    setFormData(initialData)
  }

  return (
    <section id="gen-fields" className="container">
      <form id="meme-form" onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="img-link" className="col-md-2 col-form-label"> Meme Image URL:</label>
          <input
            name="imgUrl"
            value={imgUrl}
            onChange={handleChange}
            className="form-control col-md-10"
            id="img-link"
            placeholder="Meme Image URL"
          />
        </div>
        <div className="form-group row">
          <label htmlFor="top-text" className="col-md-2 col-form-label">Top Text:</label>
          <input
            name="topText"
            value={topText}
            onChange={handleChange}
            className="form-control col-md-10"
            id="top-text"
            placeholder="Top Text"
          />
        </div>
        <div className="form-group row">
          <label htmlFor="bottom-text" className="col-md-2 col-form-label">Bottom Text:</label>
          <input
            name="bottomText"
            value={bottomText}
            onChange={handleChange}
            className="form-control col-md-10"
            id="bottom-text"
            placeholder="Bottom Text"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block" id="submit-meme">Generate Meme</button>
        </div>
      </form>
    </section>
  )
}

export default MemeGenForm;