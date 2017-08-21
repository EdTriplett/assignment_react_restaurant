import React from "react";

const Link = ({name})=> {
  return (
    <li className="nav-item"><a className="nav-link" href={name}>{name}</a></li>
    )
}


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
