# José Nogueira — Portfólio

Portfólio de desenvolvedor full stack freelancer: sites, sistemas web, APIs e automações sob medida.

## Páginas

| Rota | Conteúdo |
| :--- | :--- |
| `/` | Apresentação e chamadas para orçamento |
| `/projetos` | Repositórios públicos mais recentes, carregados da API do GitHub |
| `/tecnologias` | Stack de front-end, back-end e automação |
| `/sobre` | Quem sou, serviços e contato |

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Server Components) e React 19
- TypeScript
- Tailwind CSS v4 (configuração CSS-first em `app/globals.css`)
- Framer Motion (animações de entrada, respeitando `prefers-reduced-motion`)

## Como rodar

Requer Node.js 20+ e [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000).

| Comando | Descrição |
| :--- | :--- |
| `pnpm dev` | Servidor de desenvolvimento |
| `pnpm build` | Build de produção |
| `pnpm start` | Serve o build de produção |
| `pnpm typecheck` | Verificação de tipos (`tsc --noEmit`) |

## Variáveis de ambiente (opcionais)

| Variável | Padrão | Descrição |
| :--- | :--- | :--- |
| `GITHUB_TOKEN` | — | Token pessoal do GitHub, sem escopos. Aumenta o limite da API de 60 para 5.000 requisições/hora. Usado só no servidor. |
| `NEXT_PUBLIC_SITE_URL` | `https://josenogueira.dev` | URL de produção usada nos metadados e na imagem de compartilhamento. |

## Onde editar

- **Textos, contatos, serviços e tecnologias:** `lib/data.ts`
- **Usuário do GitHub da página de projetos:** `GITHUB_USERNAME` em `lib/github.ts`
- **Cores do tema:** variáveis em `app/globals.css`
- **Fotos:** `public/foto-hero.jpg` (página inicial) e `public/foto-perfil.jpg` (página Sobre)

## Contato

- LinkedIn: [linkedin.com/in/netonog](https://www.linkedin.com/in/netonog)
- GitHub: [@NetoNog](https://github.com/NetoNog)
- E-mail: [n.nog@icloud.com](mailto:n.nog@icloud.com)
