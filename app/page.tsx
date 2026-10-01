import { redirect } from "next/navigation";

// The home address sends people to their tasks.
// If they are not signed in, /tasks sends them on to the login form.
export default function Home() {
  redirect("/tasks");
}
