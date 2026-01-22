import { useState } from "react";

function CreateTask({ onCreate }) {
    const [title, setTitle] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onCreate(title);
        setTitle("");
    };

    return (
        <form onSubmit={submit} className="flex gap-2 mb-6">
            <input
                className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm
            focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                type="submit"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white
            hover:bg-blue-700 transition"
            >
                Add
            </button>
        </form>
    );
}

export default CreateTask;
