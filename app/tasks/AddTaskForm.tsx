"use client";

import { useActionState } from "react";
import { addTask, type AddTaskState } from "./actions";
import { SKILLS } from "./skills";

// The "type a task, choose a skill, click Add" form.
// React clears the boxes after each submit, ready for the next task.
export default function AddTaskForm() {
  const [state, formAction, pending] = useActionState<AddTaskState, FormData>(
    addTask,
    { error: null }
  );
  return (
    <form action={formAction} className="add-task-form">
      <label>
        Task
        <input
          type="text"
          name="title"
          required
          maxLength={200}
          placeholder="Listen to a 10-minute Tagalog podcast"
        />
      </label>
      <label>
        Skill
        <select name="skill" required defaultValue="">
          <option value="" disabled>
            Choose a skill
          </option>
          {SKILLS.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>
      </label>
      {state.error && (
        <p className="error" role="alert">
          {state.error}
        </p>
      )}
      <button type="submit" disabled={pending}>
        {pending ? "Adding…" : "Add"}
      </button>
    </form>
  );
}
