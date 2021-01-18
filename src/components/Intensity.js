import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { css } from "emotion";
import { LightContext } from "../context/LightContext";
import IconLight from "../img/bulbnoglow.svg";
import IconLightShine from "../img/LightbulbIconYellow.svg";
import { throttle } from "lodash";

const Intensity = () => {
  const ThrottleChange = (e) => {
    setOpacity(e.target.value / 254);
    setBrightness(e.target.value);
  };

  const { Opacity, setOpacity } = useContext(LightContext);
  const [Brightness, setBrightness] = useState(0);
  const styleSection = css`
    display: flex;
    width: 100%;
    justify-content: center;

    .styleInput {
      appearance: none;
      width: 90%;
      margin: 0px 15px;
      height: 2px;
      background: #cecece;
      display: flex;
      align-self: center;
    }
    .styleInput::-webkit-slider-thumb {
      appearance: none;
      width: 15px;
      height: 15px;
      background: white;
      border-radius: 15px;
      box-shadow: 0px 0px 2px 0px rgba(161, 161, 161, 1);
    }
  `;
  const styleMeasurements = css`
    display: flex;
    margin: 0px 33px;
    justify-content: space-between;
    font-size: 4px;
    height: 10px;
  `;

  var throttled = useCallback(throttle(ThrottleChange, 100), []);

  useEffect(() => {0
    fetch(
      "https://192.168.8.100/api/7NuspOHdG27113hs5Q66PQWR213qVAVmgJQJLIQM/lights/6/state",
      {
        method: "PUT",
        body: JSON.stringify({ bri: parseInt(Brightness) }),
      }
    );
    // console.log(Brightness);
  }, [Brightness]);

  return (
    <Fragment>
      <section className={styleSection}>
        <img src={IconLight} alt="" />
        {/* <input
          className="styleInput"
          onChange={(e) => {
            setBrightness(e.target.value);
          }}
          type="range"
          value={Brightness}
          min="1"
          max="254"
        /> */}
        <input
          onChange={
            throttled
            // setOpacity(e.target.value / 254);
            // setBrightness(e.target.value);
            // throttled(e.target.value);
          }
          className="styleInput"
          type="range"
          value={Opacity * 254}
          name=""
          id=""
          min="0"
          max="255"
        />
        <img src={`../${IconLightShine}`} alt="" />
      </section>
      <div className={styleMeasurements}>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
    </Fragment>
  );
};

export default Intensity;
