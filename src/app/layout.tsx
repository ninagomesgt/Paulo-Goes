import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Paulo Goes — Portfólio & Agenda SaaS",
    template: "%s | Paulo Goes",
  },
  description:
    "Portfólio de Paulo Goes e plataforma SaaS de agendamento online de horários.",
};

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {props.children}
      </body>
    </html>
  );
}