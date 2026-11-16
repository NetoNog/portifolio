"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WhatsappIcon } from "@/components/brand-icons";
import { navegacao, perfil } from "@/lib/data";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="relative z-[100] flex items-center justify-between gap-4">
      <Link
        href="/"
        className="flex min-h-11 items-center gap-3"
        aria-label={`${perfil.nome}, página inicial`}
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/60 bg-primary/10 text-base font-bold text-white shadow-[0_0_12px_color-mix(in_srgb,var(--primary)_35%,transparent)]">
          JN
        </span>
        <span className="hidden text-lg font-semibold tracking-tight text-white min-[360px]:inline md:text-xl">
          {perfil.nome}
        </span>
      </Link>

      {/* Desktop: links no topo. No celular a navegação fica na barra inferior. */}
      <nav aria-label="Navegação principal" className="hidden md:block">
        <ul className="flex gap-10">
          {navegacao.map((item) => {
            const ativo = pathname === item.href;
            return (
              <li key={item.href} className="relative py-1">
                <Link
                  href={item.href}
                  aria-current={ativo ? "page" : undefined}
                  className={`text-xl transition-colors ${ativo ? "text-white" : "text-zinc-400 hover:text-zinc-200"}`}
                >
                  {item.rotulo}
                </Link>
                {ativo && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Celular: atalho direto para o contato, sempre visível. */}
      <a
        href={perfil.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors active:bg-emerald-400 md:hidden"
      >
        <WhatsappIcon className="size-4" />
        Orçamento
      </a>
    </header>
  );
}
