import TaskItem from "./TaskItem";

function TaskList({ tasks, onStatusChange, onDelete }) {
  if (!tasks.length) {
    return (
      <p className="py-10 text-center text-sm text-slate-500">
        No tasks yet. Add your first task above.
      </p>

    );
  }

  return (
    <ul className="space-y-3 mt-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
