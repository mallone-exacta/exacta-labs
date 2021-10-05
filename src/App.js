import React, { useCallback, useEffect, useState } from "react";

import Input from "./components/Input";
import List from "./components/List";
import Pagination from "./components/Pagination";

import TaskService from "./services/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const getTasks = useCallback(async () => {
    const data = await TaskService.getTasks();

    setTasks(data);
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  async function handleClick() {
    if (value) {
      await TaskService.saveTask({
        title: value,
      });

      setValue("");

      getTasks();
    }
  }

  async function handleDelete(id) {
    await TaskService.deleteTask(id);

    getTasks();
  }

  return (
    <div className="App">
      <h1>Task list</h1>

      <Input
        placeholder="Digite sua task"
        value={value}
        onChange={handleChange}
      />

      <button onClick={handleClick}>Adicionar task</button>

      <div>
        {!!tasks.length && <List tasks={tasks} onDelete={handleDelete} />}

        {!tasks.length && "Carregando..."}
      </div>

      <Pagination page="1" />
    </div>
  );
}

export default App;
