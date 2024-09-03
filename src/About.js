import React, { Component } from "react";
import "./About.css";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { plus, minus } from "./redux/reducer";

function About() {
  let count = useSelector(state => state.number);
  let dispatch = useDispatch();
  return (
    <div>
      <Header />
        <div className="about" style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "yellow",
        }}>
          <button className="aboutBtn" onClick={() =>count > 0 ? dispatch(minus()):null }>-</button>
          <p className="about-text">{count}</p>
          <button className="aboutBtn" onClick={() => dispatch(plus())}>+</button>
        </div>
      <Footer />
    </div>
  );
}

export default About;
