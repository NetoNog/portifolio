import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { SectionHeading } from "@/components/section-heading";
import { TechIcon } from "@/components/tech-icon";
import { tecnologias } from "@/lib/data";

export function StackSection() {
  const itens = tecnologias.flatMap((grupo) => grupo.itens);

  return (
    <section aria-labelledby="stack-titulo" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          id="stack-titulo"
          eyebrow="Ferramentas e habilidades"
          titulo="Tecnologias que uso no dia a dia"
          watermark="Stack"
        />

        <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:gap-5 lg:grid-cols-5">
          {itens.map((tec) => (
            <li
              key={tec.nome}
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-subtle bg-surface p-3 text-center"
            >
              <TechIcon icone={tec.icone} className="size-9 text-foreground md:size-11" />
              <span className="text-xs font-medium text-foreground sm:text-sm">{tec.nome}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <CtaLink href="/tecnologias" variant="outline">
            Como uso cada tecnologia
            <ArrowRight aria-hidden />
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
