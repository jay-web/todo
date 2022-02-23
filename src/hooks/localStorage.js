import React, { useReducer, useEffect } from "react";
import reducer  from "../reducer/localStorage.reducer";

const initialState = {
  list: ["Practice JavaScript", "Learn React Design Pattern", "Practise React Testing"], 
  taskToEdit: {task: "", id: null}
}



const useLocalStorage = () => {
    const [todoState, dispatch ] = useReducer(reducer, initialState, () => {
        let data;
        try {
          data = JSON.parse(window.localStorage.getItem("tasks") || String(initialState));
        } catch (e) {
          data = initialState;
        }
        return data;
      });

    useEffect(() => {
        window.localStorage.setItem("tasks", JSON.stringify(todoState))
    }, [todoState])

    return [todoState, dispatch]
};


export default useLocalStorage;
