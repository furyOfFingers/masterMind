import React, { useState } from "react";
import s from "./style.styl";
import img from "../../images/how_to_play.jpg";
import Button from "Components/Button/Button";

const HowToPlay = (): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show ? (
        <div className={s["rules"]}>
          <Button type="close" text="close" onClick={() => setShow(!show)} />

          <ul>
            <li>7 attempts to calculate the colors</li>
            <li>hidden colors do not repeat</li>
          </ul>

          <img src={img} alt="how to play" />
        </div>
      ) : (
        <Button type="info" text="help" onClick={() => setShow(!show)} />
      )}
    </div>
  );
};
export default React.memo(HowToPlay);
