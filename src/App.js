import "./styles.css";
import TaskManager from "./TaskManager";
import data from "./data";
import React from 'react';

export default function App() {
  let tasks = [...data].slice(0, 10);

  const loadTasks = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(tasks);
        tasks = [
          {
            ...tasks[0],
            status:
              tasks[0].status === "In Progress" ? "Pending" : "In Progress",
          },
          ...tasks.slice(1),
        ];
      }, 2000);
    });
  };

  return (
    <div className="App">
      <TaskManager loadTasks={loadTasks} />
    </div>
  );
}
