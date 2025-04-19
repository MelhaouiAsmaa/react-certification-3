import { subscribeToState } from "./usePersistedState"

export function CountSubscriberComponent({subscribedValue}) {
    const count = subscribeToState(subscribedValue);
        
    return (
        <div className="bg-blue-100 rounded-2xl p-6 shadow-lg max-w-md w-full text-center mx-auto mt-6">
          <h2 className="text-2xl font-bold mb-4">Component 2</h2>
          <h3 className="text-3xl font-semibold">{count}</h3>
        </div>
      );
}