
import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';


export async function GET() {
  const users = await prisma.user.findMany({
    select: { id: true, email: true },
  });
  return NextResponse.json(users);
}

export async function POST(req) {
  const body = await req.json();
  const user = await prisma.user.create({
    data: { name: body.name, email: body.email },
  });
  return NextResponse.json(user, { status: 201 });
}
