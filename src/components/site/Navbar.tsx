import Link from "next/link";

const links = [
  { href: "/", label: "Início" },
  { href: "/#sobre", label: "Paulo Goes" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#portfolio", label: "Portfólio" },
  { href: "/#depoimentos", label: "Avaliações" },
  { href: "/#contato", label: "Contato" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-[#0b0b0b]/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-[#f5f2ed]"
        >
          Paulo Goes
          <span className="ml-2 hidden align-middle text-[10px] font-sans font-normal uppercase tracking-[0.3em] text-brand sm:inline">
            Concept Hair
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-zinc-400 transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/agendar"
          className="rounded-full border border-brand/60 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-brand transition-colors hover:bg-brand hover:text-[#0b0b0b]"
        >
          Agendar
        </Link>
      </nav>
    </header>
  );
}