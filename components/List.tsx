'use client';

import { useContext, useState } from "react";
import ListItem from "./ListItem";
import { TodoContext } from "@/context/ToDoContext";

const List = () => {
    const todos = useContext(TodoContext);

    return (
        <div className="flex flex-col gap-5 w-full">
            {todos?.items.map(e => 
                <ListItem isDone={e.isDone} key={e.text} text={e.text} id={e.id}/>
            )}

        </div>
    )
}

export default List