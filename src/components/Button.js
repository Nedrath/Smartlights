import React from "react";
import { css } from "emotion";

const Button = ({
  ButtonColor,
  ButtonText,
  ButtonIcon,
}) => {
  const styleButton = css`
    height: 55px;
    width: 150px;
    font-weight: bold;
    font-size: 13px;
    color: white;
    border-radius: 12px;
    border: none;
    outline: none;
    background: ${ButtonColor && ButtonColor};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    
  `;
  const styleImg = css`
    margin: 0px 20px;
  `;
  return (
    <button className={styleButton}>
      <img className={styleImg} src={`../${ButtonIcon}`} alt="" /> {ButtonText}
    </button>
  );
};

export default Button;
