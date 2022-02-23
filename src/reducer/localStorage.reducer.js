const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      if (action.task === "") {
        return state;
      } else {
        return {...state,  list: [action.task, ...state.list] };
      }
    case "EDIT_TASK":
      
        let newState = {...state};
        newState.taskToEdit.task = action.task
        newState.taskToEdit.id = action.id
        return newState;
      
    case "UPDATE_TASK":
      if (action.task === "" || action.id == null) {
        return state;
      } else {
        let newState = {...state};
        newState.list[action.id] = action.task;
        return newState;
      }
    case "REMOVE_TASK":
      let updatelist = state.list.filter((task, id) => {
        return id !== action.id;
      });
      return { ...state, list: [...updatelist] };

    default:
      return state;
  }
};

export default reducer;
