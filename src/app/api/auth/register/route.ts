import { NextResponse } from "next/server";
import { establishSession, hashPasswordForUser, toPublicUser } from "@/lib/auth";
import { createUser, findUserByEmail } from "@/lib/db";

export async function POST(request: Request) {
  let body: { name?: string; email?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo inválido." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim().toLowerCase() ?? "";
  const password = body.password ?? "";

  if (!name || name.length < 2) {
    return NextResponse.json(
      { error: "Informe um nome válido." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Informe um e-mail válido." },
      { status: 400 }
    );
  }
  if (password.length < 6) {
    return NextResponse.json(
      { error: "A senha precisa de pelo menos 6 caracteres." },
      { status: 400 }
    );
  }
  if (findUserByEmail(email)) {
    return NextResponse.json(
      { error: "Este e-mail já está cadastrado." },
      { status: 409 }
    );
  }

  const user = createUser({
    name,
    email,
    passwordHash: hashPasswordForUser(password),
  });

  await establishSession(user.id);

  return NextResponse.json({ user: toPublicUser(user) }, { status: 201 });
}