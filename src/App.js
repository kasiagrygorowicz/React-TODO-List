import logo from "./logo.svg";
import "./App.css";
import Task from "./components/Task";

import React, { useState } from "react";
import List from "./components/List";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [id, setId] = useState(0);

  function addTask(taskInput) {
    setTasksList((listUnDoneTasks) => [
      ...listUnDoneTasks,
      { task: taskInput, id: id, isCompleted: false },
    ]);
    setId(id + 1);
  }

  function changeHandler(id, task, isCompleted) {
    var index = tasksList.findIndex((x) => x.id === id);
    tasksList.splice(index, 1);
    setTasksList((listUnDoneTasks) => [
      ...listUnDoneTasks,
      {
        task: task,
        id: id,
        isCompleted: isCompleted,
      },
    ]);
  }

  return (
    <div style={{ marginLeft: "10px" }}>
      <div>
        <h1>React state todoMVC</h1>
        <TaskForm addTask={addTask} />
      </div>
      <div>
        <h3>To do</h3>
        <List
          list={tasksList.filter((x) => !x.isCompleted)}
          f={changeHandler}
        />
      </div>
      <div>
        <h3>Done</h3>
        <List
          list={tasksList.filter((x) => !!x.isCompleted)}
          f={changeHandler}
        />
      </div>
    </div>
  );
}

export default App;
