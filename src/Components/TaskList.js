import React from 'react';
import Task from './Task';
import '../styles/Task.css';


export default function TaskList({ tasks, setTasks }) {
  
  return (
    <div className="task-list">
      {tasks.map((task, i) => (
        <Task 
          key={task.content + i} 
          task={task} 
          tasks={tasks}
          setTasks={setTasks}/>
      ))}
    </div>
  );
}
