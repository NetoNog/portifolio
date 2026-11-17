import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/home/hero";
import { ServicesSection } from "@/components/home/services-section";
import { StackSection } from "@/components/home/stack-section";
import { StatsSection } from "@/components/home/stats-section";
import { WhyHireSection } from "@/components/home/why-hire-section";
import { ProcessSteps } from "@/components/process-steps";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projetosEmDestaque } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <StatsSection />

      <section aria-labelledby="projetos-titulo" className="py-20 md:py-28">
        <Container>
          <SectionHeading
            id="projetos-titulo"
            eyebrow="Portfólio"
            titulo="Projetos recentes"
            watermark="Projetos"
          />
          <ul className="space-y-6">
            {projetosEmDestaque.map((projeto, idx) => (
              <li key={projeto.slug}>
                <Reveal delay={0.05 * idx}>
                  <ProjectCard projeto={projeto} />
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <CtaBand />
          </div>
        </Container>
      </section>

      <WhyHireSection />

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

      <StackSection />
    </>
  );
}
