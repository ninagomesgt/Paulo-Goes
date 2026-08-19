import fs from "node:fs";
import path from "node:path";
import { randomBytes, randomUUID } from "node:crypto";
import type { Appointment, Db, Session, User } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "db.json");

const EMPTY_DB: Db = { users: [], sessions: [], appointments: [] };

function ensureDataFile(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify(EMPTY_DB, null, 2), "utf-8");
  }
}

export function readDb(): Db {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(DB_PATH, "utf-8");
    const parsed = JSON.parse(raw) as Partial<Db>;
    return {
      users: parsed.users ?? [],
      sessions: parsed.sessions ?? [],
      appointments: parsed.appointments ?? [],
    };
  } catch {
    return EMPTY_DB;
  }
}

function writeDb(db: Db): void {
  ensureDataFile();
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
}

export function createUser(
  user: Omit<User, "id" | "createdAt">
): User {
  const db = readDb();
  const userRecord: User = {
    ...user,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };
  db.users.push(userRecord);
  writeDb(db);
  return userRecord;
}

export function findUserByEmail(email: string): User | undefined {
  return readDb().users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
}

export function findUserById(id: string): User | undefined {
  return readDb().users.find((u) => u.id === id);
}

export function createSession(userId: string): Session {
  const db = readDb();
  const session: Session = {
    token: randomBytes(32).toString("hex"),
    userId,
    createdAt: new Date().toISOString(),
  };
  db.sessions.push(session);
  writeDb(db);
  return session;
}

export function findSessionByToken(token: string): Session | undefined {
  return readDb().sessions.find((s) => s.token === token);
}

export function deleteSession(token: string): void {
  const db = readDb();
  db.sessions = db.sessions.filter((s) => s.token !== token);
  writeDb(db);
}

export function listAppointments(filter?: {
  status?: string;
}): Appointment[] {
  const db = readDb();
  const items = db.appointments
    .slice()
    .sort((a, b) => (a.date + a.time < b.date + b.time ? 1 : -1));
  if (filter?.status) {
    return items.filter((a) => a.status === filter.status);
  }
  return items;
}

export function createAppointment(
  data: Omit<Appointment, "id" | "status" | "createdAt">
): Appointment {
  const db = readDb();
  const appointment: Appointment = {
    ...data,
    id: randomUUID(),
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  db.appointments.push(appointment);
  writeDb(db);
  return appointment;
}

export function updateAppointment(
  id: string,
  patch: Partial<Pick<Appointment, "status" | "date" | "time" | "service">>
): Appointment | undefined {
  const db = readDb();
  const appointment = db.appointments.find((a) => a.id === id);
  if (!appointment) {
    return undefined;
  }
  Object.assign(appointment, patch);
  writeDb(db);
  return appointment;
}

export function deleteAppointment(id: string): boolean {
  const db = readDb();
  const before = db.appointments.length;
  db.appointments = db.appointments.filter((a) => a.id !== id);
  if (db.appointments.length === before) {
    return false;
  }
  writeDb(db);
  return true;
}
