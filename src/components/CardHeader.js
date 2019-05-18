import React from "react";

import { ReactComponent as Info } from "../images/info.svg";

import "./CardHeader.css";
import logo from "../images/logo.jpg";

function Header() {
  return (
    <header className="card-header">
      <img
        src={logo}
        alt="phantom of the opera"
        className="card-header-image"
      />
      <div className="card-header-title">
        <p className="card-header-show-title">
          <h1>
            The Phantom of the Opera{" "}
            <span className="normal-font-weight">Tickets</span>
          </h1>
        </p>
        <p className="card-header-show-price">
          <strong>$29.00 - $215.00</strong>
        </p>
        <p className="card-header-show-info">
          <Info className="card-header-show-info-icon" />{" "}
          <span className="card-header-show-info-text">Learn More</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
