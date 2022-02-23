import "./App.css";
import react from "react";
import TaskProvider from "./context/todo.context";
import TodoList from "./components/todoList";
import { Grid } from "semantic-ui-react";
import TaskInput from "./components/taskInput";



function App() {
  

  return (
    <TaskProvider>
    <Grid centered columns={2} style={{ marginTop: "1rem" }}>
      <Grid.Column>
        <TaskInput  />
        <TodoList  />
      </Grid.Column>
    </Grid>
    </TaskProvider>
  );
}

export default App;
