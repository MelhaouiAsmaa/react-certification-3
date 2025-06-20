import { CountSubscriberComponent } from "./CountSubscriberComponent";
import usePersistedState from "./usePersistedState";

export function CountSetterComponent() {
  const [count, setCount] = usePersistedState("count", 0);
console.log(count);

  function handleIncrement() {
    setCount((count) => count + 1);
  }

  return (
    <div className="row">
        {/* Left side: Title + Button */}
        <div className="col-6 text-center bg-primary">
          <h2 className="text-2xl font-bold mb-4">Component 1</h2>
          <button
            className="btn btn-primary text-white font-bold py-2 px-6 rounded"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <p>{count}</p>
        </div>
  
        {/* Right side: CountSubscriberComponent */}
        <CountSubscriberComponent className="col-6 text-center" subscribedValue="count" />
    </div>
  );
  
}
