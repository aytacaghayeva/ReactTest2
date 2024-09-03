import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";


class Header extends Component {
    render() {
      return (
        <div className="logo">
            <div>
                <p>
                    LOGO
                </p>
            </div>
            <div>
                <Link to="/" >Home</Link>
                <Link  to="/about" className="header-about">About</Link>
                <Link  to="/contact">Contact</Link>
            </div>
        </div>
      );
    }
  }
  
  export default Header;
  