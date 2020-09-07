import React from 'react';
import './App.css';
import Header from "./Header"
import MemeGenForm from "./MemeGenForm";
import MemeList from "./MemeList";
import { useSelector, useDispatch } from "react-redux";

/**Renders Header, MemeGenForm and MemeList components 
 * 
 * function : generateMeme -> invokes dispatch by passing type and payload to add meme in list
*/
function App() {

  const dispatch = useDispatch();

  function generateMeme(memeData) {
    dispatch({ type: "ADD_MEME", payload: memeData });
  }

  return (
    <div className="App">
      <Header />
      <MemeGenForm generateMeme={generateMeme} />
      <br />
      <hr />
      <MemeList />
    </div>
  );
}

export default App;
