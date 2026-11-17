import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  titulo: string;
  descricao?: string;
  /** Palavra gigante e vazada exibida atrás do título. */
  watermark?: string;
  alinhamento?: "centro" | "esquerda";
  /** Nível do título: h1 nas páginas internas, h2 nas seções. */
  como?: "h1" | "h2";
};

export function SectionHeading({
  id,
  eyebrow,
  titulo,
  descricao,
  watermark,
  alinhamento = "centro",
  como: Titulo = "h2",
}: SectionHeadingProps) {
  const centro = alinhamento === "centro";

  return (
    <header className={cn("relative mb-12 md:mb-16", centro && "text-center")}>
      {watermark && (
        <span
          aria-hidden
          className={cn(
            "watermark pointer-events-none absolute -top-8 select-none whitespace-nowrap text-6xl font-bold uppercase leading-none tracking-tight sm:text-8xl md:-top-14 md:text-[9rem]",
            centro ? "left-1/2 -translate-x-1/2" : "-left-2",
          )}
        >
          {watermark}
        </span>
      )}
      <p className="relative text-base font-medium md:text-lg">{eyebrow}</p>
      <Titulo
        id={id}
        className={cn(
          "relative mt-3 text-3xl font-semibold leading-tight md:text-[2.5rem]",
          centro && "mx-auto max-w-3xl",
        )}
      >
        {titulo}
      </Titulo>
      {descricao && (
        <p className={cn("relative mt-4 max-w-2xl text-base leading-relaxed md:text-lg", centro && "mx-auto")}>
          {descricao}
        </p>
      )}
    </header>
  );
}
