import { useState } from "react";

import Input from "./components/Input";
import List from "./components/List";
import Pagination from "./components/Pagination";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>Task list</h1>

      <Input
        placeholder="Digite sua task"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />

      <button>Adicionar task</button>

      <List />

      <Pagination page="8" />
    </div>
  );
}

export default App;
