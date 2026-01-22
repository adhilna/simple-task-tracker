import { useEffect, useState } from "react";
import { getTasks, createTask, updateTaskStatus, deleteTask } from "./api";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreate = async (title) => {
    await createTask(title);
    loadTasks();
  };

  const handleStatusChange = async (id, status) => {
    await updateTaskStatus(id, status);
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);

    setTasks((prev => prev.filter((task) => task.id !== id)));
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center py-10">
      <div className="w-full max-w-xl bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold text-slate-900 tracking-tight mb-1">
          Task Tracker
        </h1>
        <p className="text-sm text-slate-500 mb-6">
          Manage your tasks efficiently
        </p>


        <CreateTask onCreate={handleCreate} />
        <TaskList tasks={tasks} onStatusChange={handleStatusChange} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
