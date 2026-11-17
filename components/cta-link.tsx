import Link from "next/link";
import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ctaVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 text-base font-semibold transition-colors duration-200 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-foreground hover:bg-accent/85",
        outline:
          "border border-foreground/70 text-foreground hover:border-accent hover:text-accent",
        ghost: "px-0 text-foreground underline-offset-4 hover:text-accent hover:underline",
      },
      size: {
        md: "",
        sm: "min-h-11 px-4 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type CtaLinkProps = VariantProps<typeof ctaVariants> & {
  href: string;
  children: ReactNode;
  className?: string;
  /** Rótulo acessível quando o texto visível não é suficiente. */
  ariaLabel?: string;
};

/** Link com aparência de botão. Abre em nova aba quando o destino é externo. */
export function CtaLink({ href, children, variant, size, className, ariaLabel }: CtaLinkProps) {
  const classes = cn(ctaVariants({ variant, size }), className);
  const externo = /^https?:\/\//.test(href);

  if (externo) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={classes}>
        {children}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} aria-label={ariaLabel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {children}
    </Link>
  );
}
