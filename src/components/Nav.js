import React from "react";
import { Link } from "@reach/router";
import { css } from "emotion";
import IconBulb from "../img/bulb.svg";
import IconHome from "../img/Icon feather-home.svg";
import IconSettings from "../img/Icon feather-settings.svg";

const Nav = () => {
  const styleFooter = css`
    grid-area: FooterNav;
    display: flex;
    height: 68px;
    justify-content: space-evenly;
    box-shadow: -1px -4px 30px -3px rgba(196, 196, 196, 1);
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
  `;

  return (
    <nav className={styleFooter}>
      <Link to="">
      <img src={`../${IconBulb}`} alt="" />
      </Link>
      <Link to="/home">
        <img src={`../${IconHome}`} alt="" />
      </Link>
      <Link to="/rooms/0">
        <img src={`../${IconSettings}`} alt="" />
      </Link>
    </nav>
  );
};

export default Nav;
