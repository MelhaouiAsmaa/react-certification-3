import {  useValue } from "./GenericContext";
import { SubscriberComponent } from "./SubscriberComponent";

export function CountSetterComponent() {
  const [value, setValue] = useValue();

  function handleIncrement() {
    setValue((value) => value + 1);
  }

  function handleDecrement() {
    setValue((value) => value - 1);
  }

  return (
    <div className="container mt-5">
      <div className="row g-4">
        {/* Setter on the left */}
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Count Setter</h5>
              <p className="card-text">Current Count: <strong>{value}</strong></p>
              <div className="d-flex gap-2">
                <button className="btn btn-success" onClick={handleIncrement}>Increment</button>
                <button className="btn btn-danger" onClick={handleDecrement}>Decrement</button>
              </div>
            </div>
          </div>
        </div>

        {/* Subscriber on the right */}
        <div className="col-md-6">
          <SubscriberComponent title="Count subscriber"/>
        </div>
      </div>
    </div>
  );
}
