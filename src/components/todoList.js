import React, { useState } from "react";
import { List, Image, Button, Icon } from "semantic-ui-react";



const TodoList = (props) => {
 
    const { list, deleteTask, editTask } = props;

  const renderList = () => {
    return list.map((task, index) => {
      return (
       
          <List.Item key={index}>
            <List.Content floated="right">
              <Button onClick={() => editTask(task, index)}>Edit</Button>
              <Button onClick={() => deleteTask(index)}>Delete</Button>
            </List.Content>
           
            <Icon  name='chess queen' size="large"/>
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
