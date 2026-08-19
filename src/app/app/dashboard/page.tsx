import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { listAppointments } from "@/lib/db";
import AppointmentList from "@/components/dashboard/AppointmentList";

export const metadata: Metadata = { title: "Painel" };

export default async function DashboardPage() {
  const user = await getSessionUser();
  if (!user) {
    redirect("/app/login");
  }

  const appointments = listAppointments();

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-50">
            Olá, {user.name.split(" ")[0]}
          </h1>
          <p className="mt-1 text-zinc-400">
            Gerencie os agendamentos recebidos pela plataforma.
          </p>
        </div>
        <Link
          href="/agendar"
          className="rounded-full bg-brand px-5 py-2.5 text-center text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
        >
          + Novo agendamento
        </Link>
      </div>

      <AppointmentList initial={appointments} />
    </section>
  );
}