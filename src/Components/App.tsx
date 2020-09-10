import React from 'react';

import { AllColor, CircleArr } from '../Constants/const';
import shuffleColorArr from '../Utilits/shuffleColorArr';

import Layout from './Layout/Layout';

const App = (): JSX.Element => {
  shuffleColorArr(AllColor, CircleArr);

  return <Layout></Layout>;
};

export default App;
