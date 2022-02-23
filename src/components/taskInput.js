import React, { useState, useRef, useEffect } from "react";
import { Input } from "semantic-ui-react";

const TaskInput = (props) => {
  const { addTask, taskToEdit } = props;
  const [value, setValue] = useState(null);
  
  const ref = useRef();

  const onEnter = (e) => {
    if (e.which == 13) {
      e.preventDefault();
      addTask(e.target.value);
      setValue("");
    }
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(taskToEdit.task);
    ref.current.focus();
  }, [taskToEdit]);

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
