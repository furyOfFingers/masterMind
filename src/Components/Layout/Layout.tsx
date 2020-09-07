import React from 'react';
import s from './style.styl';

import Game from '../../Modules/Game/Game';

interface ILayoutProps {}

const Layout = ({}: ILayoutProps) => {
  return (
    <div className={s['layout']}>
      <Game></Game>
    </div>
  );
};

export default Layout;
