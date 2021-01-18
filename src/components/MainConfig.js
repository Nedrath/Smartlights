import React, { useContext } from "react";
import { css } from "emotion";
import Intensity from "./Intensity";
import Colors from "./Colors";
import ArticleHeadline from "./ArticleHeadline";
import OffButton from "./OffButton";
import Button from "./Button";
import WhiteBulb from "../img/lightbulbwhite.svg";
import { colorsContext } from "../context/ColorsContext";
import { LightContext } from "../context/LightContext";
import { roomsContext } from "../context/RoomContext";
// import { map } from "lodash";

// Dette er en Function
const MainConfig = () => {
  const { data } = useContext(colorsContext);
  const { setCurrentLight } = useContext(colorsContext);
  const { Rdata } = useContext(roomsContext);
  const roomId = useContext(LightContext);
  // Rdata && console.log(Rdata[roomId.roomId].lights[0]);
  // console.log(roomId.roomId)
  setCurrentLight(Rdata && Rdata[roomId.roomId].lights[0]);
  // currentLight && console.log(currentLight);
  const styleArticle = css`
    margin: 0px 25px;
  `;
  const styleSectionColors = css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    width: 160px;
    animation: changeColors 1s ease-in-out forwards;
    animation-delay: 1s;

    @keyframes changeColors {
      to {
        width: 300px;
      }
    }
  `;
  const styleSectionScenes = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    justify-content: center;
  `;
  const styleScenesLeft = css`
    display: flex;
    flex-direction: column;
    gap: 19px;
  `;
  const styleScenesRight = css`
    display: flex;
    flex-direction: column;
    gap: 19px;
    margin-left: -50px;
    animation: changeButtons 1s ease-in-out forwards;
    animation-delay: 1s;

    @keyframes changeButtons {
      to {
        padding-left: 58px;
      }
    }
  `;

  return (
    <article className={`${styleArticle} configArticle`}>
      <ArticleHeadline marginBottom="20px" headlineText="Intensity" />
      <Intensity />
      <ArticleHeadline marginBottom="20px" headlineText="Colors" />
      <section className={styleSectionColors}>
        {data &&
          data.map((dyes) => (
            <Colors
              key={dyes.id}
              color={dyes.color}
              r={dyes.red}
              g={dyes.green}
              b={dyes.blue}
            />
          ))}
        <Colors icon color="white" />
      </section>
      <ArticleHeadline marginBottom="20px" headlineText="Scenes" />
      <section className={styleSectionScenes}>
        <div className={styleScenesLeft}>
          <Button
            ButtonIcon={`../${WhiteBulb}`}
            ButtonText="Birthday"
            ButtonColor="linear-gradient(90deg, rgba(255,155,155,1) 0%, rgba(255,198,198,1) 100%)"
          />
          <Button
            ButtonIcon={`../${WhiteBulb}`}
            ButtonText="Relax"
            ButtonColor="linear-gradient(90deg, rgba(147,202,235,1) 0%, rgba(181,223,249,1) 100%)"
          />
        </div>
        <div className={styleScenesRight}>
          <Button
            ButtonIcon={`../${WhiteBulb}`}
            ButtonText="Party"
            ButtonColor="linear-gradient(90deg, rgba(166,147,235,1) 0%, rgba(190,175,245,1) 100%)"
          />
          <Button
            ButtonIcon={`../${WhiteBulb}`}
            ButtonText="Fun"
            ButtonColor="linear-gradient(90deg, rgba(137,221,148,1) 0%, rgba(178,238,186,1) 100%)"
          />
        </div>
      </section>
      <OffButton offRight="-300px" offTop="-410px" />
    </article>
  );
};

export default MainConfig;
