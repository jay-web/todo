import React, { useState, useRef, useContext, useEffect } from "react";
import { Input } from "semantic-ui-react";
import { DispatchContext } from "../context/todo.context";
import { TasksContext  } from "../context/todo.context";

const TaskInput = () => {
  const dispatch = useContext(DispatchContext);
  const todoState = useContext(TasksContext);

  const [value, setValue] = useState("");
  
  const ref = useRef();

  const onEnter = (e) => {
    if (e.which == 13) {
      e.preventDefault();
      if(todoState.taskToEdit.id === null){
        dispatch({type: "ADD_TASK", task: e.target.value});
        setValue("");
      }else{
        dispatch({type: "UPDATE_TASK", task: e.target.value, id: todoState.taskToEdit.id})
        dispatch({type: "EDIT_TASK", task: "", id: null})
        setValue("");
      }
      
    }
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(todoState.taskToEdit.task);
    ref.current.focus();
  }, [todoState]);

  return (
    <form>
      <Input
        icon="tags"
        iconPosition="left"
        label={{ tag: true, content: "Add Task" }}
        labelPosition="right"
        placeholder="Enter task"
        value={value}
        onChange={(e) => handleOnChange(e)}
        name="task"
        ref={ref}
        onKeyPress={(e) => onEnter(e)}
      />
    </form>
  );
};

export default TaskInput;
