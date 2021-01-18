import React from "react";
import { css } from "emotion";
import SliderButton from "./SliderButton";
import IconLight from "../img/iconLightBulb.png";
import IconDesk from "../img/furniture-and-household.png";
import IconBed from "../img/bed (1).png";

const Slider = () => {
  const styleSliderBox = css`
    display: grid;
    grid-area: Slider;
    height: 50px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scrollbar-width: none;
    gap: 0px 15px;
    z-index: 5;
    align-items: center;
    position: relative;
    top: 65px;
    right: -370px;
    opacity: 0;
    ::-webkit-scrollbar {
      display: none;
    }
    animation: changeSlider 1s ease-in-out forwards;
    animation-delay: 1s;

    @keyframes changeSlider {
      to {
        top: 25px;
        right: 0px;
        opacity: 1;
      }
    }
  `;
  return (
    <div className={styleSliderBox}>
      <SliderButton ButtonIcon={IconLight} ButtonText="Main Light" />
      <SliderButton
        ButtonIcon={IconDesk}
        ButtonText="Desk Light"
        ButtonColor="#093B7B"
        TextColor="White"
        boxShadow="0px 0px 10px -5px rgba(0,0,0,0.45)"
      />
      <SliderButton ButtonIcon={IconBed} ButtonText="Bed Light" />
    </div>
  );
};

export default Slider;
