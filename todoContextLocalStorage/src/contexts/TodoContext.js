import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "1st task",
            completed : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleCompletion : (id) => {}
});


export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {

    return useContext(TodoContext);

}