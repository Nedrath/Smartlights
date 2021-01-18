import React, { useState, useEffect, useContext } from "react";
import { css } from "emotion";
import offIcon from "../img/Icon awesome-power-off.svg";
import { colorsContext } from "../context/ColorsContext";

const OffButton = ({ offRight, offTop }) => {
  const [LightOn, setLightsOn] = useState(false);
  const { currentLight } = useContext(colorsContext);
  const styleOffButton = css`
    height: 32px;
    width: 32px;
    position: relative;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 0px 2px 0px rgba(161, 161, 161, 1);
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    right: ${offRight && offRight};
    top: ${offTop && offTop};
  `;

  useEffect(() => {
    fetch(
      `http://192.168.8.100/api/7NuspOHdG27113hs5Q66PQWR213qVAVmgJQJLIQM/lights/${currentLight}/state`,
      {
        method: "PUT",
        body: JSON.stringify({ on: LightOn }),
      }
    );
  }, [LightOn, currentLight]);
  // console.log(LightOn);

  return (
    <button onClick={() => setLightsOn(!LightOn)} className={styleOffButton}>
      <img src={`../${offIcon}`} alt="" />
    </button>
  );
};

export default OffButton;
