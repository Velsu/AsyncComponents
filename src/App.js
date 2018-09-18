import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import AsyncComponent from "./components/AsyncComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "Home"
    };
  }

  changeRoute = route => {
    this.setState({ route });
  };
  render() {
    if (this.state.route === "Home") {
      const AsyncHome = AsyncComponent(() => import("./components/Home"));
      return <AsyncHome changeRoute={this.changeRoute} />;
    } else if (this.state.route === "About") {
      const AsyncAbout = AsyncComponent(() => import("./components/About"));
      return <AsyncAbout changeRoute={this.changeRoute} />;
    } else {
      const AsyncContact = AsyncComponent(() => import("./components/Contact"));
      return <AsyncContact changeRoute={this.changeRoute} />;
    }
  }
}

export default App;
