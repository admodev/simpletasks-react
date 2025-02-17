import React from "react";
import TaskComponent from "./Task/TaskComponent";

// Styles
import "./App.css";

const App: React.FC = () => {
  const tasks = [
    { taskName: "First Task" },
    { taskName: "Second Task" },
    { taskName: "Third Task" },
  ];

  return (
    <>
      <div className="appContainer">
        <h1 className="appTitle">Mis Tareas</h1>
        {tasks.map((task, index) => (
          <TaskComponent key={index} taskName={task.taskName} />
        ))}
      </div>
    </>
  );
};

export default App;
