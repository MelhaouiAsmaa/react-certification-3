import React, { useRef, useState } from "react";
import GenericModal from "./GenericModal";

export default function DialogTest() {
  const [count, setCount] = useState(0);

  const modalRef = useRef(null);
  const nonModalRef = useRef(null);

    const modalFooter = (
      <button
        onClick={() => modalRef?.current?.close()}
        className="px-3 py-1 btn btn-danger rounded"
      >
        Close
      </button>
      );
      
    const nonModalFooter = (
      <button
        onClick={() => nonModalRef?.current?.close()}
        className="px-3 py-1 btn btn-warning rounded"
      >
        Close
      </button>
      );

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
      <div className="p-4 border rounded shadow-sm">
        <button
          onClick={() => modalRef.current?.open()}
          className="btn btn-success"
        >
          Open Modal from Outside
        </button>
        <button
          onClick={() => nonModalRef.current?.open()}
          className="btn btn-danger ms-2"
        >
          Open Non-Modal from Outside
        </button>
      </div>
      <GenericModal
        ref={modalRef}
        modal={true}
        header="Modal Dialog"
        body={<p>This dialog blocks interaction with the background.</p>}
        footer={modalFooter}
      />
      <GenericModal
        ref={nonModalRef}
        modal={false}
        header="Non-Modal Dialog"
        body={<p>This dialog allows background interaction.</p>}
        footer={nonModalFooter}
      />
    </div>
  );
}
