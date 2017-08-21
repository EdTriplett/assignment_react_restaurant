import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav.js";
import Header from "./Header.js";
import Form from "./Form.js";
import Menu from "./Menu.js";
import Map from "./Map.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <Header
                title="Urban Spoon Soup Kitchen"
                subtitle="your home away from home(lessness) for fine dining"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <Form />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <Menu />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <Map />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
