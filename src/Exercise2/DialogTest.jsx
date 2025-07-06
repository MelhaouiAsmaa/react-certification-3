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
    <div className="container">
      <h2 className="mb-4 text-center">Reusable Dialog Demo</h2>
      <div className="row">
        <div className="col-6 d-flex flex-column justify-content-center align-items-center p-4 border rounded shadow-sm">
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
      <div className="col-6 d-flex flex-column justify-content-center align-items-center p-4 border rounded shadow-sm">
        <button
          onClick={() => modalRef.current?.open()}
          className="btn btn-success mb-2"
        > {/*Allow opening the dialog from outside */}
          Open Modal
        </button>
        <button
          onClick={() => nonModalRef.current?.open()}
          className="btn btn-danger"
        >
          Open Non-Modal
        </button>
      </div>
      </div>
      <GenericModal
        ref={modalRef}
        modal={true}
        header="Modal Dialog"
        body={<p>This dialog blocks interaction with the background. Please test with the blue button.</p>}
        footer={modalFooter}
      />
      <GenericModal
        ref={nonModalRef}
        modal={false}
        header="Non-Modal Dialog"
        body={<p>This dialog allows background interaction. Please test with the blue button.</p>}
        footer={nonModalFooter}
      />
    </div>
  );
}
