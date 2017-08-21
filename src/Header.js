import React from "react";

const Link = ({ name }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={name}>
        {name}
      </a>
    </li>
  );
};

class Header extends React.Component {
  render() {
    return (
      <div>
        <div class="jumbotron">
          <h3>Urban Spoon Soup Kitchen</h3>
          <p>your home away from home for fine dining</p>
        </div>
        <div class="container">
          <img src="noSpoon.jpg" className="img-responsive" />
        </div>
      </div>
    );
  }
}

export default Header;
