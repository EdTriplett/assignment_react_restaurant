import React from "react";


class Header extends React.Component {


  render() {

    const {title, subtitle} = this.props

    return (
      <div>
        <div class="jumbotron">
          <h3>{title}</h3>
          <p>{subtitle}</p>
          
        </div>
        <div class="container">
          <img src="noSpoon.jpg" className="img-responsive" alt="matrix-spoon" />
        </div>
      </div>
    );
  }
}

export default Header;
