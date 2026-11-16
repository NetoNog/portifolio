import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import { Database, GitBranch } from "lucide-react";
import {
  N8nIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  PowerAppsIcon,
  PowerAutomateIcon,
  PythonIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/components/brand-icons";
import { PageWatermark } from "@/components/page-watermark";
import { Reveal } from "@/components/reveal";
import { tecnologias, type IconeTecnologia } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tecnologias",
  description: "Tecnologias que José Nogueira usa em front-end, back-end e automação.",
};

const ICONES: Record<IconeTecnologia, ComponentType<SVGProps<SVGSVGElement>>> = {
  react: ReactIcon,
  nextjs: NextjsIcon,
  typescript: TypescriptIcon,
  tailwind: TailwindIcon,
  nodejs: NodejsIcon,
  nestjs: NestjsIcon,
  python: PythonIcon,
  postgresql: Database,
  git: GitBranch,
  n8n: N8nIcon,
  powerAutomate: PowerAutomateIcon,
  powerApps: PowerAppsIcon,
};

export default function TecnologiasPage() {
  return (
    <div className="w-full max-w-6xl space-y-10 py-6 md:space-y-14 md:py-8">
      {tecnologias.map((grupo, gIdx) => (
        <section key={grupo.categoria} aria-labelledby={`grupo-${gIdx}`}>
          <Reveal className="mb-6 flex items-baseline gap-4">
            <span className="text-2xl font-bold text-primary md:text-3xl">{String(gIdx + 1).padStart(2, "0")}</span>
            <h2 id={`grupo-${gIdx}`} className="text-2xl font-bold text-white md:text-3xl">
              {grupo.categoria}
            </h2>
          </Reveal>

          <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
            {grupo.itens.map((tec, idx) => {
              const Icon = ICONES[tec.icone];
              return (
                <li key={tec.nome}>
                  <Reveal delay={0.06 * idx} className="h-full">
                  <div className="group relative flex items-start gap-4 overflow-hidden border-t-[5px] border-zinc-700 bg-card/40 transition-all duration-500 hover:-translate-y-1 hover:border-white">
                    <span className="absolute right-0 top-0 size-4 bg-zinc-700 duration-300 group-hover:bg-white" />
                    <span className="flex size-20 shrink-0 items-center justify-center bg-zinc-800 text-zinc-300 transition-all duration-300 group-hover:bg-white group-hover:text-primary sm:size-24 md:size-28">
                      <Icon className="size-9 md:size-12" aria-hidden />
                    </span>
                    <div className="min-w-0 py-3 pr-5">
                      <h3 className="text-lg font-semibold text-white">{tec.nome}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{tec.descricao}</p>
                    </div>
                  </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <PageWatermark>Tecnologias</PageWatermark>
    </div>
  );
}
