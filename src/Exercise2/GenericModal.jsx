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
        <dialog ref={dialogRef} className="rounded-lg p-4 w-80">
          <div className="mb-2 font-bold text-lg">{header}</div>
          <div className="mb-4">{body}</div>
          <div className="flex justify-end space-x-2">
            {footer}
          </div>
        </dialog>
      </>
    );
  }
);

export default GenericModal;
