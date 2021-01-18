import React, { useContext } from "react";
import { Link } from "@reach/router";
import { css } from "emotion";
import Slider from "./Slider";
import LightBulb from "./Lightbulb";
import BackgroundCircle from "./BackgroundCircle";
import { LightContext } from "../context/LightContext";

const Header = ({
  avatar,
  headline,
  notification,
  imgBulbOff,
  LampImg,
  LightsText,
  text,
  icon,
  gridRows,
  gridSlider,
  Lamp,
  headlineWidth,
  slider,
  rooms,
}) => {
  const { IsSubPage } = useContext(LightContext);
  const styleHeader = css`
    grid-area: HeaderArea;
    /* IsSubPage true 300px ellers false 160px */
    height: ${IsSubPage ? "300px" : "160px"};
    transition: height 500ms ease-in;
    overflow: hidden;
  `;
  const styleTextBox = css`
    grid-area: Headline;
    margin-top: 65px;
  `;
  const styleGrid = css`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: ${gridRows && gridRows};
    gap: 0px 0px;
    margin-left: 24px;
    ${gridSlider
      ? `
    grid-template-areas:  
    "Headline Light"
      "Slider Slider";
    `
      : `
    grid-template-areas:  
    "Headline Light"
    `}
  `;
  const styleH1 = css`
    grid-area: Headline;
    color: white;
    width: ${headlineWidth && headlineWidth};
    font-size: 30px;
    font-weight: bold;
  `;
  const styleText = css`
    font-size: 19px;
    color: #ffd239;
    font-weight: bold;
    margin-top: -25px;
    opacity: 0;
    animation: moveText 1s ease-in-out forwards;
    animation-delay: 1s;

    @keyframes moveText {
      to {
        opacity: 1;
        margin-top: 17px;
      }
    }
  `;
  const styleAvatar = css`
    grid-area: Light;
    display: grid;
    margin-right: -40px;
    margin-top: 60px;
  `;
  const styleAvatar_Notification = css`
    grid-area: Light;
    ::after {
      content: "";
      height: 10px;
      width: 10px;
      z-index: 25;
      border-radius: 50%;
      background-color: #ff9898;
      position: absolute;
      top: 70px;
      right: 30px;
    }
  `;
  const styleLampBox = css`
    grid-area: Light;
    display: grid;
    justify-content: end;
  `;
  const styleLamp = css`
    z-index: 10;
    margin-top: -40px;
    margin-right: 24px;
    animation: moveLamp 1s ease-in-out forwards;
    animation-delay: 1s;

    @keyframes moveLamp {
      to {
        margin-top: 0px;
      }
    }
  `;
  const styleBulbOff = css`
    margin-left: 35px;
    margin-top: -70px;
    z-index: 4;
  `;

  return (
    <header className={`${styleHeader} headerAnimation`}>
      {/* Her har jeg lavet en prop på Rooms som vi kalder her og siger at hvis den true skal den gøre
      det den er sat til i backgroundcircle og rotate -50deg ellers skal den rotate 0deg */}
      <BackgroundCircle rotate={rooms ? true : false} />
      <div className={styleGrid}>
        <div className={styleTextBox}>
          <h1 className={styleH1}>
            {icon && (
              <Link to="/home">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </Link>
            )}
            {headline}
          </h1>
          {LightsText && <p className={styleText}>{text} Lights</p>}
        </div>
        {notification && (
          <div className={styleAvatar_Notification}>
            <img className={styleAvatar} src={avatar} alt="" />
          </div>
        )}
        {Lamp && (
          <div className={styleLampBox}>
            <img className={styleLamp} src={`../${LampImg}`} alt="" />
            <LightBulb />
            <img className={styleBulbOff} src={`../${imgBulbOff}`} alt="" />
          </div>
        )}
        {slider && <Slider />}
      </div>
    </header>
  );
};

export default Header;



