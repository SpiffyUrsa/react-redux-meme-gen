import React from "react";

/** Header: Displays the header for the meme generator.
 * 
 * App -> Header
 */

function Header() {

  return (
    <header id="header" class="mb-3">
      <nav class="navbar navbar-dark bg-primary rounded">
        <img src="meme.jpg" alt="me-gusta" id="headerImg" class="navbar-left img-responsive" />
        <h1 class="navbar-brand">Meme Generator</h1>
      </nav>
    </header>
  )
}

export default Header;