import React from "react";

interface NotePopupProps {
  note: {
    title: string;
    contentSnippet: string;
    dateTime: string;
  };
  onClose: () => void;
}

const NotePopup: React.FC<NotePopupProps> = ({ note, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-blue-100 border border-blue-300 shadow-lg p-6 rounded max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{note.title}</h2>
        <p className="text-lg mb-4">{note.contentSnippet}</p>
        <p className="text-sm text-gray-500 mb-4">{note.dateTime}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NotePopup;
