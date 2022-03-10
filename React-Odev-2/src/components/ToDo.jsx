import { useState } from "react";
import { ListItem, UnorderedList, Text } from "@chakra-ui/react";
import Form from "./Form/index";
import "./styles.css";

function ToDo() {
  const [tasks, setTasks] = useState(["React Öğren", "Yazılım Çalış"]);
  const [newTask, setNewTask] = useState("");
  return (
    <div className="container">
      <Form tasks={tasks} setTasks={setTasks} newTask={newTask} setNewTask={setNewTask} />
    </div>
  );
}

export default ToDo;
