"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Appointment, AppointmentStatus } from "@/lib/types";

type Filter = "all" | AppointmentStatus;

const statusLabel: Record<AppointmentStatus, string> = {
  pending: "Pendente",
  confirmed: "Confirmado",
  cancelled: "Cancelado",
};

const statusClass: Record<AppointmentStatus, string> = {
  pending: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  confirmed: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  cancelled: "bg-red-500/10 text-red-300 border-red-500/30",
};

function formatDate(date: string): string {
  const [y, m, d] = date.split("-");
  return `${d}/${m}/${y}`;
}

export default function AppointmentList({
  initial,
}: {
  initial: Appointment[];
}) {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState("");

  const counts = useMemo(() => {
    const c = {
      all: initial.length,
      pending: 0,
      confirmed: 0,
      cancelled: 0,
    } as Record<Filter, number>;
    for (const a of initial) {
      c[a.status] += 1;
    }
    return c;
  }, [initial]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return initial.filter((a) => {
      const matchesFilter = filter === "all" || a.status === filter;
      const matchesQuery =
        !q ||
        a.clientName.toLowerCase().includes(q) ||
        a.clientEmail.toLowerCase().includes(q) ||
        a.service.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [initial, filter, query]);

  async function setStatus(id: string, status: AppointmentStatus) {
    setBusy(id);
    setError("");
    try {
      const res = await fetch(`/api/appointments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? "Erro ao atualizar.");
      }
      router.refresh();
    } catch {
      setError("Erro de conexão.");
    } finally {
      setBusy(null);
    }
  }

  async function remove(id: string) {
    setBusy(id);
    setError("");
    try {
      const res = await fetch(`/api/appointments/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? "Erro ao excluir.");
      }
      router.refresh();
    } catch {
      setError("Erro de conexão.");
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="space-y-6">
      {/* Resumo */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {(
          [
            ["all", "Total", "bg-zinc-900"],
            ["pending", "Pendentes", "bg-amber-500"],
            ["confirmed", "Confirmados", "bg-emerald-500"],
            ["cancelled", "Cancelados", "bg-red-500"],
          ] as [Filter, string, string][]
        ).map(([key, label, color]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`rounded-2xl border p-4 text-left transition-colors ${
              filter === key
                ? "border-brand ring-2 ring-indigo-100"
                : "border-zinc-200 hover:border-zinc-300"
            }`}
          >
            <p className={`inline-flex h-2.5 w-2.5 rounded-full ${color}`} />
            <p className="mt-2 text-2xl font-bold text-zinc-900">
              {counts[key]}
            </p>
            <p className="text-sm text-zinc-500">{label}</p>
          </button>
        ))}
      </div>

      {error && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      {/* Filtros */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {(
            [
              ["all", "Todos"],
              ["pending", "Pendentes"],
              ["confirmed", "Confirmados"],
              ["cancelled", "Cancelados"],
            ] as [Filter, string][]
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === key
                  ? "bg-brand text-white"
                  : "border border-zinc-300 text-zinc-600 hover:border-zinc-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por nome, e-mail ou serviço"
          className="w-full rounded-full border border-zinc-300 px-4 py-2 text-sm outline-none transition-colors focus:border-brand sm:w-72"
        />
      </div>

      {/* Lista */}
      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-zinc-300 p-12 text-center">
          <p className="text-zinc-500">
            {initial.length === 0
              ? "Nenhum agendamento ainda. Compartilhe a página /agendar para receber reservas."
              : "Nenhum agendamento corresponde ao filtro."}
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {filtered.map((appointment) => (
            <li
              key={appointment.id}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-zinc-900">
                    {appointment.clientName}
                  </p>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusClass[appointment.status]}`}
                  >
                    {statusLabel[appointment.status]}
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-500">
                  {formatDate(appointment.date)} às {appointment.time} ·{" "}
                  {appointment.service}
                </p>
                <p className="mt-0.5 truncate text-sm text-zinc-400">
                  {appointment.clientEmail}
                  {appointment.clientPhone ? ` · ${appointment.clientPhone}` : ""}
                </p>
                {appointment.notes && (
                  <p className="mt-1 text-sm text-zinc-500 italic">
                    “{appointment.notes}”
                  </p>
                )}
              </div>

              <div className="flex shrink-0 items-center gap-2">
                {appointment.status !== "confirmed" && (
                  <button
                    onClick={() => setStatus(appointment.id, "confirmed")}
                    disabled={busy === appointment.id}
                    className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                  >
                    Confirmar
                  </button>
                )}
                {appointment.status !== "cancelled" && (
                  <button
                    onClick={() => setStatus(appointment.id, "cancelled")}
                    disabled={busy === appointment.id}
                    className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-semibold text-zinc-600 transition-colors hover:border-zinc-400 disabled:opacity-50"
                  >
                    Cancelar
                  </button>
                )}
                <button
                  onClick={() => remove(appointment.id)}
                  disabled={busy === appointment.id}
                  className="rounded-full px-3 py-2 text-xs font-semibold text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}