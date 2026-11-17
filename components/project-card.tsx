import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TechBadgeList } from "@/components/tech-badge";
import type { Projeto } from "@/lib/data";

/** Prévia técnica do projeto: as primeiras camadas da arquitetura, em estilo terminal. */
function ArchitecturePreview({ projeto }: { projeto: Projeto }) {
  return (
    <div
      aria-hidden
      className="flex h-full min-h-44 flex-col rounded-xl border border-subtle bg-background p-4 font-mono text-[13px] leading-6"
    >
      <div className="mb-3 flex items-center gap-1.5">
        <span className="size-2.5 rounded-full bg-foreground/25" />
        <span className="size-2.5 rounded-full bg-foreground/25" />
        <span className="size-2.5 rounded-full bg-foreground/25" />
        <span className="ml-2 truncate text-xs">~/{projeto.slug}</span>
      </div>
      <ul className="space-y-1">
        {projeto.arquitetura.slice(0, 4).map((camada) => (
          <li key={camada} className="flex gap-2">
            <span className="text-foreground/40">›</span>
            <span className="line-clamp-1">{camada}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectCard({ projeto, nivelTitulo = "h3" }: { projeto: Projeto; nivelTitulo?: "h2" | "h3" }) {
  const Titulo = nivelTitulo;

  return (
    <article className="group relative grid gap-6 rounded-2xl border border-subtle bg-surface p-5 transition-colors duration-200 hover:border-accent/60 hover:bg-surface-hover md:grid-cols-[18rem_1fr_auto] md:items-center md:gap-10 md:p-8">
      <ArchitecturePreview projeto={projeto} />

      <div className="min-w-0">
        <p className="text-sm font-medium">{projeto.categoria}</p>
        <Titulo className="mt-1.5 text-2xl font-semibold md:text-[1.75rem]">{projeto.nome}</Titulo>
        <p className="mt-3 leading-relaxed">{projeto.resumo}</p>
        <TechBadgeList itens={projeto.stack} className="mt-5" />
      </div>

      <Link
        href={`/projetos/${projeto.slug}`}
        className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-lg bg-accent px-6 font-semibold text-accent-foreground transition-colors after:absolute after:inset-0 after:rounded-2xl hover:bg-accent/85 md:self-center"
      >
        Ver detalhes
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        <span className="sr-only">do projeto {projeto.nome}</span>
      </Link>
    </article>
  );
}
