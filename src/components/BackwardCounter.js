import { useState, useEffect } from 'react';

import Card from './Card';
import useconter from './Useconter';

const BackwardCounter = () => {

  const counter=useconter(false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
