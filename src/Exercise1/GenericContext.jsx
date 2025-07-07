import { createContext, useContext, useEffect, useState } from "react";
import { getItem, setItem } from "../utils";


export const GenericContext = createContext();

export function GenericProvider({keyName, initialValue, children}){
    const [value, setValue] = useState(()=>{
        return getItem(keyName) || initialValue;
    })

    useEffect(()=>{
        setItem(keyName, value);
    }, [keyName, value]);

    //Changing the localStorage value outside of the scope of the React application
    useEffect(() => {
      const handler = (e) => {
        if (e.key === keyName) {
          try {
            const parsed = JSON.parse(e.newValue);
            setValue(parsed);
          } catch {
            setValue(e.newValue);
          }
        }
      };
      window.addEventListener("storage", handler);
      return () => window.removeEventListener("storage", handler);
    }, [keyName]);


    return(
        <GenericContext.Provider value={[value,setValue]}>
            {children}
        </GenericContext.Provider>
    )
}

export function useValue(){
    return useContext(GenericContext);
}