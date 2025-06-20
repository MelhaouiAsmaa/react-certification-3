// import { subscribeToState } from "./usePersistedState"

// export function CountSubscriberComponent({className, subscribedValue }) {
//   const count = subscribeToState(subscribedValue);

//   return (
//     <div className={className}>
//       <h2 className="text-2xl font-bold mb-4">Component 2</h2>
//       <h3 className="text-3xl font-semibold">{count}</h3>
//     </div>
//   );
// }

import { useSubscribedState } from "./usePersistedState";

export function CountSubscriberComponent({ className, subscribedValue }) {
  const count = useSubscribedState(subscribedValue);

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-4">Component 2</h2>
      <h3 className="text-3xl font-semibold">{count}</h3>
    </div>
  );
}
