import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar navbar-expand-md navbar-light bg-light px-3">
      <span className="navbar-text">Lorem ipsum dolor sit.</span>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-content"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav className="collapse navbar-collapse" id="navbar-content">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-pdr" className="nav-link">
              ADD
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

/*<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/">Acceuil</Link></li>
    <li className="breadcrumb-item"><Link to="blog">Blog</Link></li>
    
  </ol>
</nav> */
