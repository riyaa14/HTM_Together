import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      {/* <nav>
                <ul>
                <li>
                <h1>TOGETHER</h1>
                </li> 
                <li>
                <Link to = "/" style={{textDecoration: 'none',
                                        color: 'black' }} > Dashboard </Link>
                </li> 
                <li>
                <Link to = "/communities" style={{textDecoration: 'none',
                                        color: 'black' }}> Communities </Link>
                </li> 
                <li>
                <Link to = "/events" style={{textDecoration: 'none',
                                        color: 'black' }}> Events </Link>
                </li> 
                <li>
                <Link to = "/profile" style={{textDecoration: 'none',
                                        color: 'black' }}> <i class="fas fa-user-circle"></i> </Link>
                </li> 
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
        </nav> */}

      <nav class="navbar navbar-expand-lg navbar-dark">
        <i class="fas fa-3x fa-handshake-alt"></i>
        <h1>TOGETHER</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                Dashboard{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/communities"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                Communities{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/events"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                Events{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <i class="fas fa-2x fa-user-circle"></i>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
