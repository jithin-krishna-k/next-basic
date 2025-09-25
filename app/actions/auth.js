"use server";

import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "../lib/prisma";
import { signJwt } from "../lib/auth";

export async function register(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return { error: "User already exists" };
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashed,
    },
  });

  const token = signJwt({ email: user.email });
  const cookieStore = await cookies();
  cookieStore.set("session-token", token, { httpOnly: true });

  redirect("/dashboard");
}

export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return { error: "User not found" };

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return { error: "Invalid password" };

  const token = signJwt({ email: user.email });
  const cookieStore = await cookies();
  cookieStore.set("session-token", token, { httpOnly: true });

  redirect("/dashboard");
}

export async function logout() {
  const cookieStore = await cookies();
  
  // Remove the cookie
  cookieStore.set("session-token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  redirect("/auth/login"); // redirect user to login or home page
}