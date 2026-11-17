import { Code, Gauge, MessagesSquare, ShieldCheck, type LucideIcon } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { diferenciais, type IconeDiferencial } from "@/lib/data";

const ICONES: Record<IconeDiferencial, LucideIcon> = {
  codigo: Code,
  seguranca: ShieldCheck,
  desempenho: Gauge,
  comunicacao: MessagesSquare,
};

export function WhyHireSection() {
  return (
    <section aria-labelledby="diferenciais-titulo" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          id="diferenciais-titulo"
          eyebrow="Diferenciais"
          titulo="Por que trabalhar comigo"
          watermark="Diferenciais"
        />

        <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {diferenciais.map((item, idx) => {
            const Icon = ICONES[item.icone];
            return (
              <li key={item.titulo}>
                <Reveal delay={0.06 * idx} className="flex flex-col items-center text-center">
                  <div aria-hidden className="flex size-40 items-center justify-center rounded-full border border-subtle">
                    <div className="flex size-24 items-center justify-center rounded-full bg-surface text-foreground">
                      <Icon className="size-9" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold">{item.titulo}</h3>
                  <p className="mt-3 leading-relaxed">{item.descricao}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
