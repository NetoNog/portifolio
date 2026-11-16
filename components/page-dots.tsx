"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navegacao } from "@/lib/data";

export function PageDots() {
  const pathname = usePathname();

  return (
    <nav aria-label="Páginas" className="relative z-50 mt-auto flex justify-center gap-4 pt-10">
      {navegacao.map((item) => {
        const ativo = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-label={item.rotulo}
            aria-current={ativo ? "page" : undefined}
            className="flex items-center py-2"
          >
            <span
              className={`h-2.5 rounded-full transition-all duration-500 md:h-3.5 ${
                ativo
                  ? "w-10 bg-primary shadow-[0_0_5px_var(--primary)] md:w-16"
                  : "w-5 bg-zinc-800 hover:bg-zinc-600 md:w-8"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
