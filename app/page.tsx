import Header from "@/components/Header";
import Input from "@/components/Input";
import List from "@/components/List";
import { TodoContextProvider } from "@/context/ToDoContext";
import { useContext } from "react";

export default function Home() {

  return (
    <div className="flex flex-col items-center gap-14">
          <Input />
          <List />
    </div>
  );
}
