import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import {
  createAppointment,
  listAppointments,
} from "@/lib/db";

const SERVICES = [
  "Sessão de fotos",
  "Design de marca",
  "Desenvolvimento web",
  "Consultoria",
  "Outro",
];

export async function GET() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }
  return NextResponse.json({ appointments: listAppointments() });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo inválido." }, { status: 400 });
  }

  const clientName = String(body.clientName ?? "").trim();
  const clientEmail = String(body.clientEmail ?? "").trim();
  const clientPhone = String(body.clientPhone ?? "").trim();
  const service = String(body.service ?? "").trim();
  const date = String(body.date ?? "").trim();
  const time = String(body.time ?? "").trim();
  const notes = String(body.notes ?? "").trim();

  if (clientName.length < 2) {
    return NextResponse.json(
      { error: "Informe seu nome." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail)) {
    return NextResponse.json(
      { error: "Informe um e-mail válido." },
      { status: 400 }
    );
  }
  if (clientPhone.length < 8) {
    return NextResponse.json(
      { error: "Informe um telefone válido." },
      { status: 400 }
    );
  }
  if (!SERVICES.includes(service)) {
    return NextResponse.json(
      { error: "Selecione um serviço." },
      { status: 400 }
    );
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json(
      { error: "Selecione uma data válida." },
      { status: 400 }
    );
  }
  if (!/^\d{2}:\d{2}$/.test(time)) {
    return NextResponse.json(
      { error: "Selecione um horário válido." },
      { status: 400 }
    );
  }

  const appointment = createAppointment({
    clientName,
    clientEmail,
    clientPhone,
    service,
    date,
    time,
    notes,
  });

  return NextResponse.json({ appointment }, { status: 201 });
}