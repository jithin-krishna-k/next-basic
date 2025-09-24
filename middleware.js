// middleware.js
import { NextResponse } from 'next/server';
import { verifyJwt } from './app/lib/auth';

export function middleware(req) {
  const token = req.cookies.get('session-token')?.value;

  const protectedRoutes = ['/dashboard', '/profile', '/settings'];
  const isProtected = protectedRoutes.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (isProtected) {
    if (!token) {
      console.log('🚫 No token, redirecting...');
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    const payload = verifyJwt(token);
    if (!payload) {
      console.log('❌ Invalid token, redirecting...');
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    console.log('✅ Authenticated:', payload);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile', '/settings'],
};
