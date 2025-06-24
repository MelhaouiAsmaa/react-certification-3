import { useValue } from "./GenericContext";
import { SubscriberComponent } from "./SubscriberComponent";

export function NameSetterComponent() {
  const [value, setValue] = useValue();

  function handleChangeName(e) {
    return setValue(e.target.value);
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row g-4">
          {/* Setter on the left */}
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Name Setter</h5>
                <input
                  type="text"
                  className="form-control mb-3"
                  onChange={(e) => handleChangeName(e)}
                  value={value}
                  placeholder="Enter your name"
                />
                <p className="mb-0">
                  Current name: <strong>{value}</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Subscriber on the right */}
          <div className="col-md-6">
            <SubscriberComponent title="Name subscriber"/>
          </div>
        </div>
      </div>
    </>
  );
}
