import { CountSubscriberComponent } from "./CountSubscriberComponent";
import { NameSetterComponent } from "./NameSetterComponent";
import { GenericProvider, useValue } from "./GenericContext";

export function CountSetterComponent() {
  const [value, setValue] = useValue();


  function handleIncrement() {
    setValue((value) => value + 1);
  }

  function handleDecrement(){
    setValue((value) => value - 1);
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
                    <button
            className="btn btn-primary text-white font-bold py-2 px-6 rounded"
            onClick={handleDecrement}
          >
            Decrement
          </button>
          <p>{value}</p>
        </div>
  
        {/* Right side: CountSubscriberComponent */}
        <CountSubscriberComponent className="col-6 text-center"/>
        <GenericProvider keyName='name' initialValue="">
                  <NameSetterComponent/>
                  <CountSubscriberComponent/>
        </GenericProvider>
    </div>
  );
  
}
