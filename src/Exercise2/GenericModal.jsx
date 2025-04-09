import React, { useState, useImperativeHandle, forwardRef } from "react";

const GenericModal = forwardRef(({ onClose }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState({ header: null, body: null, footer: null });

  useImperativeHandle(ref, () => ({
    open: ({ header, body, footer }) => {
      setContent({ header, body, footer });
      setIsOpen(true);
    },
    close: () => {
      setIsOpen(false);
      onClose && onClose();
    },
  }));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-xl"
          onClick={() => {
            setIsOpen(false);
            onClose && onClose();
          }}
        >
          ✖
        </button>
        <div className="mb-4">{content.header}</div>
        <div className="mb-6">{content.body}</div>
        <div className="flex justify-end space-x-4">{content.footer}</div>
      </div>
    </div>
  );
});

export default GenericModal;
