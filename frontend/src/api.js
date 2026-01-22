const BASE_URL = import.meta.env.VITE_API_URL;

export async function getTasks() {
  const res = await fetch(`${BASE_URL}/tasks/`);
  return res.json();
}

export async function createTask(title) {
  const res = await fetch(`${BASE_URL}/tasks/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  return res.json();
}

export async function updateTaskStatus(id, status) {
  const res = await fetch(`${BASE_URL}/tasks/${id}/status/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}

export async function deleteTask(id) {
  const res = await fetch(`${BASE_URL}/tasks/${id}/`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete task");
  }
}
