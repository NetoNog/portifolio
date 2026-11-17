import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/brand-icons";
import { perfil } from "@/lib/data";
import { cn } from "@/lib/utils";

export const redesSociais = [
  { rotulo: "GitHub", href: perfil.github, Icon: GithubIcon },
  { rotulo: "LinkedIn", href: perfil.linkedin, Icon: LinkedinIcon },
  { rotulo: "WhatsApp", href: perfil.whatsappUrl, Icon: WhatsappIcon },
  { rotulo: "E-mail", href: `mailto:${perfil.email}`, Icon: Mail },
];

/** Botões redondos com os perfis e canais de contato. */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex gap-3", className)}>
      {redesSociais.map(({ rotulo, href, Icon }) => {
        const externo = !href.startsWith("mailto:");
        return (
          <li key={rotulo}>
            <a
              href={href}
              target={externo ? "_blank" : undefined}
              rel={externo ? "noopener noreferrer" : undefined}
              aria-label={rotulo}
              className="flex size-12 items-center justify-center rounded-full border border-subtle bg-surface text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="size-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
