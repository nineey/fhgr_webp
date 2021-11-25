import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  // Source: https://medium.com/how-to-react/add-an-active-classname-to-the-link-using-react-router-b7c350473916
  // Assigning location variable
  const location = useLocation();
  // Destructuring pathname from location
  const { pathname } = location;

  // Handle different views for active navlinks
  const nav1 = pathname === "/" ? "> Library" : "Library";
  const nav2 = pathname === "/stats" ? "> Stats" : "Stats";
  const navBack = "< Back";

  if (pathname === "/" || pathname === "/stats") {
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
  } else {
    return (
      <StyledNavbar>
        <nav>
          <ul>
            <li>
              <NavLink to="/">{navBack}</NavLink>
            </li>
          </ul>
        </nav>

        <hr className="mt-5"></hr>
      </StyledNavbar>
    );
  }
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
