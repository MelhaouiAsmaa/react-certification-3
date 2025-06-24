import { useValue } from "./GenericContext";

export function SubscriberComponent({ title }) {
  const value = useValue();

  return (
    <div className="card shadow-sm">
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <h2 className="display-4">{value}</h2>
      </div>
    </div>
  );
}

