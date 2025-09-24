// lib/session.js
import { cookies } from 'next/headers';
import { verifyJwt } from './auth';

export async function getSession() {
  const cookieStore = cookies();
  const token = cookieStore.get('session-token')?.value;
  if (!token) return null;
  return verifyJwt(token);
}
