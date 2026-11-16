export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#060b09] via-[#0a110e] to-[#060b09]"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #6ee7b7 1px, transparent 1px), linear-gradient(to bottom, #6ee7b7 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute left-1/2 top-1/2 size-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[150px]" />
      <div className="absolute bottom-[5%] right-[5%] size-[450px] rounded-full bg-teal-500/10 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#060b09_100%)]" />
    </div>
  );
}
