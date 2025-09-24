"use client";

import { register } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";

export default function RegisterPage() {
  const [state, formAction] = useActionState(register, { error: null });

  return (
    <main style={{ maxWidth: 400, margin: "100px auto" }}>
      <h1>Register</h1>

      <form
        action={formAction}
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <Button type="submit">Register</Button>

        {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
      </form>

      <p style={{ marginTop: 20 }}>
        Already have an account? <a href="/auth/login">Login</a>
      </p>
    </main>
  );
}
