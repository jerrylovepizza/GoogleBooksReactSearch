import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <a className="navbar-brand text-dark" href="/"><i className="fab fa-google"></i>oogle Books</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <i className="fab fa-node-js"></i><i> Node</i>&nbsp;&nbsp;<i className="fab fa-react"></i><i> React</i> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

        <div className="navbar-nav">
          <a className="nav-item nav-link active text-muted" href="/">Search</a>
          <a className="nav-item nav-link text-muted" href="/saved">Saved</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
