import { GITHUB_USERNAME } from "@/lib/github";

const WHATSAPP_NUMBER = "5585998545507";
const WHATSAPP_MESSAGE =
  "Olá José! Vi seu portfólio e gostaria de conversar sobre um projeto.";

export const perfil = {
  nome: "José Nogueira",
  cargo: "Desenvolvedor Full Stack",
  local: "Atendimento remoto para todo o Brasil",
  email: "n.nog@icloud.com",
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  resumo:
    "Transformo ideias em sites, sistemas e automações sob medida, unindo código limpo, bom desempenho e entregas com prazo combinado.",
  linkedin: "https://www.linkedin.com/in/netonog",
  github: `https://github.com/${GITHUB_USERNAME}`,
};

export const navegacao = [
  { rotulo: "Home", href: "/" },
  { rotulo: "Projetos", href: "/projetos" },
  { rotulo: "Tecnologias", href: "/tecnologias" },
  { rotulo: "Sobre", href: "/sobre" },
];

export const sobre = [
  "Sou desenvolvedor full stack e ajudo empresas e profissionais a tirarem projetos digitais do papel: de sites e landing pages a sistemas internos, APIs e automações.",
  "Meu foco é entregar soluções que funcionam no dia a dia, com código organizado, interfaces rápidas e comunicação direta durante todo o projeto.",
  "Antes do desenvolvimento, atuei com suporte e infraestrutura, o que me deu uma visão prática de como sistemas são usados de verdade.",
];

export const servicos = [
  "Sites e landing pages",
  "Sistemas e painéis web",
  "APIs e integrações",
  "Automação de processos",
];

export type IconeTecnologia =
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "nodejs"
  | "nestjs"
  | "python"
  | "postgresql"
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
  itens: Tecnologia[];
};

export const tecnologias: GrupoDeTecnologias[] = [
  {
    categoria: "Front-end",
    itens: [
      {
        nome: "React",
        descricao: "Interfaces componentizadas, reutilizáveis e fáceis de evoluir.",
        icone: "react",
      },
      {
        nome: "Next.js",
        descricao: "Aplicações web rápidas, com renderização no servidor e SEO bem resolvido.",
        icone: "nextjs",
      },
      {
        nome: "TypeScript",
        descricao: "Tipagem estrita que reduz erros e facilita a manutenção do código.",
        icone: "typescript",
      },
      {
        nome: "Tailwind CSS",
        descricao: "Layouts responsivos e consistentes, construídos direto no componente.",
        icone: "tailwind",
      },
    ],
  },
  {
    categoria: "Back-end",
    itens: [
      {
        nome: "Node.js",
        descricao: "APIs e serviços em JavaScript, do script simples ao sistema em produção.",
        icone: "nodejs",
      },
      {
        nome: "NestJS",
        descricao: "Back-ends organizados em módulos, com validação e arquitetura escalável.",
        icone: "nestjs",
      },
      {
        nome: "PostgreSQL",
        descricao: "Modelagem de dados relacional, consultas eficientes e integridade dos dados.",
        icone: "postgresql",
      },
      {
        nome: "Git",
        descricao: "Versionamento, revisão de código e histórico claro de cada entrega.",
        icone: "git",
      },
    ],
  },
  {
    categoria: "Automação",
    itens: [
      {
        nome: "n8n",
        descricao: "Fluxos que conectam sistemas e eliminam tarefas manuais repetitivas.",
        icone: "n8n",
      },
      {
        nome: "Python",
        descricao: "Scripts, tratamento de dados e integrações entre plataformas.",
        icone: "python",
      },
      {
        nome: "Power Automate",
        descricao: "Rotinas automáticas dentro do ecossistema Microsoft 365.",
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
