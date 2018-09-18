import React from "react";
import logo from "./logo.svg";

const About = ({ changeRoute }) => {
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to About Page</h1>
    </header>
    <button className="disabled">About</button>
    <button onClick={() => changeRoute("Home")} />
    <button onClick={() => changeRoute("Contact")} />
  </div>;
};
