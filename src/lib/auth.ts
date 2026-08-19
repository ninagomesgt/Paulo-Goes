import { scryptSync, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import {
  createSession,
  deleteSession,
  findSessionByToken,
  findUserById,
} from "./db";
import type { PublicUser, User } from "./types";

export const SESSION_COOKIE = "pg_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) {
    return false;
  }
  const candidate = scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, "hex");
  return (
    candidate.length === expected.length && timingSafeEqual(candidate, expected)
  );
}

export function hashPasswordForUser(password: string): string {
  return hashPassword(password);
}

export function checkPassword(password: string, stored: string): boolean {
  return verifyPassword(password, stored);
}

export function toPublicUser(user: User): PublicUser {
  const { passwordHash: _passwordHash, ...publicUser } = user;
  return publicUser;
}

export async function establishSession(userId: string): Promise<void> {
  const session = createSession(userId);
  const store = await cookies();
  store.set(SESSION_COOKIE, session.token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export async function destroySession(): Promise<void> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (token) {
    deleteSession(token);
  }
  store.delete(SESSION_COOKIE);
}

export async function getSessionUser(): Promise<PublicUser | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) {
    return null;
  }
  const session = findSessionByToken(token);
  if (!session) {
    return null;
  }
  const user = findUserById(session.userId);
  return user ? toPublicUser(user) : null;
}

export async function requireUser(): Promise<PublicUser> {
  const user = await getSessionUser();
  if (!user) {
    throw new Error("UNAUTHORIZED");
  }
  return user;
}