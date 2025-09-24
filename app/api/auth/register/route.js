'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data?.error || 'Registration failed');
    } else {
      // redirect after success
      window.location.href = '/dashboard';
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" required placeholder="Email" />
      <input type="password" name="password" required placeholder="Password" />
      <button type="submit">Register</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
