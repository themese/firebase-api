import axios from "axios";
import { useEffect, useState } from "react";
import { TaskDto } from "../model";

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskDto[]>([]);
  const getTasks = async () => {
    const response = await axios("http://localhost:8080/tasks");
    setTasks(response.data);
  };
  useEffect(() => {
    getTasks();
  }, []);
  // TODO onclick task, show Task component on the right hand side of the screen
  return (
    <div>
      <h4> Your Tasks</h4>
      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task.name}</li>;
        })}
      </ul>
    </div>
  );
}
