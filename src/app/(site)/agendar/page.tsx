import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Agendar horário",
  description:
    "Reserve seu horário com o Paulo Goes: sessões, design, desenvolvimento e consultoria.",
};

export default function AgendarPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-brand"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Voltar ao início
      </Link>

      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Agendar horário
        </h1>
        <p className="mt-3 text-zinc-400">
          Preencha os dados abaixo e escolha o melhor dia e horário. Você
          receberá a confirmação em breve.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
        <BookingForm />
      </div>
    </section>
  );
}