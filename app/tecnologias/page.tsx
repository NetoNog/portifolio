import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TechIcon } from "@/components/tech-icon";
import { projetosComTecnologia, tecnologias } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tecnologias",
  description:
    "Stack de José Nogueira em front-end, back-end, banco de dados, infraestrutura e automação, com os projetos em que cada tecnologia foi usada.",
};

export default function TecnologiasPage() {
  return (
    <div className="pb-20 pt-14 md:pb-28 md:pt-20">
      <Container>
        <SectionHeading
          id="tecnologias-titulo"
          como="h1"
          alinhamento="esquerda"
          eyebrow="Ferramentas e habilidades"
          titulo="Stack técnica"
          descricao="As tecnologias com que trabalho, o que resolvo com cada uma e em quais projetos elas estão em produção ou em código aberto."
          watermark="Stack"
        />

        <div className="space-y-16 md:space-y-20">
          {tecnologias.map((grupo, gIdx) => (
            <section key={grupo.categoria} aria-labelledby={`grupo-${gIdx}`}>
              <div className="mb-6 flex flex-col gap-1 border-b border-subtle pb-4 md:flex-row md:items-end md:justify-between">
                <h2 id={`grupo-${gIdx}`} className="text-2xl font-semibold md:text-3xl">
                  <span className="mr-3 font-mono text-lg text-foreground/50">{String(gIdx + 1).padStart(2, "0")}</span>
                  {grupo.categoria}
                </h2>
                <p>{grupo.descricao}</p>
              </div>

              <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
                {grupo.itens.map((tec, idx) => {
                  const usadoEm = projetosComTecnologia(tec.nome);
                  return (
                    <li key={tec.nome}>
                      <Reveal delay={0.04 * idx} className="h-full">
                        <article className="flex h-full gap-5 rounded-2xl border border-subtle bg-surface p-5 md:p-6">
                          <span className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-subtle bg-background text-foreground">
                            <TechIcon icone={tec.icone} className="size-7" />
                          </span>
                          <div className="min-w-0">
                            <h3 className="text-lg font-semibold">{tec.nome}</h3>
                            <p className="mt-1.5 leading-relaxed">{tec.descricao}</p>
                            {usadoEm.length > 0 && (
                              <p className="mt-3 text-sm">
                                <span className="font-medium text-foreground">Usado em: </span>
                                {usadoEm.map((projeto, pIdx) => (
                                  <span key={projeto.slug}>
                                    {pIdx > 0 && ", "}
                                    <Link
                                      href={`/projetos/${projeto.slug}`}
                                      className="underline decoration-subtle underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                                    >
                                      {projeto.nome}
                                    </Link>
                                  </span>
                                ))}
                              </p>
                            )}
                          </div>
                        </article>
                      </Reveal>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
