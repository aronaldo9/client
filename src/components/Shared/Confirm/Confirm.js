import { useState, useEffect } from "react";

export function Confirm(props) {
  const { open, onCancel, onConfirm, content } = props;

  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    setIsVisible(open);
  }, [open]);

  const handleCancel = () => {
    setIsVisible(false);
    onCancel && onCancel();
  };

  const handleConfirm = () => {
    setIsVisible(false);
    onConfirm && onConfirm();
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black opacity-50 fixed inset-0"></div>
          <div className="bg-white p-8 rounded shadow-md z-10">
            <p className="text-lg">{content}</p>
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                onClick={handleCancel}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={handleConfirm}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
