import Image from "next/image";
import Link from "next/link";
import { WhatsappIcon } from "@/components/brand-icons";
import { Reveal } from "@/components/reveal";
import { perfil } from "@/lib/data";

export default function Home() {
  return (
    <section className="relative flex min-h-[calc(100dvh-200px)] w-full max-w-7xl flex-col items-center justify-between gap-10 px-0 py-8 md:flex-row md:px-10">
      <Reveal className="z-10 flex-1 space-y-8 text-center md:text-left">
        <h1 className="text-[2.5rem] font-extrabold leading-tight tracking-tighter text-white sm:text-5xl md:text-7xl">
          Desenvolvedor <br />
          <span className="text-zinc-300">
            Full Stack <span className="text-primary">&amp;</span>
          </span>{" "}
          <br />
          <span className="text-zinc-300">Automações</span>
        </h1>

        <p className="mx-auto max-w-lg text-lg text-zinc-300 md:mx-0 md:text-xl md:text-zinc-400">{perfil.resumo}</p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
          <Link
            href="/projetos"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary px-10 text-lg font-semibold text-zinc-200 transition-all duration-300 hover:bg-white hover:text-black active:bg-white active:text-black"
          >
            Ver projetos
          </Link>
          <a
            href={perfil.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-zinc-700 px-6 text-lg font-semibold text-zinc-300 transition-colors hover:text-accent active:bg-white/5 sm:border-transparent"
          >
            <WhatsappIcon className="size-5" />
            Pedir orçamento
          </a>
        </div>
      </Reveal>

      <div className="absolute inset-0 z-0 flex items-center justify-center md:justify-end" aria-hidden>
        {/* A máscara dissolve as bordas da foto no fundo, sem retângulo visível. */}
        <div
          className="relative h-full w-full max-w-[760px] opacity-40 md:opacity-100"
          style={{
            maskImage: "radial-gradient(ellipse 48% 58% at 56% 46%, #000 40%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 48% 58% at 56% 46%, #000 40%, transparent 85%)",
          }}
        >
          <Image
            src="/foto-hero.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 760px"
            className="object-cover object-[50%_25%] grayscale brightness-90"
          />
        </div>
      </div>
    </section>
  );
}
