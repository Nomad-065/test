
"use client";

import { useState, useEffect } from "react";
import NoteListCards from "../components/notes/noteListCards";
import NoteSummaryCard from "../components/notes/noteSummaryCard";
import { Note } from "../store/notes/noteDefinitions";

export default function Page() {
  // const notes: Note[] = [
  //   {
  //     title: 'Note 1',
  //     contentSnippet: 'This is the first few bits of the note...',
  //     dateTime: '2024-08-28 10:00 AM',
  //   },
  //   {
  //     title: 'Note 2',
  //     contentSnippet: 'This is the first few bits of the note...',
  //     dateTime: '2024-08-28 11:00 AM',
  //   },
  //   {
  //     title: 'Real notes',
  //     contentSnippet: 'This is the first few bits of the note... trying out to see whats the maximum text it will hold, so im typing a really long sentence, it shouldnt show me everything',
  //     dateTime: '2024-08-28 12:00 AM',
  //   },
  //   // Add more notes here
  // ];

  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    // Retrieve notes from sessionStorage
    const storedNotes = JSON.parse(sessionStorage.getItem('notes') || '[]');
    setNotes(storedNotes);
  }, []);
  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Note Dashboard</h1>
      <NoteSummaryCard todayCount={notes.length} monthCount={10} totalCount={50} />
      <NoteListCards notes={notes} />
    </div>
  );
}