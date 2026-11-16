"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderGit2, House, Layers, UserRound, type LucideIcon } from "lucide-react";
import { navegacao } from "@/lib/data";

const ICONES: Record<string, LucideIcon> = {
  "/": House,
  "/projetos": FolderGit2,
  "/tecnologias": Layers,
  "/sobre": UserRound,
};

/** Navegação principal no celular: fixa embaixo, ao alcance do polegar. */
export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação principal"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-zinc-800 bg-background/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg md:hidden"
    >
      <ul className="grid grid-cols-4">
        {navegacao.map((item) => {
          const ativo = pathname === item.href;
          const Icon = ICONES[item.href] ?? House;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={ativo ? "page" : undefined}
                className={`relative flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-medium transition-colors active:bg-white/5 ${
                  ativo ? "text-primary" : "text-zinc-400"
                }`}
              >
                {ativo && (
                  <span className="absolute inset-x-6 top-0 h-[2px] rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                )}
                <Icon className="size-5" aria-hidden />
                {item.rotulo}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
