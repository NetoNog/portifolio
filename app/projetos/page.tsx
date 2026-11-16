import type { Metadata } from "next";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { PageWatermark } from "@/components/page-watermark";
import { Reveal } from "@/components/reveal";
import { fetchRepos, formatarData, GITHUB_USERNAME } from "@/lib/github";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos recentes de José Nogueira, com código aberto no GitHub.",
};

const REPOSITORIOS_URL = `https://github.com/${GITHUB_USERNAME}?tab=repositories`;

export default async function ProjetosPage() {
  const repos = await fetchRepos();

  return (
    <div className="w-full max-w-6xl py-8">
      <Reveal>
        <h1 className="text-[2.5rem] font-extrabold leading-tight tracking-tighter text-white md:text-5xl">Projetos</h1>
        <p className="mt-3 max-w-xl text-base text-zinc-400 sm:text-lg">
          Trabalhos recentes com código aberto, atualizados direto do meu GitHub.
        </p>
      </Reveal>

      {repos.length === 0 ? (
        <Reveal delay={0.1} className="mt-10 rounded-2xl border border-zinc-700 bg-card/80 p-10 text-center">
          <GithubIcon className="mx-auto mb-4 size-10 text-zinc-400" />
          <p className="text-lg font-semibold text-white">Não foi possível carregar os projetos agora.</p>
          <p className="mx-auto mt-2 max-w-md text-zinc-400">Veja todos os repositórios direto no GitHub.</p>
          <a
            href={REPOSITORIOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full border border-primary px-8 font-semibold text-zinc-200 transition-all duration-300 hover:bg-white hover:text-black"
          >
            Abrir GitHub
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
      ) : (
        <>
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, idx) => (
              <li key={repo.id}>
                <Reveal delay={0.08 * idx} className="h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-zinc-700 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                  <div className="flex items-center justify-between gap-3 text-sm text-zinc-500">
                    <span>{formatarData(repo.updatedAt)}</span>
                    <GithubIcon className="size-5 text-zinc-500 transition-colors group-hover:text-accent" />
                  </div>
                  <h2 className="mt-3 text-xl font-semibold capitalize text-white">
                    {repo.name.replace(/[-_]/g, " ")}
                  </h2>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-400">
                    {repo.description || "Projeto de código aberto."}
                  </p>

                  {repo.tags.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {repo.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-primary/40 bg-primary/10 px-3 py-0.5 text-xs font-medium text-emerald-200"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6 flex gap-3 border-t border-zinc-800 pt-5 text-sm font-semibold">
                    <a
                      href={repo.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código de ${repo.name} no GitHub`}
                      className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-zinc-600 px-5 text-zinc-200 transition-colors hover:border-white hover:bg-white hover:text-black active:bg-white active:text-black sm:flex-none"
                    >
                      Código
                    </a>
                    {repo.deployUrl && (
                      <a
                        href={repo.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir demonstração de ${repo.name}`}
                        className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-5 text-primary-foreground transition-colors hover:bg-emerald-400 active:bg-emerald-400 sm:flex-none"
                      >
                        Demonstração
                        <ExternalLink className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <a
            href={REPOSITORIOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-11 items-center gap-1.5 font-semibold text-accent hover:underline"
          >
            Ver todos os repositórios
            <ArrowUpRight className="size-4" />
          </a>
        </>
      )}

      <PageWatermark>Projetos</PageWatermark>
    </div>
  );
}
