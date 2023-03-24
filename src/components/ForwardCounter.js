import { useState, useEffect } from 'react';

import Card from './Card';
import Useconter from './Useconter';







const ForwardCounter = () => {

  const counter=Useconter(true);/* Usecounter is a  costom hook we created for use as we need its basically just a function
                                  which returns something  */
 

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
