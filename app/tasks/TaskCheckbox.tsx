"use client";

import { useTransition } from "react";
import { setTaskDone } from "./actions";

// The tick box beside each task. Ticking it saves "done" to the database.
export default function TaskCheckbox({
  id,
  done,
  title,
}: {
  id: string;
  done: boolean;
  title: string;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <input
      type="checkbox"
      checked={done}
      disabled={pending}
      aria-label={`Mark "${title}" as done`}
      onChange={(e) => {
        const next = e.target.checked;
        startTransition(() => setTaskDone(id, next));
      }}
    />
  );
}
