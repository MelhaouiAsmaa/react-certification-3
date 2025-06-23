import { createContext, useContext, useEffect, useState } from "react"
import { getItem, setItem} from "./../utils"

export const CountContext = createContext();

export function CountProvider({children}) {
  const [count, setCount] =  useState(()=>{
    const item = getItem('count');
    return item || 0;
  });

  useEffect(()=>{
    setItem('count', count);
  },[count]);


  return(
    <CountContext.Provider value={[count, setCount]}>
      {children}
    </CountContext.Provider>
  ) 
}

export const useCount = ()=> {
  return useContext(CountContext);
}
