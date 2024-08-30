import React, { useState } from "react";
import { Note } from "@/app/store/notes/noteDefinitions";
import NotePopup from "./notePopup";

interface NoteListCardsProps {
  notes: Note[];
}

const NoteListCards: React.FC<NoteListCardsProps> = ({ notes }) => {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const maxSnippetLength = 50; // Adjust this value as needed

  const truncateSnippet = (snippet: string) => {
    return snippet.length > maxSnippetLength
      ? snippet.substring(0, maxSnippetLength) + "..."
      : snippet;
  };

  const handleClick = (note: Note) => {
    setSelectedNote(note);
  };

  const handleClosePopup = () => {
    setSelectedNote(null);
  };

  return (
    <div>
      {selectedNote && (
        <NotePopup note={selectedNote} onClose={handleClosePopup} />
      )}
      <div className="grid grid-cols-2 gap-6">
        {notes.map((note, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded cursor-pointer"
            onClick={() => handleClick(note)}
          >
            <h4 className="text-lg font-semibold">{note.title}</h4>
            <p className="text-sm text-gray-600">{truncateSnippet(note.contentSnippet)}</p>
            <p className="text-xs text-gray-500 mt-2">{note.dateTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteListCards;
