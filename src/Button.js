import React from "react";

const Button = ({ color, size, message }) => {
  Button.defaultProps = {
    color: "default",
    message: "Submit",
    size: ""
  };
  return (
    <button className={`btn btn-${color}`} size="">
      {message}
    </button>
  );
};

export default Button;
