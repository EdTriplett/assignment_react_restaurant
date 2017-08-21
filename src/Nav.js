import React from "react";
import Link from "./Link.js"


class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <Link name="menu"/>
            <Link name="reservation"/>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
