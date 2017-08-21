import React from "react";
import Link from "./Link.js";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <ul className="nav navbar-nav">
            <Link name="Menu" />
            <Link name="Reservation" />
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
