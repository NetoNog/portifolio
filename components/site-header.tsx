"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navegacao, perfil } from "@/lib/data";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="relative z-[100] flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3" aria-label={`${perfil.nome}, página inicial`}>
        <span className="flex size-10 items-center justify-center rounded-xl border border-primary/60 bg-primary/10 text-base font-bold text-white shadow-[0_0_12px_color-mix(in_srgb,var(--primary)_35%,transparent)]">
          JN
        </span>
        <span className="text-lg font-semibold tracking-tight text-white md:text-xl">{perfil.nome}</span>
      </Link>

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

      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="menu-mobile"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        className="relative z-[110] flex size-10 items-center justify-center text-white md:hidden"
      >
        {menuOpen ? <X className="size-7" /> : <Menu className="size-7" />}
      </button>

      <div
        id="menu-mobile"
        className={`fixed inset-0 z-[90] flex flex-col items-center justify-center bg-background transition-all duration-300 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-8 text-center">
          {navegacao.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-3xl font-bold ${pathname === item.href ? "text-primary" : "text-white"}`}
              >
                {item.rotulo}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
