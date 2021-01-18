import React, { useContext, useEffect } from "react";
import { css } from "emotion";
import Header from "../components/Header";
import Nav from "../components/Nav";
import LampImg from "../img/lamp.svg";
import BulbImgOff from "../img/OFF.svg";
import MainConfig from "../components/MainConfig";
import { roomsContext } from "../context/RoomContext";
import { LightContext } from "../context/LightContext";
// import { colorsContext } from "../context/ColorsContext";

// Dette er en Function
const Rooms = ({ id }) => {
  const { Rdata } = useContext(roomsContext);
  const { setIsSubPage, setRoomId } = useContext(LightContext);
  // const { setCurrentLight } = useContext(roomsContext)

  // data && setCurrentLight(data[id].lights[0])
  // console.log(data)

  useEffect(() => {
    setIsSubPage(true);
    setRoomId(id);
  }, [setIsSubPage, setRoomId, id]);

  const styleWrapper = css`
    background-color: #0a4da2;
    height: 812px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.6fr 2.3fr 68px;
    gap: 0px 0px;
    grid-template-areas:
      "HeaderArea"
      "Main"
      "FooterNav";
  `;
  const styleMain = css`
    grid-area: Main;
    background-color: #f6f8fb;
    border-radius: 25px 25px 0px 0px;
    z-index: 5;
  `;

  return (
    Rdata && (
      <div className={styleWrapper}>
        <Header
          // heightHeader="300px"
          headline={Rdata[id].name}
          icon
          LightsText
          text={Rdata[id].lights.length}
          Lamp
          LampImg={`../${LampImg}`}
          imgBulbOff={`../${BulbImgOff}`}
          gridRows="auto auto"
          gridSlider
          slider
          rooms
        />
        <main className={styleMain}>
          <MainConfig />
        </main>
        <Nav />
      </div>
    )
  );
};

export default Rooms;
