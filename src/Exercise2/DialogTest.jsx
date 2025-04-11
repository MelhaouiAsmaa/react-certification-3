import { useState } from "react";
import GenericModal from "./GenericModal";

export default function DialogTest() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">Reusable Dialog Demo</h1>

      <div className="mb-4">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="btn btn-primary text-white px-4 py-2 rounded"
        >
          Background Button (Count: {count})
        </button>
        <p className="text-sm text-gray-500">
          Use this to test background interaction.
        </p>
      </div>

      {/* Modal Dialog */}
      <GenericModal
        modal={true}
        triggerText="Open Modal Dialog"
        header="Modal Dialog"
        body={<p>This dialog blocks interaction with the background.</p>}
      />

      {/* Non-Modal Dialog */}
      <GenericModal
        modal={false}
        triggerText="Open Non-Modal Dialog"
        header="Non-Modal Dialog"
        body={<p>This dialog allows background interaction.</p>}
      />
    </div>
  );
}
