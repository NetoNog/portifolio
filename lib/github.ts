/**
 * PASSO 3 — Consumindo a API pública do GitHub
 *
 * Troque o valor abaixo pelo seu usuário do GitHub.
 * É o único lugar do projeto que precisa ser alterado.
 */
export const GITHUB_USERNAME = "NetoNog";

/** Quantos projetos aparecem na vitrine do portfólio. */
const MAX_REPOS = 6;

/**
 * Repositórios que NÃO devem aparecer (ex: o repo do próprio perfil,
 * repos de estudo, dotfiles...). Compare sempre em minúsculas.
 */
const IGNORAR = new Set<string>([GITHUB_USERNAME.toLowerCase(), "dotfiles"]);

/* ------------------------------------------------------------------ */
/* Tipagem                                                             */
/* ------------------------------------------------------------------ */

/**
 * A resposta do GitHub tem ~90 campos por repositório.
 * Tipamos apenas o que realmente usamos na UI — isso mantém o
 * autocomplete útil e evita carregar ruído no projeto.
 */
type GitHubRepoResponse = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[] | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
};

/** O formato "limpo" que os nossos componentes consomem. */
export type Repo = {
  id: number;
  name: string;
  description: string;
  repoUrl: string;
  /** URL do deploy (campo "Website" do repositório). Pode não existir. */
  deployUrl: string | null;
  /** Linguagem principal + topics, já unificados para virarem badges. */
  tags: string[];
  stars: number;
  forks: number;
  updatedAt: string;
};

/* ------------------------------------------------------------------ */
/* Fetch                                                               */
/* ------------------------------------------------------------------ */

/**
 * Busca os repositórios públicos mais recentes do usuário.
 *
 * Pontos importantes:
 *
 * 1. `sort=updated` → o GitHub já devolve ordenado pelo último push,
 *    então seu portfólio se atualiza sozinho a cada commit.
 *
 * 2. `next: { revalidate: 3600 }` → o Next.js guarda a resposta em
 *    cache por 1 hora. Sem isso, cada visita gastaria uma requisição
 *    do seu limite (60/h por IP sem autenticação).
 *
 * 3. `GITHUB_TOKEN` é opcional. Se você criar um Personal Access Token
 *    (sem nenhum escopo, apenas leitura pública) e salvar como variável
 *    de ambiente, o limite sobe de 60 para 5.000 requisições/hora.
 *    Como isso roda no SERVIDOR, o token nunca vai para o navegador.
 *
 * 4. Nunca deixamos o erro "estourar" na página: se a API falhar,
 *    devolvemos uma lista vazia e a seção mostra um aviso amigável.
 */
export async function fetchRepos(): Promise<Repo[]> {
  const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=100&type=owner`;

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(url, {
      headers,
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as GitHubRepoResponse[];

    return data
      .filter((repo) => !repo.fork && !repo.archived)
      .filter((repo) => !IGNORAR.has(repo.name.toLowerCase()))
      .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
      .slice(0, MAX_REPOS)
      .map(normalizarRepo);
  } catch (error) {
    return [];
  }
}

function sanitizarUrl(url: string | null): string | null {
  if (!url) return null;
  const limpa = url.trim();
  if (!limpa) return null;
  if (/^https?:\/\//i.test(limpa)) return limpa;
  return `https://${limpa}`;
}

/** Converte a resposta crua do GitHub no formato que a UI espera. */
function normalizarRepo(repo: GitHubRepoResponse): Repo {
  const tags = [repo.language, ...(repo.topics ?? [])].filter(
    (tag): tag is string => Boolean(tag),
  );

  return {
    id: repo.id,
    name: repo.name,
    description: repo.description ?? "",
    repoUrl: repo.html_url,
    deployUrl: sanitizarUrl(repo.homepage),
    tags: Array.from(new Set(tags)).slice(0, 5),
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updatedAt: repo.pushed_at,
  };
}

/** Formata a data do último push como "jul. de 2026". */
export function formatarData(iso: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}
