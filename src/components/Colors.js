import React, { Fragment, useContext, useEffect, useState } from "react";
import { css } from "emotion";
import { LightContext } from "../context/LightContext";
import { colorsContext } from "../context/ColorsContext";
import converter from "@q42philips/hue-color-converter";
import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";

const Colors = ({ color, icon, r, g, b }) => {
  const { setLightColor, roomId } = useContext(LightContext);
  const { setXyValue } = useContext(colorsContext);
  const [ show, setShow ] = useState(false)
  const [bgColor, setBgColor] = useState("#aabbcc");

  useEffect(() => {
    let getRoom = localStorage.getItem(roomId);
    setLightColor(getRoom);
  }, [roomId, setLightColor]);

  const styleCircle = css`
    background: ${color && color};
    height: 29px;
    width: 29px;
    border-radius: 50%;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    margin-left: -5px;
  `;
    const styleBoxColorPicker = css`
    position: absolute;
    left: 35%;
    top: 63%;
    /* her siger jeg hvis den er false med ! så gør det her ellers hvis true display:block */
    ${!show ? "display:none" : "display:block"}
  `
  const HandleClick = () => {
    setLightColor(color);
    localStorage.setItem(roomId, color);
    setXyValue(XY);
  };
  const ShowColorPicker = () => {
    setShow(!show)
  }

  const XY = converter.calculateXY(r, g, b);
  // console.log(XY);

  // når icon er i brug skal det her click event ske ellers skal det andet click event ske
  // kan tilføje mere end 1 ting til hvis icon er i brug skal det her SketchPicker, luk først 
  // ting med } igen også åbn en ny med {}
  return (
    <Fragment>
    <button onClick={icon ? ShowColorPicker : HandleClick} className={styleCircle}>
      {icon && "+" }
    </button>
    { icon && <div className={styleBoxColorPicker}>
          <HexColorPicker color={bgColor} onChange={setBgColor} />
        </div>}
    </Fragment>
  );
};

export default Colors;
