import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/brand-icons";
import { perfil } from "@/lib/data";

const LINKS = [
  { rotulo: "GitHub", href: perfil.github, Icon: GithubIcon },
  { rotulo: "LinkedIn", href: perfil.linkedin, Icon: LinkedinIcon },
  { rotulo: "WhatsApp", href: perfil.whatsappUrl, Icon: WhatsappIcon },
  { rotulo: "E-mail", href: `mailto:${perfil.email}`, Icon: Mail },
];

export function SocialAside() {
  return (
    <aside
      aria-label="Redes e contato"
      className="fixed bottom-24 left-10 z-50 hidden flex-col gap-6 text-zinc-400 lg:flex"
    >
      {LINKS.map(({ rotulo, href, Icon }) => (
        <a
          key={rotulo}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={rotulo}
          className="transition-colors hover:text-accent"
        >
          <Icon className="size-6" />
        </a>
      ))}
    </aside>
  );
}
