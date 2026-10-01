import { redirect } from "next/navigation";
import { createClient } from "../_lib/supabase-server";
import { logOut } from "../login/actions";
import AddTaskForm from "./AddTaskForm";
import TaskCheckbox from "./TaskCheckbox";

type Task = {
  id: string;
  title: string;
  skill: string;
  done: boolean;
};

export default async function TasksPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // The database's row rules only return the signed-in account's own tasks.
  const { data, error } = await supabase
    .from("tasks")
    .select("id, title, skill, done")
    .order("created_at", { ascending: true });
  const tasks: Task[] = data ?? [];

  return (
    <main>
      <h1>Your tasks</h1>
      <p>Signed in as {user.email}</p>

      <AddTaskForm />

      {error ? (
        <p className="error" role="alert">
          Could not load your tasks. Please refresh the page.
        </p>
      ) : tasks.length === 0 ? (
        <p className="muted">No tasks yet. Add one above.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.done ? "task done" : "task"}>
              <TaskCheckbox id={task.id} done={task.done} title={task.title} />
              <span className="task-title">{task.title}</span>
              <span className="skill-label">{task.skill}</span>
            </li>
          ))}
        </ul>
      )}

      <form action={logOut}>
        <button type="submit">Log out</button>
      </form>
    </main>
  );
}
