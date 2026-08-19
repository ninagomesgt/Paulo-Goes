import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Paulo Goes. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4 text-sm text-zinc-400">
          <Link href="/agendar" className="hover:text-brand">
            Agendar horário
          </Link>
          <Link href="/app/dashboard" className="hover:text-brand">
            Painel
          </Link>
        </div>
      </div>
    </footer>
  );
}