import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import { WhatsappIcon } from "@/components/brand-icons";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { CtaLink } from "@/components/cta-link";
import { ProcessSteps } from "@/components/process-steps";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { perfil, servicos, sobre, tecnologias } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Quem é José Nogueira, como ele trabalha e como entrar em contato.",
};

/** Cartão em formato de código com o resumo profissional. */
function DevProfileCard() {
  const stack = tecnologias
    .flatMap((grupo) => grupo.itens)
    .slice(0, 6)
    .map((tec) => tec.nome);

  const campos: [string, string][] = [
    ["nome", perfil.nome],
    ["cargo", perfil.cargo],
    ["atendimento", perfil.local],
  ];

  return (
    <div className="rounded-2xl border border-subtle bg-background p-5 md:p-6">
      <div aria-hidden className="mb-4 flex items-center gap-1.5">
        <span className="size-2.5 rounded-full bg-foreground/25" />
        <span className="size-2.5 rounded-full bg-foreground/25" />
        <span className="size-2.5 rounded-full bg-foreground/25" />
        <span className="ml-2 font-mono text-xs">dev-profile.ts</span>
      </div>
      <pre className="overflow-x-auto font-mono text-[13px] leading-7 md:text-sm">
        <code>
          <span className="text-foreground/60">const</span> <span className="text-foreground">dev</span> = {"{\n"}
          {campos.map(([chave, valor]) => (
            <span key={chave}>
              {"  "}
              {chave}: <span className="text-foreground">&quot;{valor}&quot;</span>,{"\n"}
            </span>
          ))}
          {"  "}stack: [{"\n"}
          {stack.map((nome) => (
            <span key={nome}>
              {"    "}
              <span className="text-foreground">&quot;{nome}&quot;</span>,{"\n"}
            </span>
          ))}
          {"  "}],{"\n"}
          {"}"} <span className="text-foreground/60">as const</span>;
        </code>
      </pre>
    </div>
  );
}

export default function SobrePage() {
  return (
    <>
      <section aria-labelledby="sobre-titulo" className="pb-16 pt-14 md:pb-24 md:pt-20">
        <Container className="grid gap-12 lg:grid-cols-[22rem_1fr] lg:gap-16">
          <Reveal className="space-y-6">
            <div className="relative mx-auto aspect-square w-full max-w-[22rem] overflow-hidden rounded-[2rem] border border-subtle bg-surface">
              <Image
                src="/foto-perfil.jpg"
                alt={`Foto de ${perfil.nome}`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 352px"
                className="object-cover"
              />
            </div>
            <DevProfileCard />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg font-medium">Sobre mim</p>
            <h1 id="sobre-titulo" className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              {perfil.nome}
            </h1>
            <p className="mt-2 text-lg font-medium">
              {perfil.cargo} · {perfil.especialidade}
            </p>

            <div className="mt-8 space-y-5 text-base leading-relaxed md:text-lg">
              {sobre.map((paragrafo) => (
                <p key={paragrafo}>{paragrafo}</p>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-semibold">O que eu faço</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {servicos.map((servico) => (
                <li key={servico.titulo} className="rounded-xl border border-subtle bg-surface p-5">
                  <h3 className="font-semibold">{servico.titulo}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed">{servico.descricao}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={perfil.whatsappUrl}>
                <WhatsappIcon />
                Conversar no WhatsApp
              </CtaLink>
              <CtaLink href={`mailto:${perfil.email}`} variant="outline">
                <Mail aria-hidden />
                Enviar e-mail
              </CtaLink>
            </div>
            <SocialLinks className="mt-8" />
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="processo-titulo" className="border-y border-subtle bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading
            id="processo-titulo"
            eyebrow="Processo"
            titulo="Como um projeto acontece"
            descricao="Etapas claras, entregas parciais e nenhuma surpresa no fim."
          />
          <ProcessSteps />
        </Container>
      </section>

      <Container className="py-20 md:py-28">
        <CtaBand />
      </Container>
    </>
  );
}
