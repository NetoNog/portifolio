/** Título decorativo, grande e esmaecido, fixo no canto inferior da página. */
export function PageWatermark({ children }: { children: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-16 right-6 z-0 hidden select-none md:block lg:right-10"
    >
      <span className="text-[45px] font-black uppercase tracking-tighter text-zinc-500 opacity-20">{children}</span>
    </div>
  );
}
