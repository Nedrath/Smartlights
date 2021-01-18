import React from "react";
import { Link } from "@reach/router";
import { css } from "emotion";

const RoomButton = ({ icon, headline, text, id }) => {
  const styleLink = css`
    height: 150px;
    display: grid;
    text-decoration: none;
    align-items: center;
    background-color: white;
    border-radius: 25px;
    padding-left: 19px;
    box-shadow: 0px 0px 10px 0px rgba(235, 235, 235, 1);
  `;
  const styleTextBox = css`
    line-height: 25px;
  `;
  const styleIconImg = css`
    height: 42px;
    width: 51px;
  `;
  const styleH2 = css`
    font-size: 18px;
    color: black;
    font-weight: bold;
  `;
  const styleText = css`
    font-size: 13px;
    color: #ffa939;
    font-weight: bold;
  `;

  return (
    <Link className={styleLink} to={`/rooms/${id}`}>
      <img className={styleIconImg} src={icon} alt="" />
      <div className={styleTextBox}>
        <h2 className={styleH2}>{headline}</h2>
        <p className={styleText}>{text} Lights</p>
      </div>
    </Link>
  );
};

export default RoomButton;
