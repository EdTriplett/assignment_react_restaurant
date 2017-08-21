import React from "react";

const Link = ({name})=> {
  return (
    <li className="nav-item"><a className="nav-link" href={`#${name}`}>{name}</a></li>
    )
}

export default Link;