export type AppointmentStatus = "pending" | "confirmed" | "cancelled";

export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: string;
}

export interface Session {
  token: string;
  userId: string;
  createdAt: string;
}

export interface Appointment {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  status: AppointmentStatus;
  createdAt: string;
}

export interface Db {
  users: User[];
  sessions: Session[];
  appointments: Appointment[];
}

export type PublicUser = Omit<User, "passwordHash">;
