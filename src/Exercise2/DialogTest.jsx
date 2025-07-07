import React, { useRef, useState } from "react";
import GenericModal from "./GenericModal";

export default function DialogTest() {
  const [count, setCount] = useState(0);

  const modalRef = useRef(null);
  const nonModalRef = useRef(null);

  const renderFooter = (ref, className) => {
    return (
      <button
        onClick={() => ref?.current?.close()}
        className={`px-3 py-1 btn btn-${className} rounded`}
      >
        Close
      </button>
    );
  };

  const renderOpenDialog = (label, ref, className) => {
    return (
      <button onClick={() => ref?.current?.open()} className={className}>
        {label}
      </button>
    );
  };

  return (
    <div className="container p-5">
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
          {renderOpenDialog("Open modal", modalRef, "btn btn-success mb-2")}
          {renderOpenDialog("Open non-modal", nonModalRef, "btn btn-danger")}
        </div>
      </div>
      <GenericModal
        ref={modalRef}
        modal={true}
        header="Modal Dialog"
        body={
          <p>
            This dialog blocks interaction with the background. Please test with
            the blue button.
          </p>
        }
        footer={renderFooter(modalRef, "danger")}
      />
      <GenericModal
        ref={nonModalRef}
        modal={false}
        header="Non-Modal Dialog"
        body={
          <p>
            This dialog allows background interaction. Please test with the blue
            button.
          </p>
        }
        footer={renderFooter(nonModalRef, "warning")}
      />
    </div>
  );
}
