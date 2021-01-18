import React, { useContext } from "react";
import { css } from "emotion";
import { roomsContext } from "../context/RoomContext";
import RoomButton from "./RoomButton";


// Dette er en Function
const MainRooms = () => {
  
  const { Rdata } = useContext(roomsContext);
  // data && console.log(data);
  const styleArticle = css`
    display: grid;
    width: 100%;
    justify-content: space-around;
    gap: 19px 20px;
    padding: 1.5em;
    grid-template-columns: 1fr 1fr;
    /* grid-template-columns: repeat(auto-fit, 150px); */
  `;

  var rooms = [];
  
if(Rdata) { for (const [id, roomData] of Object.entries(Rdata)){
    rooms.push( <RoomButton
      key={id}
      id={id}
      icon={"../img/"+roomData.class+".svg"}
      headline={roomData.name}
      text={roomData.lights.length}
      />)
      // console.log(roomData)
  }}

  return (
    <article className={styleArticle}>
      {/* {data &&
        data.map((rooms) => (
          <RoomButton
            key={rooms.data[0].name}
            id={rooms.data[0].name}
            icon={rooms.data[0].icon}
            headline={rooms.data[0].name}
            text={rooms.data[0].lights}
            />
            ))} */}
            {rooms}
    </article>
  );
};

export default MainRooms;
