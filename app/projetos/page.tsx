import type { Metadata } from "next";
import { ArrowUpRight, ExternalLink, GitFork, Star } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { CtaLink } from "@/components/cta-link";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TechBadgeList } from "@/components/tech-badge";
import { projetos } from "@/lib/data";
import { fetchRepos, formatarData, GITHUB_USERNAME, type Repo } from "@/lib/github";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Estudos de caso de José Nogueira: sistemas web, pagamentos PIX e TEF, visão computacional, landing pages de clientes e repositórios no GitHub.",
};

const REPOSITORIOS_URL = `https://github.com/${GITHUB_USERNAME}?tab=repositories`;

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-subtle bg-surface p-6 transition-colors hover:border-accent/60">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span>Atualizado em {formatarData(repo.updatedAt)}</span>
        <span className="flex items-center gap-3">
          <span className="flex items-center gap-1" aria-label={`${repo.stars} estrelas`}>
            <Star className="size-3.5" aria-hidden />
            {repo.stars}
          </span>
          <span className="flex items-center gap-1" aria-label={`${repo.forks} forks`}>
            <GitFork className="size-3.5" aria-hidden />
            {repo.forks}
          </span>
        </span>
      </div>
      <h3 className="mt-3 break-words font-mono text-lg font-medium">{repo.name}</h3>
      <p className="mt-2 line-clamp-3 flex-1 leading-relaxed">{repo.description || "Projeto de código aberto."}</p>
      {repo.tags.length > 0 && <TechBadgeList itens={repo.tags} className="mt-5" />}
      <div className="mt-6 flex flex-wrap gap-3 border-t border-subtle pt-5">
        <CtaLink href={repo.repoUrl} variant="outline" size="sm" ariaLabel={`Ver código de ${repo.name} no GitHub`}>
          <GithubIcon />
          Código
        </CtaLink>
        {repo.deployUrl && (
          <CtaLink href={repo.deployUrl} size="sm" ariaLabel={`Abrir ${repo.name} ao vivo`}>
            Ao vivo
            <ExternalLink aria-hidden />
          </CtaLink>
        )}
      </div>
    </article>
  );
}

export default async function ProjetosPage() {
  const repos = await fetchRepos();

  return (
    <>
      <section aria-labelledby="projetos-titulo" className="pb-16 pt-14 md:pb-24 md:pt-20">
        <Container>
          <SectionHeading
            id="projetos-titulo"
            como="h1"
            alinhamento="esquerda"
            eyebrow="Portfólio"
            titulo="Estudos de caso"
            descricao="Cada projeto com o problema, a solução, a arquitetura e as decisões técnicas por trás dele."
            watermark="Projetos"
          />
          <ul className="space-y-6">
            {projetos.map((projeto, idx) => (
              <li key={projeto.slug}>
                <Reveal delay={0.04 * idx}>
                  <ProjectCard projeto={projeto} nivelTitulo="h2" />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="github-titulo" className="border-t border-subtle bg-surface/40 py-16 md:py-24">
        <Container>
          <SectionHeading
            id="github-titulo"
            alinhamento="esquerda"
            eyebrow="Código aberto"
            titulo="Direto do GitHub"
            descricao="Os repositórios com atividade mais recente, atualizados automaticamente a cada hora."
          />

          {repos.length === 0 ? (
            <div className="rounded-2xl border border-subtle bg-surface p-10 text-center">
              <GithubIcon className="mx-auto size-10" />
              <p className="mt-4 text-lg font-semibold text-foreground">
                Não foi possível carregar os repositórios agora.
              </p>
              <p className="mt-2">Você pode ver todos eles direto no GitHub.</p>
              <CtaLink href={REPOSITORIOS_URL} className="mt-6">
                Abrir GitHub
                <ArrowUpRight aria-hidden />
              </CtaLink>
            </div>
          ) : (
            <>
              <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo) => (
                  <li key={repo.id}>
                    <RepoCard repo={repo} />
                  </li>
                ))}
              </ul>
              <CtaLink href={REPOSITORIOS_URL} variant="ghost" className="mt-8">
                Ver todos os repositórios
                <ArrowUpRight aria-hidden />
              </CtaLink>
            </>
          )}

          <div className="mt-16">
            <CtaBand mostrarProjetos={false} />
          </div>
        </Container>
      </section>
    </>
  );
}
