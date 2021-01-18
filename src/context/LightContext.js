import React, { createContext, useState } from "react";

export const LightContext = createContext();

const ColorsToLightContextProvider = (props) => {
  const [LightColor, setLightColor] = useState("");
  const [Opacity, setOpacity] = useState(1);
  const [IsSubPage, setIsSubPage] = useState(false);
  const [roomId, setRoomId] = useState(null)

  return (
    <LightContext.Provider
      value={{
        LightColor,
        setLightColor,
        Opacity,
        setOpacity,
        IsSubPage,
        setIsSubPage,
        roomId,
        setRoomId
      }}
    >
      {props.children}
    </LightContext.Provider>
  );
};

export default ColorsToLightContextProvider;
