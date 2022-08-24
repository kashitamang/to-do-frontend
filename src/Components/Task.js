import React from 'react';

export default function Task({ task }) {
  return (
    <div className="task-card">
      <p>{task.content}</p>
      <p>{task.completed}</p>
    </div>
  );
}
