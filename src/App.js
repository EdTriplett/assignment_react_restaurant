import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav.js";
import Header from "./Header.js";
import Form from "./Form.js";
import Menu from "./Menu.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header
          title="Urban Spoon Soup Kitchen"
          subtitle="your home away from home(lessness) for fine dining"
        />
        <Form />
        <Menu />
      </div>
    );
  }
}

export default App;
