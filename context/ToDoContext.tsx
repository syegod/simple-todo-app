'use client';
import { createContext, useState } from "react";

export interface ToDo {
    id: number | string;
    text: string;
    isDone?: boolean;
}

interface TodoContextType {
    items: ToDo[],
    changeItems: (newValue: ToDo[]) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoContextProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<ToDo[]>([]);

    const changeItems = (newValue: ToDo[]) => {
        setItems(newValue);
    }

    return (
        <TodoContext.Provider value={{items, changeItems}}>
            {children}
        </TodoContext.Provider>
    )
}