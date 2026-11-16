import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/brand-icons";
import { PageWatermark } from "@/components/page-watermark";
import { Reveal } from "@/components/reveal";
import { perfil, servicos, sobre } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Quem é José Nogueira, o que ele faz e como entrar em contato.",
};

function Campo({ nome, valor }: { nome: string; valor: string }) {
  return (
    <>
      {"  "}
      <span className="text-sky-300">String {nome}</span> = <span className="text-amber-200">&quot;{valor}&quot;</span>;
      {"\n"}
    </>
  );
}

const REDES = [
  { rotulo: "GitHub", href: perfil.github, Icon: GithubIcon },
  { rotulo: "LinkedIn", href: perfil.linkedin, Icon: LinkedinIcon },
  { rotulo: "E-mail", href: `mailto:${perfil.email}`, Icon: Mail },
];

const pillClass =
  "flex items-center justify-center gap-2 rounded-full border border-white px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:border-primary hover:bg-primary hover:text-primary-foreground md:px-8 md:py-4 md:text-lg";

export default function SobrePage() {
  return (
    <div className="flex w-full max-w-6xl flex-col gap-6 py-8 md:gap-8">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-stretch md:gap-8">
        <Reveal>
          <figure className="flex flex-col items-center">
            <div className="relative h-[230px] w-[250px] overflow-hidden rounded-t-xl md:h-[220px] md:w-[200px]">
              <Image
                src="/foto-perfil.jpg"
                alt={`Foto de ${perfil.nome}`}
                fill
                priority
                sizes="250px"
                className="object-cover"
              />
            </div>
            <figcaption className="w-full rounded-b-xl bg-primary py-1 text-center text-lg font-semibold text-primary-foreground">
              {perfil.nome}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1} className="w-full md:flex-1">
          <div className="h-full rounded-2xl border border-zinc-700 bg-[#0d1512] px-5 py-4 md:px-6">
            <div className="mb-3 flex gap-2" aria-hidden>
              <span className="size-3 rounded-full bg-red-500" />
              <span className="size-3 rounded-full bg-yellow-500" />
              <span className="size-3 rounded-full bg-green-500" />
            </div>
            <pre className="whitespace-pre-wrap break-words font-mono text-[12px] leading-6 text-zinc-200 md:text-[15px] md:leading-7 xl:text-base">
              <span className="text-sky-400">class</span> <span className="text-emerald-300">DevProfile</span> {"{\n"}
              <Campo nome="nome" valor={perfil.nome} />
              <Campo nome="cargo" valor={perfil.cargo} />
              <Campo nome="servicos" valor={servicos.join(", ")} />
              <Campo nome="stack" valor="React, Next.js, TypeScript, Node.js, NestJS, n8n" />
              <Campo nome="atendimento" valor="Remoto, para todo o Brasil" />
              {"}"}
            </pre>
          </div>
        </Reveal>
      </div>

      <div className="flex flex-col items-center gap-6 md:flex-row md:items-stretch md:gap-8">
        <Reveal delay={0.2} className="w-full md:flex-1">
          <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-[#0d1512]">
            <div className="flex items-center justify-between border-b border-zinc-700 bg-[#15201b] px-4 py-1.5" aria-hidden>
              <span className="text-sm text-zinc-400">&lt; &gt;</span>
              <span className="w-40 rounded-sm bg-white px-4 text-center text-xs text-black md:w-80">
                josenogueira.dev/sobre
              </span>
              <span className="flex gap-3 text-zinc-400">
                <span>—</span>
                <span>□</span>
                <span>✕</span>
              </span>
            </div>
            <div className="space-y-4 px-6 py-5 text-[15px] font-light leading-7 text-white md:text-base xl:text-lg">
              {sobre.map((paragrafo) => (
                <p key={paragrafo}>{paragrafo}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="flex flex-col justify-center gap-6">
          <ul className="flex justify-center gap-4">
            {REDES.map(({ rotulo, href, Icon }) => (
              <li key={rotulo}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={rotulo}
                  className="flex size-[70px] items-center justify-center rounded-2xl border border-zinc-700 bg-[#0d1512] text-white transition-all duration-300 hover:border-primary hover:text-accent"
                >
                  <Icon className="size-8" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2">
            <a href={perfil.whatsappUrl} target="_blank" rel="noopener noreferrer" className={pillClass}>
              <WhatsappIcon className="size-5" />
              WhatsApp
            </a>
            <a href={`mailto:${perfil.email}`} className={pillClass}>
              <Mail className="size-5" />
              Enviar e-mail
            </a>
          </div>
        </Reveal>
      </div>

      <PageWatermark>Sobre</PageWatermark>
    </div>
  );
}
