import React from "react";
import { css } from "emotion";

const BackgroundCircle = ({ rotate }) => {
  const styleWrapper = css`
    position: fixed;
    pointer-events: none;
    width: 375px;
    height: 310px;
    z-index: 1;
    ${rotate ? "transform: rotate(0deg)" : "transform: rotate(0deg)"};
    animation: rotateCircles 700ms ease-in-out forwards;
    animation-delay: 200ms;

    @keyframes rotateCircles {
      to {
        ${rotate ? "transform: rotate(-40deg)" : "transform: rotate(0deg)"};
      }
    }
  `;
  const styleCircleTop = css`
    width: 194px;
    height: 194px;
    background-color: white;
    opacity: 4%;
    border: 1px solid white;
    border-radius: 50%;
    position: relative;
    top: -95px;
    left: -80px;
  `;
  const styleCircleBottom = css`
    width: 194px;
    height: 194px;
    background-color: white;
    opacity: 4%;
    border: 1px solid white;
    border-radius: 50%;
    position: relative;
    bottom: 50px;
    left: -5px;
  `;
  const styleCircleRight = css`
    width: 194px;
    height: 194px;
    background-color: white;
    opacity: 4%;
    border: 1px solid white;
    border-radius: 50%;
    position: relative;
    top: -325px;
    right: -270px;
  `;

  return (
    // Her filføjer jeg en class i classname til brug i Transition Router
    <div className={`${styleWrapper} CircleWrapper`}>
      <div className={styleCircleTop}></div>
      <div className={styleCircleBottom}></div>
      <div className={styleCircleRight}></div>
    </div>
  );
};

export default BackgroundCircle;
