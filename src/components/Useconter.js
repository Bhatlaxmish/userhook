import React,{useState,useEffect} from 'react'

export default function useconter(add) {/* it must start from use  */
   const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(add==true)
{      setCounter((prevCounter) => prevCounter + 1);}
      else {
{      setCounter((prevCounter) => prevCounter - 1);}

      }
    }, 1000);

    return () => clearInterval(interval);
  }, [add]);

  return counter;
 
}
