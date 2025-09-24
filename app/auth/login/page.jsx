'use client';

import { login } from '@/app/actions/auth';
import { useActionState } from 'react';


export default function LoginPage() {
  const [state, formAction] = useActionState(login, { error: null });

  return (
    <main style={{ maxWidth: 400, margin: '100px auto', textAlign: 'center' }}>
      <h1>Login</h1>

      <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          style={{ padding: '10px', fontSize: '16px' }}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          style={{ padding: '10px', fontSize: '16px' }}
        />

        <button
          type="submit"
          style={{ padding: '10px', fontSize: '16px', backgroundColor: '#333', color: 'white' }}
        >
          Login
        </button>

        {state?.error && (
          <p style={{ color: 'red', marginTop: 10 }}>{state.error}</p>
        )}
      </form>

      <p style={{ marginTop: 20 }}>
        Don't have an account? <a href="/auth/register">Register</a>
      </p>
    </main>
  );
}
