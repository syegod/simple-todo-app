'use client';
import { TodoContext } from "@/context/ToDoContext";
import { useContext, useState } from "react";
import { FiPlus } from "react-icons/fi";


const Input = () => {
    const [text, setText] = useState('');
    const todos = useContext(TodoContext);

    const handleCreate = () => {
        if (text.length > 1) {
            setText('');
            todos?.changeItems([...todos.items, { text, isDone: false, id: todos.items.length }]);
        }
    }

    return (
        <div className="flex flex-col gap-5 w-full sm:w-[50ch]">
            <input type="text" className="bg-transparent shadow-md p-3 border rounded-lg  outline-none focus-within:ring-2 ring-fuchsia-600 transition" placeholder="Enter title of todo..." onChange={e => setText(e.target.value)} value={text} />
            <button className="p-3 bg-fuchsia-500 text-white sm:w-full rounded-md inline-flex justify-between items-center shadow-md hover:opacity-90 active:scale-[105%] transition outline-none" onClick={handleCreate}>
                <span />
                <span className="font-bold">Create</span>
                <FiPlus size={25} />
            </button>
        </div>
    )
}

export default Input