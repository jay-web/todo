import React, {createContext} from "react";

import useLocalStorage from "../hooks/localStorage";

export const TasksContext = createContext();
export const DispatchContext = createContext();


const TaskProvider = (props) => {

    const [todoState, dispatch ] = useLocalStorage();
    console.log({todoState})

    return (
        <TasksContext.Provider value={todoState} >
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TasksContext.Provider>
    )
}



export default TaskProvider;