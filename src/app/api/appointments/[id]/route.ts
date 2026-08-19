import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { deleteAppointment, updateAppointment } from "@/lib/db";
import type { AppointmentStatus } from "@/lib/types";

const STATUSES: AppointmentStatus[] = ["pending", "confirmed", "cancelled"];

export async function PATCH(
  request: Request,
  ctx: RouteContext<"/api/appointments/[id]">
) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }

  const { id } = await ctx.params;

  let body: { status?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo inválido." }, { status: 400 });
  }

  if (!STATUSES.includes(body.status as AppointmentStatus)) {
    return NextResponse.json(
      { error: "Status inválido." },
      { status: 400 }
    );
  }

  const appointment = updateAppointment(id, {
    status: body.status as AppointmentStatus,
  });
  if (!appointment) {
    return NextResponse.json(
      { error: "Agendamento não encontrado." },
      { status: 404 }
    );
  }

  return NextResponse.json({ appointment });
}

export async function DELETE(
  _request: Request,
  ctx: RouteContext<"/api/appointments/[id]">
) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }

  const { id } = await ctx.params;
  const deleted = deleteAppointment(id);
  if (!deleted) {
    return NextResponse.json(
      { error: "Agendamento não encontrado." },
      { status: 404 }
    );
  }

  return NextResponse.json({ ok: true });
}