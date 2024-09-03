import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


class Footer extends Component {
    render() {
        return (
            <div className="foot">
                <div className="footerPart">
                    <div>
                        <Link to="/" >Home</Link>
                        <Link to="/about" >About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div>
                        <p>
                            LOGO
                        </p>
                    </div>
                </div>
                <div className="copy">
                    <p>
                        Copyright.All rights reserved
                    </p>
                </div>


            </div>
        );
    }
}

export default Footer;
