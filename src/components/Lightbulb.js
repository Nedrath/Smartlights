import React, { useContext } from "react";
import { css } from "emotion";
import { LightContext } from "../context/LightContext";

const LightBulb = () => {
    const { LightColor, Opacity } = useContext(LightContext);
    const styleBulb = css`
    margin-left: 35px;
    margin-top: -35px;
    z-index: 5;
  `;

  return (
    <svg className={styleBulb} width="70" height="70" viewBox="0 0 70 70">
      <defs>
        <filter
          id="Ellipse_10"
          x="0"
          y="0"
          width="70"
          height="70"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feFlood floodColor={LightColor} floodOpacity={Opacity}/>
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Ellipse_10)">
        <circle
          id="Ellipse_10-2"
          data-name="Ellipse 10"
          cx="11"
          cy="11"
          r="11"
          transform="translate(24 21)"
          fill={LightColor}
          opacity={Opacity}
        />
      </g>
    </svg>
  );
};

export default LightBulb;
