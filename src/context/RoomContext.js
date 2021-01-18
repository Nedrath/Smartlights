import React, { createContext, useState, useEffect } from "react";

export const roomsContext = createContext();

const RoomsContextProvider = (props) => {
  const [Rdata, setRData] = useState(null);
  // const [ currentLight, setCurrentLight ] = useState([]);

  useEffect(() => {
    fetch(
      "http://192.168.8.100/api/7NuspOHdG27113hs5Q66PQWR213qVAVmgJQJLIQM/groups",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((Rdata) => setRData(Rdata));
  }, []);
  // console.log(data)

  //   useEffect(() => {
  //   currentLight &&
  //   fetch(
  //     `http://192.168.8.100/api/7NuspOHdG27113hs5Q66PQWR213qVAVmgJQJLIQM/lights/${currentLight}/state`,
  //     {
  //       method: "PUT",
  //     }
  //   )
  // }, [currentLight]);
  return (
    <roomsContext.Provider value={{ Rdata }}>
      {props.children}
    </roomsContext.Provider>
  );
};

export default RoomsContextProvider;
