import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavDiv = styled.div`
  width: 100%;
  height: 5em;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    display: flex;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0 2.3em;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: #000;
    &:hover {
      color: #5796ec;
      transition: color 0.3s ease;
    }
  }

  .active {
    color: #5796ec !important;
  }
`;

function Nav() {
  return (
    <NavDiv>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/teamMember" className={({isActive}) => (isActive ? "active" : "")}>
              MemberInfo
            </NavLink>
          </li>
          <li>
            <NavLink to="/introduction" className={({isActive}) => (isActive ? "active" : "")}>
              Introducion
            </NavLink>
          </li>
          <li>
            <NavLink to="/post" className={({isActive}) => (isActive ? "active" : "")}>
              Post
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
         
        </ul>
      </nav>
    </NavDiv>
  );
}

export default Nav;
