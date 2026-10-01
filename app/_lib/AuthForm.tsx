"use client";

import { useActionState } from "react";
import type { AuthState } from "../login/actions";

type Props = {
  action: (prev: AuthState, formData: FormData) => Promise<AuthState>;
  buttonLabel: string;
};

// The email + password form used on both the log in and sign up pages.
export default function AuthForm({ action, buttonLabel }: Props) {
  const [state, formAction, pending] = useActionState(action, { error: null });

  return (
    <form action={formAction} className="auth-form">
      <label>
        Email
        <input type="email" name="email" required autoComplete="email" />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          required
          minLength={6}
          autoComplete="current-password"
        />
      </label>
      {state.error && (
        <p className="error" role="alert">
          {state.error}
        </p>
      )}
      <button type="submit" disabled={pending}>
        {pending ? "Please wait…" : buttonLabel}
      </button>
    </form>
  );
}
