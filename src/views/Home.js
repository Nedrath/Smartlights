import React, { useEffect, useContext } from "react";
import { css } from "emotion";
import Header from "../components/Header";
import Nav from "../components/Nav";
import MainRooms from "../components/MainRooms";
import AvatarImg from "../img/Group 39.svg";
import ArticleHeadline from "../components/ArticleHeadline";
import { LightContext } from "../context/LightContext";

// Dette er en Function
const Home = () => {
  // Her laver jeg en useEffect som tager fat i useState i LightContext
  // Om true eller false, som i header får den afvide at true er
  // 300px og false er 160px
  const { setIsSubPage } = useContext(LightContext);
  useEffect(() => {
    setIsSubPage(false);
  }, [setIsSubPage]);
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
    <div className={styleWrapper}>
      <Header
        // heightHeader="160px"
        headline="Control Panel"
        headlineWidth="50%"
        avatar={AvatarImg}
        gridRows="auto"
        notification
      />
      <main className={styleMain}>
        <ArticleHeadline marginLeft="24px" headlineText="All Rooms" />
        <MainRooms />
      </main>
      <Nav />
    </div>
  );
};

export default Home;
