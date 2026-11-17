import { Container } from "@/components/container";
import { projetos, totalDeTecnologias } from "@/lib/data";
import { fetchTotalRepos } from "@/lib/github";

type Numero = { valor: string; rotulo: string };

const doisDigitos = (n: number) => String(n).padStart(2, "0");

/** Números reais do portfólio: derivados do conteúdo e da API do GitHub. */
export async function StatsSection() {
  const totalRepos = await fetchTotalRepos();
  const emProducao = projetos.filter((projeto) => projeto.demoUrl).length;

  const numeros: Numero[] = [
    { valor: doisDigitos(projetos.length), rotulo: "Estudos de caso documentados" },
    { valor: doisDigitos(emProducao), rotulo: "Sites de clientes no ar" },
    { valor: doisDigitos(totalDeTecnologias), rotulo: "Tecnologias na stack" },
    ...(totalRepos !== null
      ? [{ valor: doisDigitos(totalRepos), rotulo: "Repositórios públicos no GitHub" }]
      : []),
  ];

  return (
    <section aria-label="Números do portfólio" className="border-y border-subtle bg-surface py-16 md:py-24">
      <Container>
        <dl className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {numeros.map((numero) => (
            <div
              key={numero.rotulo}
              className="flex flex-col items-center justify-center rounded-xl border border-dashed border-foreground/25 bg-background/60 px-4 py-10 text-center md:py-14"
            >
              <dt className="order-2 mt-2 text-sm md:text-base">{numero.rotulo}</dt>
              <dd className="order-1 text-4xl font-semibold text-foreground md:text-5xl">{numero.valor}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
