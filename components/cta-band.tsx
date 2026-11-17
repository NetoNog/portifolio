import { ArrowRight } from "lucide-react";
import { WhatsappIcon } from "@/components/brand-icons";
import { CtaLink } from "@/components/cta-link";
import { perfil } from "@/lib/data";

/** Faixa de chamada para contato, usada ao fim das listas de projetos. */
export function CtaBand({ mostrarProjetos = true }: { mostrarProjetos?: boolean }) {
  return (
    <aside
      aria-labelledby="cta-titulo"
      className="flex flex-col gap-6 rounded-2xl border border-subtle bg-surface p-6 md:flex-row md:items-center md:justify-between md:p-10"
    >
      <div>
        <h2 id="cta-titulo" className="text-2xl font-semibold md:text-3xl">
          Tem um projeto em mente?
        </h2>
        <p className="mt-2">Estou disponível para freelas e projetos sob medida.</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        {mostrarProjetos && (
          <CtaLink href="/projetos" variant="outline">
            Mais projetos
            <ArrowRight aria-hidden />
          </CtaLink>
        )}
        <CtaLink href={perfil.whatsappUrl}>
          <WhatsappIcon />
          Fale comigo
        </CtaLink>
      </div>
    </aside>
  );
}
