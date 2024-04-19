'use client';

import { useContext, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { MdDeleteOutline, MdDone } from "react-icons/md";
import { ToDo, TodoContext } from "@/context/ToDoContext";


const ListItem: React.FC<ToDo> = ({ isDone, text, id }) => {
    const todos = useContext(TodoContext);

    const handleDone = () => {
        const todoitems = todos?.items!;
        todoitems[todoitems.findIndex(e => e.id === id)].isDone = true;
        todos?.changeItems([...todoitems]);
    }

    const handleDelete = () => {
        const todoitems = todos?.items!;
        todoitems?.splice(todoitems.findIndex(e => e.id === id), 1);
        todos?.changeItems([...todoitems]);
    }

    if (!isDone) {
        return (
            <div className="w-full border p-3 rounded shadow-lg flex flex-col">
                <div className="flex justify-between items-start gap-3">
                    <span className="w-full text-lg">
                        {text}
                    </span>
                    <div className="sm:flex-row flex flex-col gap-3 items-center h-max">
                        <button className="bg-green-500 text-white p-[3px] rounded hover:opacity-90 active:shadow-md transition" onClick={handleDone}>
                            <MdDone size={22} />
                        </button>
                        <button className="bg-rose-500 text-white p-[3px] rounded hover:opacity-90 active:shadow-md transition" onClick={handleDelete}>
                            <MdDeleteOutline size={22} />
                        </button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="w-full p-3 rounded shadow-lg flex flex-col bg-green-600 text-white">
                <div className="flex justify-between items-center gap-3">
                    <span className="w-full text-lg">
                        {text}
                    </span>
                        <button className="bg-rose-500 text-white p-[5px] rounded hover:opacity-90 active:scale-105 transition" onClick={handleDelete}>
                            <TfiClose size={17} />
                        </button>
                </div>
            </div>
        )
    }
}

export default ListItem