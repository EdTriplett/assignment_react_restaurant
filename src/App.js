import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav.js";
import Header from "./Header.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;
