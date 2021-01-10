import React from "react";
import s from "./style.styl";

import Game from "Modules/Game/Game";

const Layout = (): JSX.Element => {
  return (
    <div className={s["layout"]}>
      <Game />
    </div>
  );
};

export default Layout;
