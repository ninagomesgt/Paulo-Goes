import Link from "next/link";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#agenda", label: "Agenda SaaS" },
  { href: "/#contato", label: "Contato" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight text-zinc-50">
          Paulo<span className="text-brand">Goes</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/agendar"
            className="hidden rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-brand hover:text-brand sm:block"
          >
            Agendar
          </Link>
          <Link
            href="/app/dashboard"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            Entrar
          </Link>
        </div>
      </nav>
    </header>
  );
}