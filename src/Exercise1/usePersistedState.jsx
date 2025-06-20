// import { useEffect, useState } from "react";
// import { getItem, setItem } from "../utils";


// export default function usePersistedState(key, initialValue = null) {
//     const [value, setValue] = useState(()=> {
//         const item = getItem(key) || initialValue;
//         return item;
//     });

//     useEffect(()=> {
//         setItem(key, value)
//     // eslint-disable-next-line
//     }, [value])

//     return [value, setValue];
// }

// export function subscribeToState(key) {    
//     return getItem(key);
// }

import { useEffect, useState } from "react";
import { getItem, setItem } from "../utils";

// A simple pub-sub system
const subscribers = new Map();

function notifySubscribers(key, value) {
  const subs = subscribers.get(key);
  if (subs) {
    subs.forEach((callback) => callback(value));
  }
}

export default function usePersistedState(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = getItem(key);
    console.log("item: ", item);
    console.log("initialValue:", initialValue);
    return item || initialValue;
    //return item !== (null || undefined) ? item : (initialValue ? initialValue : null);
  });

  useEffect(() => {
    setItem(key, value);
    notifySubscribers(key, value);
  }, [key, value]);
  console.log(value);
  
  return [value, setValue];
}

export function useSubscribedState(key) {
  const [value, setValue] = useState(() => getItem(key));

  useEffect(() => {
    // Register subscriber
    if (!subscribers.has(key)) {
      subscribers.set(key, []);
    }
    const callback = (newValue) => setValue(newValue);
    subscribers.get(key).push(callback);

    // Cleanup
    return () => {
      const subs = subscribers.get(key);
      if (subs) {
        subscribers.set(
          key,
          subs.filter((cb) => cb !== callback)
        );
      }
    };
  }, [key]);

  return value;
}
