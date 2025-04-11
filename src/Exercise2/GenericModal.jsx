import React, { useRef } from 'react';

const GenericModal = ({ modal = true, header, body, footer, triggerText = "Open Dialog" }) => {
  const dialogRef = useRef(null);

  const open = () => {
    if (modal) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.show();
    }
  };

  const close = () => {
    dialogRef.current?.close();
  };

  return (
    <div className="p-4 border rounded shadow-sm">
      <button onClick={open} className="btn btn-success text-white px-4 py-2 rounded">
        {triggerText}
      </button>

      <dialog
        ref={dialogRef}
        style={modal ? {} : { position: 'absolute', top: '250px', left: '100px', zIndex: 10 }}
        className="rounded-lg p-4 w-80"
      >
        <div className="mb-2 font-bold text-lg">{header}</div>
        <div className="mb-4">{body}</div>
        <div className="flex justify-end space-x-2">
          {footer || <button onClick={close} className="px-3 py-1 btn btn-danger rounded">Close</button>}
        </div>
      </dialog>
    </div>
  );
};

export default GenericModal;
