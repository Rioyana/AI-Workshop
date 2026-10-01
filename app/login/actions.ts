"use server";

import { redirect } from "next/navigation";
import { createClient } from "../_lib/supabase-server";

export type AuthState = { error: string | null };

function readForm(formData: FormData) {
  return {
    email: String(formData.get("email") ?? "").trim(),
    password: String(formData.get("password") ?? ""),
  };
}

export async function logIn(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const { email, password } = readForm(formData);
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: "Wrong email or password. Please try again." };
  }
  redirect("/tasks");
}

export async function signUp(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const { email, password } = readForm(formData);
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return { error: error.message };
  }
  if (!data.session) {
    return { error: "Account created, but you are not signed in yet. Try logging in." };
  }
  redirect("/tasks");
}

export async function logOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
