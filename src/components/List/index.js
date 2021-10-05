export default function List({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}

          <button onClick={() => onDelete(task.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}
