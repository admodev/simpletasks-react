import React from "react";
import Task from "../../features/tasks/taskInterface";

// Styles
import styles from "./task.module.css";

const TaskComponent: React.FC<Task> = ({ taskName }) => {
  return (
    <div className={styles.taskContainer}>
      <input type="checkbox" className={styles.taskCheckbox} />
      <h1 className={styles.taskTitle}>{taskName ?? "Tarea vacia"}</h1>
    </div>
  );
};

export default TaskComponent;
