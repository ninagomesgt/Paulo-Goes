import Link from "next/link";
import LogoutButton from "@/components/app/LogoutButton";

export default function AppLayout(props: LayoutProps<"/app">) {
  return (
    <>
      <header className="border-b border-zinc-800/60 bg-[#0b0b0b]">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-6">
            <Link
              href="/app/dashboard"
              className="font-serif text-lg font-semibold tracking-tight text-[#f5f2ed]"
            >
              Paulo Goes
              <span className="ml-2 hidden align-middle text-[10px] font-sans font-normal uppercase tracking-[0.3em] text-brand sm:inline">
                Concept Hair
              </span>
            </Link>
            <Link
              href="/app/dashboard"
              className="text-xs font-medium uppercase tracking-wider text-zinc-400 hover:text-brand"
            >
              Painel
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden text-sm font-medium text-zinc-500 hover:text-brand sm:block"
            >
              Voltar ao site
            </Link>
            <LogoutButton />
          </div>
        </nav>
      </header>
      <main className="flex-1">{props.children}</main>
    </>
  );
}