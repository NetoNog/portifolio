import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CircleCheck, ExternalLink, Info } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { TechBadgeList } from "@/components/tech-badge";
import { buscarProjeto, projetos } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projetos.map((projeto) => ({ slug: projeto.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const projeto = buscarProjeto(slug);
  if (!projeto) return {};

  return {
    title: projeto.nome,
    description: projeto.resumo,
    alternates: { canonical: `/projetos/${projeto.slug}` },
  };
}

function Bloco({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">{titulo}</h2>
      <div className="mt-4 leading-relaxed">{children}</div>
    </section>
  );
}

export default async function ProjetoPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const projeto = buscarProjeto(slug);
  if (!projeto) notFound();

  const indice = projetos.findIndex((item) => item.slug === projeto.slug);
  const proximo = projetos[(indice + 1) % projetos.length];

  return (
    <article className="pb-20 pt-10 md:pb-28 md:pt-14">
      <Container>
        <Link
          href="/projetos"
          className="inline-flex min-h-11 items-center gap-2 font-medium transition-colors hover:text-accent"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Todos os projetos
        </Link>

        <Reveal>
          <header className="mt-6 border-b border-subtle pb-10">
            <p className="font-medium">{projeto.categoria}</p>
            <h1 className="mt-2 text-4xl font-semibold leading-tight md:text-6xl">{projeto.nome}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed md:text-xl">{projeto.resumo}</p>
            <TechBadgeList itens={projeto.stack} className="mt-6" />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {projeto.demoUrl && (
                <CtaLink href={projeto.demoUrl}>
                  Ver ao vivo
                  <ExternalLink aria-hidden />
                </CtaLink>
              )}
              <CtaLink href={projeto.repoUrl} variant={projeto.demoUrl ? "outline" : "primary"}>
                <GithubIcon />
                Código no GitHub
              </CtaLink>
            </div>
          </header>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div className="space-y-12">
            <Bloco titulo="O problema">
              <p>{projeto.problema}</p>
            </Bloco>
            <Bloco titulo="A solução">
              <p>{projeto.solucao}</p>
            </Bloco>
            <Bloco titulo="Destaques técnicos">
              <ul className="space-y-3">
                {projeto.destaques.map((destaque) => (
                  <li key={destaque} className="flex gap-3">
                    <CircleCheck className="mt-0.5 size-5 shrink-0 text-foreground" aria-hidden />
                    <span>{destaque}</span>
                  </li>
                ))}
              </ul>
            </Bloco>
            {projeto.observacao && (
              <p className="flex gap-3 rounded-xl border border-subtle bg-surface p-4 text-sm">
                <Info className="size-5 shrink-0 text-foreground" aria-hidden />
                {projeto.observacao}
              </p>
            )}
          </div>

          <aside aria-labelledby="arquitetura-titulo" className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-subtle bg-surface p-6">
              <h2 id="arquitetura-titulo" className="text-lg font-semibold">
                Arquitetura
              </h2>
              <ol className="mt-5">
                {projeto.arquitetura.map((camada, idx) => (
                  <li key={camada} className="relative flex gap-4 pb-5 last:pb-0">
                    {idx < projeto.arquitetura.length - 1 && (
                      <span aria-hidden className="absolute bottom-0 left-[0.6875rem] top-7 w-px bg-subtle" />
                    )}
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-subtle bg-background font-mono text-xs text-foreground">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5 text-sm leading-relaxed">{camada}</span>
                  </li>
                ))}
              </ol>

              <h2 className="mt-8 border-t border-subtle pt-6 text-lg font-semibold">Stack</h2>
              <TechBadgeList itens={projeto.stack} className="mt-4" />
            </div>
          </aside>
        </div>

        <nav aria-label="Próximo projeto" className="mt-16 border-t border-subtle pt-10">
          <Link
            href={`/projetos/${proximo.slug}`}
            className="group flex flex-col gap-1 rounded-2xl border border-subtle bg-surface p-6 transition-colors hover:border-accent/60 md:flex-row md:items-center md:justify-between md:p-8"
          >
            <span>
              <span className="block text-sm">Próximo projeto</span>
              <span className="mt-1 block text-2xl font-semibold text-foreground">{proximo.nome}</span>
            </span>
            <ArrowRight
              className="mt-3 size-6 text-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent md:mt-0"
              aria-hidden
            />
          </Link>
        </nav>

        <div className="mt-10">
          <CtaBand />
        </div>
      </Container>
    </article>
  );
}
