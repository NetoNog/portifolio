import { cn } from "@/lib/utils";

/** Etiqueta de tecnologia: fundo translúcido do acento e texto no acento. */
export function TechBadge({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TechBadgeList({ itens, className }: { itens: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)} aria-label="Tecnologias">
      {itens.map((item) => (
        <li key={item}>
          <TechBadge>{item}</TechBadge>
        </li>
      ))}
    </ul>
  );
}
