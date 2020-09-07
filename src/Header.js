import React from "react";

/** Header: Displays the header for the meme generator.
 * 
 * App -> Header
 */

function Header() {

  return (
    <header id="header" className="mb-3">
      <nav className="navbar navbar-dark bg-primary rounded">
        <img src="meme.jpg" alt="me-gusta" id="headerImg" className="navbar-left img-responsive" />
        <h1 className="navbar-brand">Meme Generator</h1>
      </nav>
    </header>
  )
}

export default Header;