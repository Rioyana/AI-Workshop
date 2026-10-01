import Link from "next/link";
import AuthForm from "../_lib/AuthForm";
import { logIn } from "./actions";

export default function LoginPage() {
  return (
    <main>
      <h1>Log in</h1>
      <AuthForm action={logIn} buttonLabel="Log in" />
      <p>
        New here? <Link href="/signup">Create an account</Link>
      </p>
    </main>
  );
}
