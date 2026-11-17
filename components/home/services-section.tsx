import { Check, Globe, LayoutDashboard, Plug, Workflow, type LucideIcon } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { servicos, type IconeServico } from "@/lib/data";

const ICONES: Record<IconeServico, LucideIcon> = {
  site: Globe,
  sistema: LayoutDashboard,
  api: Plug,
  automacao: Workflow,
};

export function ServicesSection() {
  return (
    <section aria-labelledby="servicos-titulo" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          id="servicos-titulo"
          eyebrow="O que eu ofereço"
          titulo="Software sob medida, do banco de dados à interface"
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((servico, idx) => {
            const Icon = ICONES[servico.icone];
            return (
              <li key={servico.titulo}>
                <Reveal delay={0.06 * idx} className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-subtle bg-surface p-6">
                    <span className="flex size-12 items-center justify-center rounded-xl border border-subtle bg-background text-foreground">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold">{servico.titulo}</h3>
                    <p className="mt-2 flex-1 leading-relaxed">{servico.descricao}</p>
                    <ul className="mt-6 space-y-2 border-t border-subtle pt-5 text-sm">
                      {servico.entregaveis.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <Check className="size-4 shrink-0 text-foreground" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
