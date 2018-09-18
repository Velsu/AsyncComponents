import React from "react";
import logo from "./logo.svg";

const Home = ({ changeRoute }) => {
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Home Page</h1>
    </header>
    <button className="disabled">Home</button>
    <button onClick={() => changeRoute("About")} />
    <button onClick={() => changeRoute("Contact")} />
  </div>;
};
