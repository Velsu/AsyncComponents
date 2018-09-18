import React from "react";
import logo from "../logo.svg";

const Contact = ({ changeRoute }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Contact Page</h1>
    </header>
    <button onClick={() => changeRoute("Home")}>Home</button>
    <button onClick={() => changeRoute("About")}>About</button>
    <button className="disabled">Contact</button>
  </div>
);

export default Contact;
