import React from "react";
import { css } from "emotion";

const SliderButton = ({
  ButtonColor,
  ButtonText,
  TextColor,
  boxShadow,
  ButtonIcon,
}) => {
  const styleSliderButton = css`
    grid-row: 1/2;
    object-fit: cover;
    height: 45px;
    width: 130px;
    font-weight: bold;
    font-size: 13px;
    color: ${TextColor ? TextColor : "#002d67"};
    border-radius: 12px;
    border: none;
    outline: none;
    background-color: ${ButtonColor ? ButtonColor : "white"};
    box-shadow: ${boxShadow && boxShadow};
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const styleImg = css`
    margin: 0px 7px;
  `;
  return (
    <button className={styleSliderButton}>
      <img className={styleImg} src={`../${ButtonIcon}`} alt="" /> {ButtonText}
    </button>
  );
};

export default SliderButton;
