const Task = ({ task }) => {
  return (
    <div>
      <input type="checkbox" checked={task.completed} />
      <p>{task.text}</p>
      <button>x close</button>
    </div>
  );
};

export { Task };
