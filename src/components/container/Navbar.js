import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

function Navbar() {
  // source: https://medium.com/how-to-react/add-an-active-classname-to-the-link-using-react-router-b7c350473916
  //assigning location variable
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  // console.log(pathname);

  // Show an arrow if navlink is active
  const nav1 = pathname == "/" ? "> Full Library" : "Full Library";
  const nav2 = pathname == "/stats" ? "> Stats" : "Stats";

  return (
    <StyledNavbar>
      <nav>
        <ul>
          <li>
            <NavLink to="/">{nav1}</NavLink>
          </li>

          <li>
            <NavLink to="stats">{nav2}</NavLink>
          </li>
        </ul>
      </nav>

      <hr className="mt-5"></hr>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  nav ul {
    margin-top: 2em;
    padding: 0;
    font-size: 1.3em;
  }

  nav ul li {
    display: inline-block;
    list-style-type: none;
  }

  nav > ul > li > a {
    color: var(--secondary-color);
    display: block;
    line-height: 2em;
    padding-right: 1em;
    text-decoration: none;
  }
`;

export default Navbar;
