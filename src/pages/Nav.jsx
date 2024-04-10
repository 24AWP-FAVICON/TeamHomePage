import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavDiv = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 40%;
  margin-right: 15em;

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
    padding: 1em;
    font-weight: 400;
    position: relative;
  }

  a {
    font-weight: bold;
    font-size: 24px;
    text-decoration: none;
    color: #FFFFFF;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 0;
      bottom: -6px;
      height: 3px;
      background-color: #008DDA;
      transition: width 0.3s ease;
    }

    &:hover::after, &.active::after {
      width: 100%;
    }

    &:hover {
      color: #008DDA;
      transition: color 0.3s ease;
    }
  }

  .active {
    color: #008DDA !important;
    
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
              Introduction
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
