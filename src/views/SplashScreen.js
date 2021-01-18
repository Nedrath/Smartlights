import React, { useEffect } from "react";
import { css } from "emotion";
// import { navigate } from '@reach/router'
import imgLogo from "../img//SmartLightsLogo.png";

// Dette er en Function
const SplashScreen = () => {
  const styleWrapper = css`
    grid-template-rows: 1fr 1fr;
    height: 812px;
    display: grid;
    overflow: hidden;
    background: white;
    z-index: 45;
  `;
  const styleH1 = css`
    display: flex;
    width: 100%;
    /* text-align: center; */
    position: absolute;
    z-index: 55;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    top: 366px;
    opacity: 0;
    animation: MoveText 3.5s ease-in-out forwards;

    @keyframes MoveText {
      to {
        opacity: 1;
      }
    }
  `;
  const styleLogo = css`
    display: flex;
    position: absolute;
    z-index: 54;
    justify-content: center;
    align-items: center;
    margin: auto;
    top: 66px;
    left: 23%;
    opacity: 0;
    animation: Logo 0.5s 1.5s ease-in-out forwards;

    @keyframes Logo {
      to {
        opacity: 1;
      }
    }
  `;
  const styleH3 = css`
    display: flex;
    width: 100%;
    /* text-align: center; */
    position: absolute;
    z-index: 54;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    top: 474px;
    opacity: 0;
    animation: MoveText2 3.5s 2s ease-in-out forwards;

    @keyframes MoveText2 {
      to {
        opacity: 1;
      }
    }
  `;

  const styleBoxTop = css`
    width: 100%;
    height: 406px;
    background: goldenrod;
    position: relative;
    left: -100%;
    border-radius: 50%;
    animation: MoveColors1 2s ease-in-out forwards;
    z-index: 50;

    @keyframes MoveColors1 {
      to {
        left: 0px;
        border-radius: 0px;
      }
    }
  `;
  const styleBoxBottom = css`
    width: 100%;
    height: 406px;
    background: goldenrod;
    position: relative;
    right: -100%;
    z-index: 51;
    border-radius: 50%;
    animation: MoveColors2 2s ease-in-out forwards;

    @keyframes MoveColors2 {
      to {
        right: 0px;
        border-radius: 0px;
      }
    }
  `;
  useEffect(() => {
    setTimeout(function () {
      window.location.replace("../home");
    }, 6500);
  }, []);

  // Dette bruges med import { navigate } from '@reach/router'
  // fungere bedre og virker med transition

  // useEffect(() => {
  //   setTimeout(function () {
  //     navigate("../home");
  //   }, 6500);
  // }, []);

  return (
    <div className={`${styleWrapper} splashTransition`}>
      <img className={styleLogo} src={`../${imgLogo}`} alt="" />
      <h1 className={styleH1}>WELCOME</h1>
      <h3 className={styleH3}>Enjoy your stay</h3>
      <div className={styleBoxTop}></div>
      <div className={styleBoxBottom}></div>
    </div>
  );
};

export default SplashScreen;
