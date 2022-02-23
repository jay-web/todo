import React, {useContext} from "react";
import { List, Button, Icon } from "semantic-ui-react";
import { TasksContext } from "../context/todo.context";
import { DispatchContext } from "../context/todo.context";

const TodoList = () => {
  const todoState = useContext(TasksContext);
  const dispatch = useContext(DispatchContext);

  console.log(todoState)
  const renderList = () => {
    return todoState.list.map((task, index) => {
      return (
        <List.Item key={index}>
          <List.Content floated="right">
            <Button onClick={() => dispatch({ type: "EDIT_TASK", task: task, id: index})}>Edit</Button>
            <Button onClick={() => dispatch({ type: "REMOVE_TASK", id: index})}>Delete</Button>
          </List.Content>

          <Icon name="chess queen" size="large" />
          <List.Content>{task}</List.Content>
        </List.Item>
      );
    });
  };

  return (
    <List divided verticalAlign="middle">
      {renderList()}
    </List>
  );
};

export default TodoList;
