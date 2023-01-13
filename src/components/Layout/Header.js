import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavBar() {
  const homeStyle = ({isActive}) => ({
    color: isActive? "white" : "black",
    backgroundColor: isActive? "blue" : "white"
  })
  const aboutStyle = ({isActive}) => ({
    color: isActive? "white" : "black",
    backgroundColor: isActive? "red" : "white"
  })
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to={"/home"} style={homeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} style={aboutStyle}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/users"}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
