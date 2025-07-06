import React, { useRef, forwardRef, useImperativeHandle } from "react";

const GenericModal = forwardRef(({ modal = true, header, body, footer}, ref) => {
    const dialogRef = useRef(null);

    useImperativeHandle(ref, () => ({
      open: () => {
        if (modal) {
          dialogRef.current?.showModal();
        } else {
          dialogRef.current?.show();
        }
      },
      close: () => {
        dialogRef.current?.close();
      },
    }));

    return (
      <>
        <dialog
          ref={dialogRef}
          style={modal ? {} : {position: "absolute", top: "250px", left: "100px", zIndex: 10}} 
          className="rounded-lg p-4 w-80"
        >
          <div className="mb-2 font-bold text-lg">{header}</div>
          <div className="mb-4">{body}</div>
          <div className="flex justify-end space-x-2">
            {footer || (
              <button onClick={() => ref?.current?.close()} className="px-3 py-1 btn btn-danger rounded">
                Close
              </button>
            )}
          </div>
        </dialog>
      </>
    );
  }
);

export default GenericModal;
