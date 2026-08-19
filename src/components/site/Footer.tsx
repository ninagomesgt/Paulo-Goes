import Link from "next/link";

const whatsapp =
  "https://wa.me/5521999999999";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-semibold text-[#f5f2ed]">
              Paulo Goes
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-brand">
              Concept Hair
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Cortes e mechas que valorizam sua beleza sem perder a
              naturalidade.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-500">
              <li>
                <Link href="/" className="hover:text-brand">Início</Link>
              </li>
              <li>
                <Link href="/#sobre" className="hover:text-brand">Paulo Goes</Link>
              </li>
              <li>
                <Link href="/#servicos" className="hover:text-brand">Serviços</Link>
              </li>
              <li>
                <Link href="/#portfolio" className="hover:text-brand">Portfólio</Link>
              </li>
              <li>
                <Link href="/agendar" className="hover:text-brand">Agendar</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Contato
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-500">
              <li>
                <a
                  href="https://instagram.com/paulogoes__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  @paulogoes__
                </a>
              </li>
              <li>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link href="/#contato" className="hover:text-brand">
                  Norte Shopping — DOM Offices
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800/60 pt-6 text-xs text-zinc-600">
          © {new Date().getFullYear()} Paulo Goes Concept Hair — Rio de
          Janeiro/RJ. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}