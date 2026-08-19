import { NextResponse } from "next/server";
import {
  checkPassword,
  establishSession,
  toPublicUser,
} from "@/lib/auth";
import { findUserByEmail } from "@/lib/db";

export async function POST(request: Request) {
  let body: { email?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo inválido." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase() ?? "";
  const password = body.password ?? "";

  const user = findUserByEmail(email);
  if (!user || !checkPassword(password, user.passwordHash)) {
    return NextResponse.json(
      { error: "E-mail ou senha incorretos." },
      { status: 401 }
    );
  }

  await establishSession(user.id);

  return NextResponse.json({ user: toPublicUser(user) });
}