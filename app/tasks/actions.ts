"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../_lib/supabase-server";
import { SKILLS } from "./skills";

export type AddTaskState = { error: string | null };

export async function addTask(
  _prev: AddTaskState,
  formData: FormData
): Promise<AddTaskState> {
  const title = String(formData.get("title") ?? "").trim();
  const skill = String(formData.get("skill") ?? "");

  if (!title) {
    return { error: "Type a task first." };
  }
  if (!(SKILLS as readonly string[]).includes(skill)) {
    return { error: "Choose a skill." };
  }

  const supabase = await createClient();
  // user_id is filled in by the database from the signed-in account.
  const { error } = await supabase.from("tasks").insert({ title, skill });

  if (error) {
    return { error: "Could not save the task. Please try again." };
  }
  revalidatePath("/tasks");
  return { error: null };
}

export async function setTaskDone(id: string, done: boolean) {
  const supabase = await createClient();
  // The database's row rules mean this only changes the signed-in account's own task.
  const { error } = await supabase.from("tasks").update({ done }).eq("id", id);

  if (error) {
    throw new Error("Could not update the task.");
  }
  revalidatePath("/tasks");
}
