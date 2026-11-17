"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WhatsappIcon } from "@/components/brand-icons";
import { navegacao, perfil } from "@/lib/data";
import { cn } from "@/lib/utils";

function estaAtivo(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-subtle bg-background/85 pt-[env(safe-area-inset-top)] backdrop-blur-lg">
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <Link href="/" className="flex min-h-11 items-center gap-3" aria-label={`${perfil.nome}, página inicial`}>
          <span className="flex size-10 items-center justify-center rounded-lg border border-subtle bg-surface text-sm font-bold text-foreground">
            JN
          </span>
          <span className="hidden text-lg font-semibold text-foreground min-[380px]:inline">{perfil.nome}</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navegacao.map((item) => {
              const ativo = estaAtivo(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={ativo ? "page" : undefined}
                    className={cn(
                      "relative py-2 font-medium transition-colors hover:text-accent",
                      ativo && "text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-foreground",
                    )}
                  >
                    {item.rotulo}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href={perfil.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-accent px-4 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground md:px-5 md:text-base"
        >
          <WhatsappIcon className="size-4" />
          Fale comigo
        </a>
      </div>
    </header>
  );
}
