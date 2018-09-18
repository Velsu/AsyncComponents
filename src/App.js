import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "Home",
      component: null
    };
  }

  changeRoute = route => {
    this.setState({ route });
  };
  render() {
    if (this.state.route === "Home") {
      return <Home changeRoute={this.changeRoute} />;
    } else if (this.state.route === "About") {
      return <About changeRoute={this.changeRoute} />;
    } else {
      return <Contact changeRoute={this.changeRoute} />;
    }
  }
}

export default App;
