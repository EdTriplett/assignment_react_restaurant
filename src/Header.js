import React from "react";

class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props;

    return (
      <div>
        <div className="jumbotron justify-content-center">
          <h2>
            {title}
          </h2>
          <p>
            {subtitle}
          </p>
        </div>
        
          <img
            src="noSpoon.jpg"
            
            className="img-responsive"
            alt="matrix-spoon"
          />
        
      </div>
    );
  }
}

export default Header;
