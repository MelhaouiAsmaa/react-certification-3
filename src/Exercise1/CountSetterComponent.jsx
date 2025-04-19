import { CountSubscriberComponent } from "./CountSubscriberComponent";
import  usePersistedState  from "./usePersistedState";

export function CountSetterComponent() {
  const [count, setCount] = usePersistedState("count", 0);

  function handleIncrement() {
    setCount(count => count + 1);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" p-6 shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Component 1</h2>
        <button
          className="btn btn-primary text-white font-bold py-2 px-6 rounded mb-4"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <CountSubscriberComponent key={count} subscribedValue="count" />
      </div>
    </div>
  );
}
