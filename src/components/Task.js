import classes from "./Task.module.css";
import React, { useState } from "react";

function Task(props) {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);
  const [task, setTask] = useState(props.task);
  const [id, setId] = useState(props.id);

  function checkboxHandler() {
    props.changeHandler(id, task, !isCompleted);
    setIsCompleted(!isCompleted);
  }

  return (
    <div className={classes.taskFrame}>
      <input
        className={classes.item}
        type="checkbox"
        checked={isCompleted}
        onClick={checkboxHandler}
      />
      <p className={classes.item}>{task}</p>
    </div>
  );
}


export default Task;
