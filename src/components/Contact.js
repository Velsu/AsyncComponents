import React from "react";
import logo from "./logo.svg";

const Contact = ({ changeRoute }) => {
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Contact Page</h1>
    </header>
    <button className="disabled">Contact</button>
    <button onClick={() => changeRoute("Home")} />
    <button onClick={() => changeRoute("About")} />
  </div>;
};
