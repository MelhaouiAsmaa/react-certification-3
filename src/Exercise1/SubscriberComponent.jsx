import { useValue } from "./GenericContext";

export function SubscriberComponent({ title }) {
  const [value] = useValue();

  return (
    <div className="card shadow-sm">
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <h3 className="display-4">{value}</h3>
      </div>
    </div>
  );
}

