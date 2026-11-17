import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";
import { WhatsappIcon } from "@/components/brand-icons";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import { perfil } from "@/lib/data";

const STACK_PRINCIPAL = ["Next.js", "TypeScript", "PostgreSQL"];

/** Foto com anéis concêntricos e detalhes geométricos, como na referência de layout. */
function HeroPortrait() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
      <div aria-hidden className="absolute inset-0 rounded-full border border-subtle" />
      <div aria-hidden className="absolute inset-[13%] rounded-full border border-subtle" />
      <div aria-hidden className="absolute inset-[27%] rounded-full border border-subtle" />

      <div className="absolute inset-x-[16%] bottom-[4%] top-[10%] overflow-hidden rounded-[2rem] border border-subtle bg-surface">
        <Image
          src="/foto-hero.jpg"
          alt={`Foto de ${perfil.nome}`}
          fill
          priority
          sizes="(max-width: 768px) 70vw, 340px"
          className="object-cover object-[50%_20%]"
        />
      </div>

      <Plus aria-hidden className="absolute right-[14%] top-[3%] size-8 text-foreground/50" strokeWidth={1.5} />
      <span aria-hidden className="absolute right-[8%] top-[28%] size-9 rounded-full border border-foreground/40" />

      <div className="absolute -bottom-2 left-0 rounded-xl border border-subtle bg-surface/95 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur sm:left-[2%]">
        <p className="text-xs font-medium">Stack principal</p>
        <p className="mt-0.5 font-mono text-sm text-foreground">{STACK_PRINCIPAL.join(" · ")}</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="pb-20 pt-12 md:pb-28 md:pt-20">
      <Container className="grid items-center gap-14 md:grid-cols-[1.1fr_1fr] md:gap-10">
        <Reveal>
          <p className="text-2xl font-semibold text-foreground md:text-4xl">Olá, eu sou</p>
          <h1 id="hero-titulo" className="mt-2 text-[2.75rem] font-semibold leading-[1.1] md:text-[3.5rem]">
            {perfil.nome}
          </h1>
          <p className="mt-3 text-lg font-medium md:text-xl">
            {perfil.cargo} · {perfil.especialidade}
          </p>

          <span aria-hidden className="mt-8 block h-px w-20 bg-foreground/60" />
          <p className="mt-5 max-w-xl text-base leading-relaxed md:text-lg">{perfil.resumo}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={perfil.whatsappUrl}>
              <WhatsappIcon />
              Pedir orçamento
            </CtaLink>
            <CtaLink href="/projetos" variant="outline">
              Ver projetos
              <ArrowRight aria-hidden />
            </CtaLink>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <p className="font-semibold text-foreground">Me encontre em</p>
            <SocialLinks />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <HeroPortrait />
        </Reveal>
      </Container>
    </section>
  );
}
