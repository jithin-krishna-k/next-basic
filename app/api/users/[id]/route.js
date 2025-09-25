import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req , { params }) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });
  if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(user);
}

export async function PUT(req, { params }) {
  const body = await req.json();
  const updated = await prisma.user.update({
    where: { id: params.id },
    data: { name: body.name, email: body.email },
  });
  return NextResponse.json(updated);
}

export async function DELETE(req, { params }) {
  await prisma.user.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true }, { status: 204 });
}
