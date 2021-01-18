import React from "react";
import { css } from "emotion";

const Circle = ({ top, left, right }) => {
  const styleCircle = css`
    width: 194px;
    height: 194px;
    background-color: white;
    opacity: 4%;
    top: ${top && top};
    left: ${left && left};
    right: ${right && right};
    position: relative;
    border: 1px solid white;
    border-radius: 50%;
  `;

  return <div className={styleCircle}></div>;
};

export default Circle;
