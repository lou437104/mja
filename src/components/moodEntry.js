import React, { useState } from 'react';

const MoodEntry = ({ onAddEntry }) => {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mood) return;
    const newEntry = {
      id: Date.now(),
      mood,
      note,
      date: new Date().toLocaleString(),
    };
    onAddEntry(newEntry);
    setMood('');
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log Your Mood</h2>
      <input
        type="text"
        placeholder="How are you feeling?"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        required
      />
      <textarea
        placeholder="Want to say more?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default MoodEntry;