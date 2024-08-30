"use client";

import React, { useState } from 'react';

export default function CreateNotePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(''); // State to hold error message

  const handleSave = () => {
    // Check if the title is empty
    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    const newNote = {
      title,
      contentSnippet: content.substring(0, 100), // Limiting snippet to 100 characters
      dateTime: new Date().toLocaleString(),
    };

    // Retrieve existing notes from session storage or initialize an empty array
    const storedNotes = JSON.parse(sessionStorage.getItem('notes') || '[]');

    // Add the new note to the array
    storedNotes.push(newNote);

    // Save the updated array back to session storage
    sessionStorage.setItem('notes', JSON.stringify(storedNotes));

    // Clear the form and error
    setTitle('');
    setContent('');
    setError('');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Create a New Note</h1>
      <div className="mb-4">
        <label className="block text-lg font-semibold">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
          placeholder='Please enter a title'
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-lg font-semibold">Note</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded h-40"
          placeholder='Enter your note'
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}
