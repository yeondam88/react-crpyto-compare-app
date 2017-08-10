import React from "react";
import logo from "../images/bitcoin.svg";

const Nav = props =>
  <section className="">
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src={logo} alt="Crypto Currency" width="112" height="35" />
          <span>Crypto Compare</span>
        </a>

        <div className="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/yeondam88/react-crpyto-compare-app"
        >
          <i className="fa fa-github" />&nbsp;Source
        </a>
      </div>
    </nav>
  </section>;

export default Nav;
