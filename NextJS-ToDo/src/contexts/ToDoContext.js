"use client";

import { createContext, useContext, useState} from 'react';

export const ToDoContext = createContext({});

export const ToDoProvider = ({ children }) => {
    const [todos, setToDos] = useState(
        [
            {
                "id" : "01",
                "title" : "Eatting",
                "dueDate" : "2024-07-06"
            }
        ]
    );
    return (
        <ToDoContext.Provider value={{ todos, setToDos }}>
            {children}
        </ToDoContext.Provider>
    )
}

const useToDoContext = () => useContext(ToDoContext);
export default useToDoContext;