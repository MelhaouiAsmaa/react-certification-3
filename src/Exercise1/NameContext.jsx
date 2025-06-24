import { createContext, useContext, useEffect, useState } from "react";
import { getItem, setItem } from "../utils";


const NameContext = createContext();

export function NameProvider({children}){
    const [name, setName] = useState(()=>{
        return getItem('name') || "waiting for name...";
    });

    useEffect(()=> {
        setItem("name", name);
    },[name]);

    return(
        <NameContext.Provider value={{name, setName}}>
            {children}
        </NameContext.Provider>
    )
}

export function useName(){
    return useContext(NameContext);
}