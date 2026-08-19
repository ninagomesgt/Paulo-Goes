import Link from "next/link";

const projects = [
  {
    title: "E-commerce Nômade",
    category: "Desenvolvimento Web",
    description:
      "Plataforma de loja virtual com checkout integrado e painel do vendedor.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    title: "App de Delivery",
    category: "Mobile",
    description:
      "Aplicativo de pedidos com rastreio em tempo real e pagamento no app.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Identidade Visual Aurora",
    category: "Design",
    description:
      "Marca completa: logotipo, paleta, tipografia e guia de aplicação.",
    gradient: "from-rose-500 to-orange-500",
  },
  {
    title: "Dashboard Fintech",
    category: "Desenvolvimento Web",
    description:
      "Painel analítico com métricas em tempo real e relatórios exportáveis.",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Landing Inkwell",
    category: "Design",
    description:
      "Landing page de alta conversão com copywriting e SEO on-page.",
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    title: "Sistema de Agendamentos",
    category: "SaaS",
    description:
      "Plataforma SaaS de reservas de horários, com dashboard e confirmações.",
    gradient: "from-amber-500 to-yellow-500",
  },
];

const features = [
  {
    title: "Agendamento online",
    description:
      "Clientes escolhem serviço, data e horário direto na página, sem precisar de conta.",
  },
  {
    title: "Dashboard completo",
    description:
      "Painel privado com todos os horários, busca por status e ações rápidas.",
  },
  {
    title: "Gestão de status",
    description:
      "Confirme, cancele ou remova agendamentos com um clique.",
  },
  {
    title: "Pronto para usar",
    description:
      "Cadastro em segundos, sem configuração de infraestrutura ou banco externo.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(79,70,229,0.12),transparent)]"
        />
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-24 text-center sm:px-6 sm:pt-32">
          <p className="mb-4 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-brand">
            Portfólio & Agenda SaaS
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
            Paulo Goes — ideias que viram{" "}
            <span className="text-brand">produtos</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600">
            Desenvolvedor e criativo criando experiências digitais memoráveis.
            Conheça meu trabalho e agende um horário direto pela plataforma.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projetos"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Ver projetos
            </Link>
            <Link
              href="/agendar"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900"
            >
              Agendar horário
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
              Sobre mim
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Transformo problemas em soluções digitais
            </h2>
            <p className="mt-5 leading-relaxed text-zinc-600">
              Há mais de 8 anos ajudo marcas e empreendedores a criar produtos
              digitais que conectam com o público. Unindo design e engenharia,
              entrego soluções completas — do conceito à implantação.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["8+", "anos de experiência"],
                ["120+", "projetos entregues"],
                ["50+", "clientes atendidos"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-zinc-200 bg-white p-4 text-center"
                >
                  <p className="text-2xl font-bold text-brand">{value}</p>
                  <p className="mt-1 text-xs text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-2xl font-bold text-white">
                PG
              </div>
              <div>
                <p className="text-lg font-semibold text-zinc-900">Paulo Goes</p>
                <p className="text-sm text-zinc-500">
                  Desenvolvedor & Designer
                </p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-zinc-700">
              {[
                "Design de interfaces e experiência (UI/UX)",
                "Desenvolvimento web full-stack",
                "Design de identidade de marca",
                "Consultoria em produtos digitais",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
            Portfólio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Projetos em destaque
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-shadow hover:shadow-lg"
            >
              <div
                className={`flex h-40 items-end bg-gradient-to-br ${project.gradient} p-4`}
              >
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Agenda SaaS */}
      <section id="agenda" className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
                Agenda SaaS
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Agende horários de forma simples e profissional
              </h2>
              <p className="mt-5 leading-relaxed text-zinc-600">
                A plataforma de agendamentos do Paulo Goes permite que clientes
                marquem horários em segundos. Você acompanha tudo em um painel
                privado: confirme, cancele e gerencie sua agenda em um só lugar.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/agendar"
                  className="rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Agendar agora
                </Link>
                <Link
                  href="/app/dashboard"
                  className="rounded-full border border-zinc-300 px-6 py-3 text-center text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900"
                >
                  Acessar painel
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6"
                >
                  <h3 className="font-semibold text-zinc-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
              Contato
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Vamos conversar?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-600">
              Tem um projeto em mente ou quer reservar um horário? Fale comigo
              pelos canais abaixo ou agende direto na plataforma.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a
              href="mailto:contato@paulogoes.com.br"
              className="rounded-2xl border border-zinc-200 p-6 text-center transition-colors hover:border-brand"
            >
              <p className="font-semibold text-zinc-900">E-mail</p>
              <p className="mt-1 text-sm text-zinc-500">
                contato@paulogoes.com.br
              </p>
            </a>
            <a
              href="tel:+5511999999999"
              className="rounded-2xl border border-zinc-200 p-6 text-center transition-colors hover:border-brand"
            >
              <p className="font-semibold text-zinc-900">WhatsApp</p>
              <p className="mt-1 text-sm text-zinc-500">(11) 99999-9999</p>
            </a>
            <Link
              href="/agendar"
              className="rounded-2xl border border-zinc-200 p-6 text-center transition-colors hover:border-brand"
            >
              <p className="font-semibold text-zinc-900">Agenda</p>
              <p className="mt-1 text-sm text-zinc-500">
                Reservar horário online
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}