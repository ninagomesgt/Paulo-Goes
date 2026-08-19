"use client";

import { useState, type FormEvent } from "react";

const SERVICES = [
  "Sessão de fotos",
  "Design de marca",
  "Desenvolvimento web",
  "Consultoria",
  "Outro",
];

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

function todayMin(): string {
  return new Date().toISOString().split("T")[0];
}

const inputClass =
  "w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-amber-500/20";

export default function BookingForm() {
  const [form, setForm] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Não foi possível agendar. Tente novamente.");
        setLoading(false);
        return;
      }
      setDone(true);
    } catch {
      setError("Erro de conexão. Tente novamente.");
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white">
          <svg
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-zinc-50">
          Pedido enviado!
        </h2>
        <p className="mt-2 text-zinc-400">
          Seu agendamento para{" "}
          <strong className="text-brand">{form.date.split("-").reverse().join("/")}</strong> às{" "}
          <strong className="text-brand">{form.time}</strong> foi registrado. Você receberá a
          confirmação em breve.
        </p>
        <button
          onClick={() => {
            setDone(false);
            setForm({
              clientName: "",
              clientEmail: "",
              clientPhone: "",
              service: "",
              date: "",
              time: "",
              notes: "",
            });
          }}
          className="mt-6 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-brand-foreground hover:opacity-90"
        >
          Agendar outro horário
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="clientName" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Nome completo
          </label>
          <input
            id="clientName"
            required
            value={form.clientName}
            onChange={(e) => update("clientName", e.target.value)}
            className={inputClass}
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="clientPhone" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Telefone / WhatsApp
          </label>
          <input
            id="clientPhone"
            required
            value={form.clientPhone}
            onChange={(e) => update("clientPhone", e.target.value)}
            className={inputClass}
            placeholder="(11) 99999-9999"
          />
        </div>
      </div>

      <div>
        <label htmlFor="clientEmail" className="mb-1.5 block text-sm font-medium text-zinc-300">
          E-mail
        </label>
        <input
          id="clientEmail"
          type="email"
          required
          value={form.clientEmail}
          onChange={(e) => update("clientEmail", e.target.value)}
          className={inputClass}
          placeholder="voce@email.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Serviço
        </label>
        <select
          id="service"
          required
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          className={inputClass}
        >
          <option value="">Selecione um serviço</option>
          {SERVICES.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Data
          </label>
          <input
            id="date"
            type="date"
            required
            min={todayMin()}
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="time" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Horário
          </label>
          <select
            id="time"
            required
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
            className={inputClass}
          >
            <option value="">Selecione um horário</option>
            {TIME_SLOTS.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Observações <span className="font-normal text-zinc-500">(opcional)</span>
        </label>
        <textarea
          id="notes"
          rows={3}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          className={`${inputClass} resize-none`}
          placeholder="Alguma informação relevante..."
        />
      </div>

      {error && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Confirmar agendamento"}
      </button>
    </form>
  );
}