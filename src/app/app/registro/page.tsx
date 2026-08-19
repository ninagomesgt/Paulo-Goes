import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AuthForm from "@/components/app/AuthForm";
import { getSessionUser } from "@/lib/auth";

export const metadata: Metadata = { title: "Criar conta" };

export default async function RegistroPage() {
  const user = await getSessionUser();
  if (user) {
    redirect("/app/dashboard");
  }

  return (
    <section className="mx-auto flex w-full max-w-md flex-col px-4 py-16 sm:px-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Crie sua conta
        </h1>
        <p className="mt-2 text-zinc-600">
          Comece a gerenciar seus agendamentos em segundos.
        </p>
      </div>
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <AuthForm mode="register" />
      </div>
    </section>
  );
}