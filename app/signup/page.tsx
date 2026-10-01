import Link from "next/link";
import AuthForm from "../_lib/AuthForm";
import { signUp } from "../login/actions";

export default function SignupPage() {
  return (
    <main>
      <h1>Create an account</h1>
      <AuthForm action={signUp} buttonLabel="Sign up" />
      <p>
        Already have an account? <Link href="/login">Log in</Link>
      </p>
    </main>
  );
}
