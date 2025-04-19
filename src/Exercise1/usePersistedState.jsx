import { useEffect, useState } from "react";
import { getItem, setItem } from "../utils";


export default function usePersistedState(key, initialValue = null) {
    const [value, setValue] = useState(()=> {
        const item = getItem(key) || initialValue;
        return item;
    });

    useEffect(()=> {
        setItem(key, value)
    // eslint-disable-next-line
    }, [value])

    return [value, setValue];
}

export function subscribeToState(key) {    
    return getItem(key);
}