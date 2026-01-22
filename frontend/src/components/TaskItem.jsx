const statusStyles = {
    TODO: "bg-slate-100 text-slate-700",
    IN_PROGRESS: "bg-yellow-100 text-yellow-700",
    DONE: "bg-green-100 text-green-700",
};


function TaskItem({ task, onStatusChange, onDelete }) {
    return (
        <li className="flex justify-between items-center border border-slate-200 rounded px-4 py-3">
            <div className="space-y-1">
                <p className="font-medium text-slate-800">
                    {task.title}
                </p>

                <span
                    className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium
        ${statusStyles[task.status]}`}
                >
                    {task.status.replace("_", " ")}
                </span>
            </div>


            {task.status === "TODO" && (
                <button
                    onClick={() => onStatusChange(task.id, "IN_PROGRESS")}
                    className="text-xs bg-yellow-500 text-white px-3 py-1 rounded"
                >
                    Start
                </button>
            )}

            {task.status === "IN_PROGRESS" && (
                <button
                    onClick={() => onStatusChange(task.id, "DONE")}
                    className="text-xs bg-green-600 text-white px-3 py-1 rounded"
                >
                    Complete
                </button>
            )}
            {task.status === "DONE" && (
                <button
                    onClick={() => onDelete(task.id)}
                    className="text-xs text-red-500 hover:text-red-700 transition"
                    title="Delete task"
                >
                    Delete
                </button>
            )}
        </li>
    );
}

export default TaskItem;
