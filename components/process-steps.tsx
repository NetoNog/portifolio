import { processo } from "@/lib/data";

/** As etapas de um projeto, numeradas e em sequência. */
export function ProcessSteps() {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {processo.map((etapa, idx) => (
        <li key={etapa.titulo} className="relative rounded-2xl border border-subtle bg-background p-6">
          <span className="font-mono text-sm font-medium text-foreground/60">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-xl font-semibold">{etapa.titulo}</h3>
          <p className="mt-2 leading-relaxed">{etapa.descricao}</p>
        </li>
      ))}
    </ol>
  );
}
