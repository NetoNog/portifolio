"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderGit2, House, Layers, UserRound, type LucideIcon } from "lucide-react";
import { navegacao } from "@/lib/data";
import { cn } from "@/lib/utils";

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
      className="fixed inset-x-0 bottom-0 z-50 border-t border-subtle bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg md:hidden"
    >
      <ul className="grid grid-cols-4">
        {navegacao.map((item) => {
          const ativo = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const Icon = ICONES[item.href] ?? House;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={ativo ? "page" : undefined}
                className={cn(
                  "relative flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-medium transition-colors active:bg-surface-hover",
                  ativo && "text-foreground",
                )}
              >
                {ativo && <span className="absolute inset-x-7 top-0 h-0.5 rounded-full bg-foreground" />}
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
