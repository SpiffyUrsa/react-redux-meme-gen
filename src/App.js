import React from 'react';
import './App.css';
import Header from "./Header"
import MemeGenForm from "./MemeGenForm";
import MemeList from "./MemeList";
import { useSelector, useDispatch } from "react-redux";

function App() {

  const memes = useSelector(store => store.memes);
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
