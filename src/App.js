import "./App.css";
import react, { useState } from "react";

import TodoList from "./components/todoList";
import { Grid } from "semantic-ui-react";
import TaskInput from "./components/taskInput";

const initialData = ["fetch milk", "bring bread", "buy newspaper"];

function App() {
  const [list, setList] = useState(initialData);
  const [editMode, setEditMode] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});

  const addTask = (task) => {
    if (!editMode) {
      let newTasks = [task, ...list];
      setList(newTasks);
    } else {
      let updatedTasks = [...list];
      updatedTasks[taskToEdit.taskId] = task;

      setList(updatedTasks);
      setEditMode(false);
      setTaskToEdit({});
    }
  };

  const deleteTask = (taskId) => {
    let upddatedTasks = list.filter((task, id) => id != taskId);
    setList(upddatedTasks);
  };

  const editTask = (task, taskId) => {
    setEditMode(true);
    setTaskToEdit({ task, taskId });
    console.log(taskToEdit);
  };

  return (
    <Grid centered columns={2} style={{ marginTop: "1rem" }}>
      <Grid.Column>
        <TaskInput addTask={addTask} taskToEdit={taskToEdit} />
        <TodoList list={list} deleteTask={deleteTask} editTask={editTask} />
      </Grid.Column>
    </Grid>
  );
}

export default App;
