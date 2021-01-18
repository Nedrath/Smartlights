import React from "react";
import { render } from "react-dom";
// import { Router } from "@reach/router";
import Home from "./views/Home";
import Rooms from "./views/Rooms";
import RoomsContextProvider from "./context/RoomContext";
import ColorsContextProvider from "./context/ColorsContext";
import ColorsToLightContextProvider from "./context/LightContext";
import RouterTransition from "./components/RouterTransition";
import SplashScreen from "./views/SplashScreen";

const App = () => {
  return (
    <RoomsContextProvider>
      <ColorsContextProvider>
        <ColorsToLightContextProvider>
          <RouterTransition>
            <SplashScreen path="/*" />
            <Home path="/home" />
            <Rooms path="/rooms/:id" />
          </RouterTransition>
        </ColorsToLightContextProvider>
      </ColorsContextProvider>
    </RoomsContextProvider>
  );
};

render(<App />, document.querySelector("#root"));
