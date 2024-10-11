import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const colorOptions=[
    {name: "Blue",backgroundColor: "blue"},
    {name: "Green",backgroundColor: "green"},
    {name: "Red",backgroundColor: "red"},
    {name: "Yellow",backgroundColor: "yellow"},
  ];

  const handleColorChange=(color)=>{
    document.body.style.backgroundColor=color;
  }

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to
              ="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div>
            {colorOptions.map((colorOption,index)=>(
              <button key={index} onClick={()=>handleColorChange(colorOption.backgroundColor)} className="btn mx-1" style={{backgroundColor: colorOption.backgroundColor, color: "white"}}>
                {colorOption.name}
              </button>
            ))}
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
          </div>
        </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "Set about here",
};