import React, { createContext, useState, useEffect } from "react";

export const colorsContext = createContext();

const ColorsContextProvider = (props) => {
  const [data, setData] = useState(null);
  const [XyValue, setXyValue] = useState(null);
  const [currentLight, setCurrentLight] = useState([]);

  useEffect(() => {
    fetch("/data/dataColors.json")
      .then((response) => response.json())
      .then((result) => setData(result.colors));
  }, []);
  // console.log(data.colors)

  useEffect(() => {
    fetch(
      "http://192.168.8.100/api/7NuspOHdG27113hs5Q66PQWR213qVAVmgJQJLIQM/lights/6/state",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((XyValue) => setXyValue(XyValue));
  }, []);

  useEffect(() => {
    fetch(
      `http://192.168.8.100/api/7NuspOHdG27113hs5Q66PQWR213qVAVmgJQJLIQM/lights/${currentLight}/state`,
      {
        method: "PUT",
        body: JSON.stringify({ xy: XyValue }),
      }
    );
    // console.log(Brightness);
  }, [XyValue, currentLight]);
  // console.log(data)
  return (
    <colorsContext.Provider
      value={{ data, setXyValue, currentLight, setCurrentLight }}
    >
      {props.children}
    </colorsContext.Provider>
  );
};

export default ColorsContextProvider;
