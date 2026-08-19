import Image from "next/image";
import Link from "next/link";

const especialidades = [
  {
    title: "Cortes",
    description:
      "Cortes personalizados considerando formato do rosto, textura, movimento e estilo da cliente.",
    image: "/projetos/projeto-1.jpg",
  },
  {
    title: "Mechas",
    description:
      "Iluminação personalizada buscando naturalidade, dimensão e harmonia.",
    image: "/projetos/projeto-2.jpg",
  },
  {
    title: "Loiras",
    description:
      "Técnicas de iluminação e construção de tons personalizados.",
    image: "/projetos/projeto-3.jpg",
  },
  {
    title: "Morenas iluminadas",
    description:
      "Iluminação estratégica preservando profundidade e naturalidade.",
    image: "/projetos/projeto-4.jpg",
  },
];

const portfolio = [
  { image: "/projetos/projeto-1.jpg", service: "Corte", ratio: "aspect-[3/4]" },
  { image: "/projetos/projeto-2.jpg", service: "Mechas", ratio: "aspect-square" },
  { image: "/projetos/projeto-3.jpg", service: "Loiras", ratio: "aspect-[3/4]" },
  { image: "/projetos/projeto-4.jpg", service: "Morena iluminada", ratio: "aspect-[4/5]" },
  { image: "/projetos/projeto-5.jpg", service: "Corte", ratio: "aspect-[3/4]" },
  { image: "/projetos/projeto-6.jpg", service: "Mechas", ratio: "aspect-square" },
  { image: "/projetos/projeto-7.jpg", service: "Transformação", ratio: "aspect-[3/4]" },
  { image: "/projetos/projeto-8.jpg", service: "Corte", ratio: "aspect-[4/5]" },
];

const servicos = [
  {
    name: "Corte",
    duration: "60 min",
    description:
      "Análise personalizada considerando formato do rosto, textura dos fios e estilo pessoal.",
  },
  {
    name: "Mechas",
    duration: "180 min",
    description:
      "Iluminação personalizada buscando naturalidade, dimensão e harmonia.",
  },
  {
    name: "Loiras",
    duration: "180 min",
    description:
      "Técnicas de iluminação e construção de tons personalizados.",
  },
  {
    name: "Morena iluminada",
    duration: "180 min",
    description:
      "Iluminação estratégica preservando profundidade e naturalidade.",
  },
  {
    name: "Avaliação",
    duration: "30 min",
    description:
      "Análise completa do fio, rosto e objetivo antes de qualquer procedimento.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <h2
      className={`font-serif text-3xl font-medium tracking-tight text-[#f5f2ed] sm:text-5xl ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(183,154,107,0.12),transparent)]"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pt-24">
          <div className="text-center lg:text-left">
            <Eyebrow>Paulo Goes — Concept Hair</Eyebrow>
            <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-[#f5f2ed] sm:text-6xl lg:text-7xl">
              Beleza que respeita{" "}
              <span className="italic text-brand">quem você é.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg lg:mx-0">
              Cortes e mechas que valorizam sua beleza sem perder a
              naturalidade.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/agendar"
                className="w-full rounded-full bg-brand px-8 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#0b0b0b] transition-opacity hover:opacity-90 sm:w-auto"
              >
                Agendar horário
              </Link>
              <Link
                href="#portfolio"
                className="w-full rounded-full border border-zinc-700 px-8 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-zinc-300 transition-colors hover:border-brand hover:text-brand sm:w-auto"
              >
                Conhecer meu trabalho
              </Link>
            </div>
            <p className="mt-10 text-xs uppercase tracking-[0.3em] text-zinc-500">
              Norte Shopping — DOM Offices · Rio de Janeiro
            </p>
          </div>

          <div className="relative mx-auto w-64 sm:w-80 lg:w-full lg:max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-brand/25 via-transparent to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-brand/30">
              <Image
                src="/paulo.png"
                alt="Paulo Goes — cabeleireiro"
                width={645}
                height={851}
                priority
                className="h-auto w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent"
              />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="font-serif text-lg text-[#f5f2ed]">Paulo Goes</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand">
                  Concept Hair — RJ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ESPECIALIDADES ============ */}
      <section id="especialidades" className="border-t border-zinc-800/60 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Especialidades</Eyebrow>
            <SectionTitle>
              Cada fio tem uma história. <span className="italic text-brand">A gente ouve.</span>
            </SectionTitle>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {especialidades.map((item) => (
              <Link
                key={item.title}
                href="/agendar"
                className="group relative overflow-hidden rounded-2xl border border-zinc-800/80"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-serif text-2xl font-medium text-[#f5f2ed]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PORTFÓLIO ============ */}
      <section id="portfolio" className="border-t border-zinc-800/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Portfólio</Eyebrow>
              <SectionTitle>Transformações reais.</SectionTitle>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
              Trabalhos e resultados de clientes reais atendidos no salão.
            </p>
          </div>

          <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
            {portfolio.map((item, index) => (
              <Link
                key={item.image + index}
                href="/agendar"
                className={`group relative block overflow-hidden rounded-2xl border border-zinc-800/80 ${item.ratio}`}
              >
                <Image
                  src={item.image}
                  alt={item.service}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-[0.25em] text-brand">
                    {item.service}
                  </p>
                  <p className="mt-1 text-xs text-zinc-300">
                    Quero um resultado assim
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SOBRE ============ */}
      <section id="sobre" className="border-t border-zinc-800/60 bg-black">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/20 via-transparent to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-brand/30">
              <Image
                src="/paulo.png"
                alt="Paulo Goes"
                width={645}
                height={851}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <Eyebrow>Sobre Paulo</Eyebrow>
            <SectionTitle>Muito além do corte.</SectionTitle>
            <p className="mt-6 leading-relaxed text-zinc-400">
              Para Paulo Goes, atender vai além de técnica: é entender quem está
              na cadeira. Antes de qualquer tesoura, ele analisa rosto, estilo,
              rotina, textura e o objetivo de cada cliente.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              Cada atendimento é pensado para realçar a naturalidade — nunca
              para moldar alguém em outra pessoa.
            </p>
            <blockquote className="mt-8 border-l-2 border-brand pl-5 font-serif text-lg italic leading-relaxed text-[#f5f2ed]">
              “O objetivo não é transformar você em outra pessoa. É encontrar a
              melhor versão da sua própria beleza.”
            </blockquote>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://instagram.com/paulogoes__"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brand/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand transition-colors hover:bg-brand hover:text-[#0b0b0b]"
              >
                @paulogoes__
              </a>
              <Link
                href="/agendar"
                className="rounded-full border border-zinc-700 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-300 transition-colors hover:border-brand hover:text-brand"
              >
                Agendar avaliação
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVIÇOS ============ */}
      <section id="servicos" className="border-t border-zinc-800/60">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Serviços</Eyebrow>
            <SectionTitle>O que vamos fazer?</SectionTitle>
          </div>

          <div className="divide-y divide-zinc-800/70 border-y border-zinc-800/70">
            {servicos.map((service) => (
              <div
                key={service.name}
                className="group flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="max-w-xl">
                  <div className="flex items-baseline gap-4">
                    <h3 className="font-serif text-2xl font-medium text-[#f5f2ed]">
                      {service.name}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-brand">
                      {service.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {service.description}
                  </p>
                </div>
                <Link
                  href="/agendar"
                  className="inline-flex items-center gap-2 self-start rounded-full border border-zinc-700 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-300 transition-colors hover:border-brand hover:text-brand sm:self-auto"
                >
                  Agendar
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-zinc-600">
            Valores dos procedimentos informados durante o agendamento ou por
            WhatsApp.
          </p>
        </div>
      </section>

      {/* ============ DEPOIMENTOS ============ */}
      <section id="depoimentos" className="border-t border-zinc-800/60 bg-black">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <Eyebrow>Depoimentos</Eyebrow>
          <SectionTitle align="center">O que elas dizem.</SectionTitle>
          <div className="mx-auto mt-12 max-w-md rounded-2xl border border-zinc-800/80 px-8 py-10">
            <svg
              className="mx-auto h-8 w-8 text-brand"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.5 19h4.6L12 14.4V5H4v9h4.1L6 17.2V19H4.5zm9 0h4.6L21 14.4V5h-8v9h4.1L15 17.2V19h-1.5z" />
            </svg>
            <p className="mt-6 font-serif text-lg italic leading-relaxed text-zinc-400">
              Em breve, você verá aqui avaliações reais de clientes atendidos
              pelo Paulo.
            </p>
          </div>
        </div>
      </section>

      {/* ============ LOCALIZAÇÃO ============ */}
      <section id="contato" className="border-t border-zinc-800/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Localização</Eyebrow>
              <SectionTitle>Onde me encontrar.</SectionTitle>
              <p className="mt-6 text-lg font-medium text-[#f5f2ed]">
                Paulo Goes Concept Hair
              </p>
              <p className="mt-1 text-zinc-400">
                Norte Shopping — DOM Offices
                <br />
                Rio de Janeiro — RJ
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Norte+Shopping+Rio+de+Janeiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#0b0b0b] transition-opacity hover:opacity-90"
                >
                  Abrir no mapa
                </a>
                <a
                  href="https://wa.me/5521999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-brand/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand transition-colors hover:bg-brand hover:text-[#0b0b0b]"
                >
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/paulogoes__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-zinc-700 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-300 transition-colors hover:border-brand hover:text-brand"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-800/80">
              <iframe
                title="Mapa — Norte Shopping Rio de Janeiro"
                src="https://www.google.com/maps?q=Norte+Shopping+Rio+de+Janeiro&output=embed"
                className="h-[320px] w-full grayscale-[0.5] invert-[0.9] contrast-[0.9]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ INSTAGRAM ============ */}
      <section id="instagram" className="border-t border-zinc-800/60 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <Eyebrow>Instagram</Eyebrow>
          <SectionTitle align="center">
            Acompanhe <span className="italic text-brand">@paulogoes__</span>
          </SectionTitle>
          <div className="mt-12 grid grid-cols-4 gap-2 sm:gap-3">
            {portfolio.map((item, index) => (
              <a
                key={item.image + index}
                href="https://instagram.com/paulogoes__"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-lg border border-zinc-800/80"
              >
                <Image
                  src={item.image}
                  alt={`Trabalho de ${item.service}`}
                  fill
                  sizes="(min-width: 1024px) 16vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40"
                />
              </a>
            ))}
          </div>
          <a
            href="https://instagram.com/paulogoes__"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-brand px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#0b0b0b] transition-opacity hover:opacity-90"
          >
            Seguir no Instagram
          </a>
        </div>
      </section>
    </>
  );
}