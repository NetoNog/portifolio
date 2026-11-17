import { GITHUB_USERNAME } from "@/lib/github";

const WHATSAPP_NUMBER = "5585998545507";
const WHATSAPP_MESSAGE =
  "Olá José! Vi seu portfólio e gostaria de conversar sobre um projeto.";

const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

export const perfil = {
  nome: "José Nogueira",
  cargo: "Desenvolvedor Full Stack",
  especialidade: "Sistemas web, APIs e automações",
  local: "Atendimento remoto para todo o Brasil",
  email: "n.nog@icloud.com",
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  resumo:
    "Desenvolvo sites, sistemas e automações sob medida com Next.js, TypeScript e PostgreSQL. Do banco de dados à interface, entrego software rápido, seguro e fácil de manter, com comunicação direta durante todo o projeto.",
  linkedin: "https://www.linkedin.com/in/netonog",
  github: GITHUB_URL,
};

export type ItemNavegacao = { rotulo: string; href: string };

export const navegacao: ItemNavegacao[] = [
  { rotulo: "Home", href: "/" },
  { rotulo: "Projetos", href: "/projetos" },
  { rotulo: "Tecnologias", href: "/tecnologias" },
  { rotulo: "Sobre", href: "/sobre" },
];

export const sobre = [
  "Sou desenvolvedor full stack e ajudo empresas e profissionais a tirarem projetos digitais do papel: de landing pages que convertem a sistemas internos, APIs, integrações de pagamento e automações.",
  "Trabalho com uma stack moderna e tipada de ponta a ponta (Next.js, React, TypeScript, Node.js e PostgreSQL) e cuido do que não aparece na tela: modelagem de dados, segurança no banco com Row Level Security, validação de entradas e desempenho.",
  "Antes do desenvolvimento, atuei com suporte e infraestrutura de TI. Essa experiência me deu uma visão prática de como sistemas são usados de verdade, e é por isso que construo pensando em quem vai operar o software no dia a dia.",
];

/* ------------------------------------------------------------------ */
/* Serviços                                                            */
/* ------------------------------------------------------------------ */

export type IconeServico = "site" | "sistema" | "api" | "automacao";

export type Servico = {
  titulo: string;
  descricao: string;
  entregaveis: string[];
  icone: IconeServico;
};

export const servicos: Servico[] = [
  {
    titulo: "Sites e landing pages",
    descricao:
      "Páginas rápidas e responsivas, pensadas para transformar visitas em contatos e pedidos.",
    entregaveis: ["Mobile-first", "SEO técnico", "Core Web Vitals", "Deploy na Vercel"],
    icone: "site",
  },
  {
    titulo: "Sistemas e painéis web",
    descricao:
      "Aplicações sob medida com login, permissões por perfil, dashboards e relatórios.",
    entregaveis: ["Autenticação", "Controle de acesso", "Dashboards", "PostgreSQL"],
    icone: "sistema",
  },
  {
    titulo: "APIs e integrações",
    descricao:
      "Back-ends tipados que conectam seu sistema a pagamentos, bancos e serviços externos.",
    entregaveis: ["REST", "Webhooks", "PIX e TEF", "Validação de dados"],
    icone: "api",
  },
  {
    titulo: "Automação de processos",
    descricao:
      "Fluxos que eliminam tarefas manuais repetitivas e integram as ferramentas da empresa.",
    entregaveis: ["n8n", "Python", "Power Automate", "Integração de APIs"],
    icone: "automacao",
  },
];

/* ------------------------------------------------------------------ */
/* Diferenciais e processo                                             */
/* ------------------------------------------------------------------ */

export type IconeDiferencial = "codigo" | "seguranca" | "desempenho" | "comunicacao";

export type Diferencial = {
  titulo: string;
  descricao: string;
  icone: IconeDiferencial;
};

export const diferenciais: Diferencial[] = [
  {
    titulo: "Código sustentável",
    descricao:
      "TypeScript estrito, componentes pequenos e regras de negócio separadas da interface. Fácil de evoluir, inclusive por outro dev.",
    icone: "codigo",
  },
  {
    titulo: "Segurança desde o banco",
    descricao:
      "Row Level Security, consultas parametrizadas, validação de toda entrada externa e segredos fora do código.",
    icone: "seguranca",
  },
  {
    titulo: "Desempenho de verdade",
    descricao:
      "Renderização no servidor, cache e otimização de imagens. Já entreguei interface a 60 FPS em TV com 2 GB de RAM.",
    icone: "desempenho",
  },
  {
    titulo: "Comunicação direta",
    descricao:
      "Você fala com quem escreve o código. Entregas parciais para validar cedo e sem surpresa no fim.",
    icone: "comunicacao",
  },
];

export type EtapaProcesso = { titulo: string; descricao: string };

export const processo: EtapaProcesso[] = [
  {
    titulo: "Diagnóstico",
    descricao: "Entendo o problema, o público e as regras de negócio antes de propor qualquer tela.",
  },
  {
    titulo: "Proposta técnica",
    descricao: "Escopo, stack, arquitetura e prazo por escrito, com o que entra e o que fica de fora.",
  },
  {
    titulo: "Desenvolvimento",
    descricao: "Entregas parciais em ambiente de teste para você acompanhar e ajustar o rumo.",
  },
  {
    titulo: "Publicação",
    descricao: "Deploy, domínio, monitoramento e passagem de conhecimento para sua equipe.",
  },
];

/* ------------------------------------------------------------------ */
/* Projetos (estudos de caso)                                          */
/* ------------------------------------------------------------------ */

export type Projeto = {
  slug: string;
  nome: string;
  categoria: string;
  resumo: string;
  problema: string;
  solucao: string;
  destaques: string[];
  /** Fluxo da arquitetura, da entrada do usuário até os dados. */
  arquitetura: string[];
  /** Use os mesmos nomes de `tecnologias` para que as páginas se conectem. */
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
  observacao?: string;
};

const repo = (nome: string) => `${GITHUB_URL}/${nome}`;

export const projetos: Projeto[] = [
  {
    slug: "arrumabolso",
    nome: "ArrumaBolso",
    categoria: "Sistema web · Finanças pessoais",
    resumo:
      "Plataforma de gestão financeira que substitui planilhas por previsibilidade orçamentária e importação automática de faturas.",
    problema:
      "Controlar finanças em planilhas exige lançar tudo à mão, não prevê o impacto de parcelas futuras e não mostra quanto ainda dá para gastar no mês.",
    solucao:
      "Um sistema multiusuário que importa extratos e faturas, categoriza os gastos sozinho e projeta o fluxo de caixa dos próximos 12 meses, com os dados de cada usuário isolados no banco.",
    destaques: [
      "Importação de faturas e extratos Nubank (CSV) e arquivos bancários OFX",
      "Deduplicação de lançamentos por hash determinístico",
      "Detecção automática de parcelamentos, como “Mercado Livre (02/06)”",
      "Categorização automática de centenas de estabelecimentos brasileiros",
      "Projeção de fluxo de caixa de 12 meses e burn rate diário seguro",
      "Score de saúde financeira (0 a 100) ponderado por liquidez, comprometimento de renda, poupança e dívidas",
      "Row Level Security no PostgreSQL e funções em PL/pgSQL",
      "Modo privacidade que oculta todos os valores com a tecla H",
    ],
    arquitetura: [
      "Next.js App Router com Server Components",
      "Supabase Auth com e-mail e Google OAuth (JWT)",
      "PostgreSQL com RLS por usuário e funções PL/pgSQL",
      "Parser CSV/OFX e motor de categorização",
      "Gráficos interativos em SVG com Recharts",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Recharts"],
    repoUrl: repo("ArrumaBolso"),
  },
  {
    slug: "smartpark-totem",
    nome: "SmartPark Totem",
    categoria: "Sistema de autoatendimento · Pagamentos",
    resumo:
      "Sistema de autoatendimento para estacionamentos rotativos, feito para totens touchscreen com pagamento por PIX e cartão.",
    problema:
      "Estacionamentos rotativos dependem de operador no caixa para consultar o ticket, calcular a tarifa e receber o pagamento, o que gera fila e custo fixo.",
    solucao:
      "Um totem que lê o ticket, calcula a tarifa, recebe por PIX ou cartão e libera a saída, integrado a leitor ótico, PinPad e impressora térmica.",
    destaques: [
      "PIX no padrão BR Code (EMV) com confirmação por webhook",
      "Pagamento por cartão via TEF, com agente local ligado ao PinPad",
      "Leitor ótico laser e teclado virtual touch para digitar o ticket",
      "Motor de cálculo tarifário com as regras de negócio do estacionamento",
      "Impressão de comprovante em impressora térmica ESC/POS de 80 mm",
      "Acessibilidade: alto contraste, layout para cadeirantes e síntese de voz",
      "Execução em modo quiosque e implantação com Docker Compose",
    ],
    arquitetura: [
      "Interface do totem em Next.js 16 e React 19",
      "Rotas de API: consultar, pagar, PIX, status e webhook do PIX",
      "Prisma ORM sobre PostgreSQL 16",
      "Gateway PIX do PSP e agente TEF local",
      "Periféricos: scanner, PinPad e impressora térmica",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Docker"],
    repoUrl: repo("TotemEstacionameto"),
  },
  {
    slug: "docflow",
    nome: "DocFlow",
    categoria: "Sistema web · Gestão de documentos",
    resumo:
      "Painel de gestão de documentos corporativos organizado por setores, com controle de acesso por perfil.",
    problema:
      "Documentos internos espalhados em pastas e e-mails dificultam encontrar a versão certa e controlar quem pode ver cada arquivo.",
    solucao:
      "Um painel central com documentos por setor, busca e filtros, gestão de pessoas e permissões, e recursos de segurança de sessão.",
    destaques: [
      "Controle de acesso por perfil e tela de gestão de permissões",
      "Organização por setores, com busca e filtros",
      "Bloqueio de sessão e troca rápida entre contas",
      "Proteção de rotas com middleware do Next.js",
      "Estado de autenticação e documentos em contextos React tipados",
      "Componentes acessíveis com shadcn/ui sobre Base UI",
    ],
    arquitetura: [
      "Next.js 16 App Router",
      "Middleware de autenticação nas rotas",
      "Contextos de autenticação e documentos",
      "Visões de documentos, setores, pessoas e permissões",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repoUrl: repo("DocFlow"),
  },
  {
    slug: "libras-studio",
    nome: "Libras Studio",
    categoria: "Visão computacional · Acessibilidade",
    resumo:
      "Tradutor e plataforma de estudo de Libras em tempo real pela webcam, rodando 100% local em CPU.",
    problema:
      "Ferramentas de reconhecimento de sinais costumam depender de GPU ou de APIs em nuvem, o que encarece e limita o uso didático.",
    solucao:
      "Um pipeline local de visão computacional que rastreia as duas mãos e o rosto, reconhece sinais e devolve o texto em português com voz sintetizada.",
    destaques: [
      "Rastreamento bimanual com MediaPipe Hands: 21 pontos 3D por mão",
      "MediaPipe Face Landmarker para identificar o ponto de articulação do sinal",
      "Filtro 1€ (One Euro) para eliminar tremulação dos pontos",
      "Classificadores de sinais estáticos, dinâmicos, léxicos e bimanuais",
      "Classificador invariante à rotação da mão",
      "Tradução sintática de Libras para português e síntese de voz (TTS)",
      "Captura acima de 30 FPS, sem GPU dedicada nem serviço em nuvem",
    ],
    arquitetura: [
      "Captura da webcam com OpenCV",
      "MediaPipe Hands e Face Landmarker em paralelo",
      "Suavização com filtro 1€",
      "Classificadores estático, léxico e bimanual",
      "Tradução sintática e síntese de voz",
    ],
    stack: ["Python", "OpenCV", "MediaPipe"],
    repoUrl: repo("Libras-Studio"),
    observacao:
      "Projeto educacional e de pesquisa. Não substitui tradutores e intérpretes de Libras.",
  },
  {
    slug: "fast-tv-launcher",
    nome: "Fast TV Launcher",
    categoria: "Smart TV · Performance",
    resumo:
      "Launcher ultraleve para Smart TVs Samsung (Tizen) que substitui a tela inicial lenta por uma interface rápida.",
    problema:
      "TVs de entrada com 2 GB de RAM travam no menu nativo, cheio de anúncios, e demoram para abrir apps e trocar de entrada HDMI.",
    solucao:
      "Um launcher próprio sem frameworks, otimizado para o hardware limitado da TV e navegável pelo controle remoto.",
    destaques: [
      "60 FPS estáveis em TVs com 2 GB de RAM",
      "Zero frameworks: HTML5 semântico, CSS3 e JavaScript puro",
      "Mapeamento completo do controle remoto Samsung",
      "Otimizações de memória e de renderização para Tizen 5.0 e 5.5",
      "Instalação automatizada via SDB e Tizen CLI com scripts PowerShell",
    ],
    arquitetura: [
      "Interface em HTML5, CSS3 e JavaScript",
      "Navegação por foco com o controle remoto",
      "Empacotamento como app Tizen",
      "Deploy via SDB na TV",
    ],
    stack: ["JavaScript", "HTML e CSS", "Tizen"],
    repoUrl: repo("LaucherTVLinux"),
  },
  {
    slug: "iron-jungle",
    nome: "Iron Jungle Academia",
    categoria: "Landing page · Cliente real",
    resumo: "Landing page em produção para uma academia, focada em conversão e no acesso pelo celular.",
    problema:
      "A academia precisava de uma presença digital que apresentasse a estrutura e levasse o visitante direto ao contato.",
    solucao:
      "Uma landing page responsiva, rápida e otimizada para SEO, publicada na Vercel.",
    destaques: [
      "Aplicação React com Vite",
      "Layout responsivo e mobile-first",
      "Otimizações de SEO e de carregamento",
      "Deploy contínuo na Vercel",
    ],
    arquitetura: ["React 18 com Vite 6", "Tailwind CSS v4", "Deploy na Vercel"],
    stack: ["React", "Vite", "Tailwind CSS"],
    repoUrl: repo("leadingPageIronJungle"),
    demoUrl: "https://leading-page-iron-jungle.vercel.app",
  },
  {
    slug: "original-pizza-acai",
    nome: "Original Pizza e Açaí",
    categoria: "Landing page · Cliente real",
    resumo:
      "Landing page de alta conversão para pizzaria e açaiteria, com cardápio interativo e pedido em um toque.",
    problema:
      "O cliente precisava levar quem chega pelo celular direto ao pedido, sem atrito.",
    solucao:
      "Uma página leve, sem frameworks, com cardápio filtrável, status de funcionamento em tempo real e atalhos para pedido e WhatsApp.",
    destaques: [
      "Cardápio filtrável por abas sem recarregar a página",
      "Indicador de “aberto agora” calculado pelo horário de funcionamento",
      "Botões de pedido integrados à plataforma de delivery e ao WhatsApp",
      "Mapa incorporado e layout mobile-first",
    ],
    arquitetura: ["HTML5 semântico", "CSS3", "JavaScript puro", "Deploy na Vercel"],
    stack: ["JavaScript", "HTML e CSS"],
    repoUrl: repo("leadingPage_OriginalPizza-Acai"),
    demoUrl: "https://leading-page-original-pizza-acai.vercel.app",
  },
];

/** Projetos exibidos na página inicial. */
export const projetosEmDestaque = projetos.slice(0, 4);

export function buscarProjeto(slug: string): Projeto | undefined {
  return projetos.find((projeto) => projeto.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Tecnologias                                                         */
/* ------------------------------------------------------------------ */

export type IconeTecnologia =
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "nodejs"
  | "nestjs"
  | "python"
  | "postgresql"
  | "supabase"
  | "prisma"
  | "docker"
  | "git"
  | "n8n"
  | "powerAutomate"
  | "powerApps";

export type Tecnologia = {
  nome: string;
  descricao: string;
  icone: IconeTecnologia;
};

export type GrupoDeTecnologias = {
  categoria: string;
  descricao: string;
  itens: Tecnologia[];
};

export const tecnologias: GrupoDeTecnologias[] = [
  {
    categoria: "Front-end",
    descricao: "Interfaces rápidas, acessíveis e responsivas.",
    itens: [
      {
        nome: "React",
        descricao: "Interfaces componentizadas, reutilizáveis e fáceis de evoluir.",
        icone: "react",
      },
      {
        nome: "Next.js",
        descricao: "App Router, Server Components, cache e SEO resolvido no servidor.",
        icone: "nextjs",
      },
      {
        nome: "TypeScript",
        descricao: "Tipagem estrita de ponta a ponta, do banco à interface.",
        icone: "typescript",
      },
      {
        nome: "Tailwind CSS",
        descricao: "Design systems com tokens, temas e layouts responsivos.",
        icone: "tailwind",
      },
    ],
  },
  {
    categoria: "Back-end e dados",
    descricao: "APIs, regras de negócio e bancos de dados seguros.",
    itens: [
      {
        nome: "Node.js",
        descricao: "APIs, webhooks e serviços em JavaScript e TypeScript.",
        icone: "nodejs",
      },
      {
        nome: "NestJS",
        descricao: "Back-ends modulares com injeção de dependência e validação.",
        icone: "nestjs",
      },
      {
        nome: "PostgreSQL",
        descricao: "Modelagem relacional, índices, PL/pgSQL e integridade dos dados.",
        icone: "postgresql",
      },
      {
        nome: "Supabase",
        descricao: "Autenticação, OAuth e Row Level Security sobre PostgreSQL.",
        icone: "supabase",
      },
      {
        nome: "Prisma",
        descricao: "ORM tipado, migrations versionadas e consultas seguras.",
        icone: "prisma",
      },
    ],
  },
  {
    categoria: "Infra e automação",
    descricao: "Deploy, integrações e processos sem trabalho manual.",
    itens: [
      {
        nome: "Docker",
        descricao: "Ambientes reproduzíveis e implantação com Docker Compose.",
        icone: "docker",
      },
      {
        nome: "Git",
        descricao: "Versionamento, commits atômicos e histórico claro de cada entrega.",
        icone: "git",
      },
      {
        nome: "n8n",
        descricao: "Fluxos que conectam sistemas e eliminam tarefas repetitivas.",
        icone: "n8n",
      },
      {
        nome: "Python",
        descricao: "Scripts, tratamento de dados, integrações e visão computacional.",
        icone: "python",
      },
      {
        nome: "Power Automate",
        descricao: "Rotinas automáticas no ecossistema Microsoft 365.",
        icone: "powerAutomate",
      },
      {
        nome: "Power Apps",
        descricao: "Aplicativos internos para digitalizar processos da empresa.",
        icone: "powerApps",
      },
    ],
  },
];

/** Projetos do portfólio que usam a tecnologia informada. */
export function projetosComTecnologia(nome: string): Projeto[] {
  return projetos.filter((projeto) => projeto.stack.includes(nome));
}

export const totalDeTecnologias = tecnologias.reduce(
  (total, grupo) => total + grupo.itens.length,
  0,
);
