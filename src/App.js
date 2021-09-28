function List() {
  return (
    <ul>
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
      <li>Task 4</li>
      <li>Task 5</li>
      <li>Task 6</li>
    </ul>
  );
}

function Pagination({ page }) {
  return (
    <div>
      <button>{"<"}</button>

      <span>Página {page}</span>

      <button>{">"}</button>
    </div>
  );
}

function Input() {
  return <input />;
}

function App() {
  return (
    <div className="App">
      <h1>Task list</h1>

      <Input />

      <button>Adicionar task</button>

      <List />

      <Pagination page="8" />
    </div>
  );
}

export default App;
