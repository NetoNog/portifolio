import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/brand-icons";
import { Container } from "@/components/container";
import { navegacao, perfil } from "@/lib/data";

const CONTATOS = [
  { rotulo: "E-mail", valor: perfil.email, href: `mailto:${perfil.email}`, Icon: Mail },
  { rotulo: "WhatsApp", valor: "Conversar agora", href: perfil.whatsappUrl, Icon: WhatsappIcon },
  { rotulo: "LinkedIn", valor: "in/netonog", href: perfil.linkedin, Icon: LinkedinIcon },
  { rotulo: "GitHub", valor: perfil.github.replace("https://", ""), href: perfil.github, Icon: GithubIcon },
];

export function SiteFooter() {
  const ano = new Date().getFullYear();

  return (
    <footer id="contato" className="border-t border-subtle bg-surface pb-24 md:pb-0">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr] md:py-20">
        <div>
          <h2 className="text-3xl font-semibold md:text-[2.5rem]">Vamos conversar</h2>
          <p className="mt-4 max-w-md leading-relaxed">
            Tem um projeto, um processo para automatizar ou um sistema que precisa de manutenção? Me conte o
            contexto e eu respondo com um caminho técnico e uma estimativa.
          </p>

          <ul className="mt-8 space-y-4">
            {CONTATOS.map(({ rotulo, valor, href, Icon }) => {
              const externo = !href.startsWith("mailto:");
              return (
                <li key={rotulo}>
                  <a
                    href={href}
                    target={externo ? "_blank" : undefined}
                    rel={externo ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-subtle bg-background text-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-sm">{rotulo}</span>
                      <span className="block font-medium text-foreground transition-colors group-hover:text-accent">
                        {valor}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col justify-between gap-10 md:items-end">
          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-medium transition-colors hover:text-accent">
                    {item.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="flex items-center gap-2 text-sm">
            <MapPin className="size-4" aria-hidden />
            {perfil.local}
          </p>
        </div>
      </Container>

      <div className="border-t border-subtle">
        <Container className="py-6 text-sm">
          © {ano} {perfil.nome}. Desenvolvido com Next.js, TypeScript e Tailwind CSS.
        </Container>
      </div>
    </footer>
  );
}
