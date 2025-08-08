import React, { useEffect, useState } from 'react';
import MoodEntry from './components/MoodEntry';
import MoodHistory from './components/moodHistory';

const App = () => {
  const [entries, setEntries] = useState([]);

  // Load entries from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('moodEntries');
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  // Save entries to localStorage when they change
  useEffect(() => {
    localStorage.setItem('moodEntries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    setEntries([entry, ...entries]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Mood Journal</h1>
      <MoodEntry onAddEntry={addEntry} />
      <MoodHistory entries={entries} />
    </div>
  );
};

export default App;