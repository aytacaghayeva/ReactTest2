import React, { Component } from "react";
import "./Contact.css";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";


function Contact() {
    let count = useSelector(state =>  state.number );

    return (
        <div>
            <Header />
            <p className="contact-text">1235698983</p>
            <p>{count}</p>
            <Footer />
        </div>
    )

}

export default Contact;