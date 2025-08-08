import React from 'react';

const MoodHistory = ({ entries }) => {
  return (
    <div>
      <h2>Your Mood History</h2>
      {entries.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>
              <strong>{entry.mood}</strong> – {entry.note} <br />
              <small>{entry.date}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoodHistory;