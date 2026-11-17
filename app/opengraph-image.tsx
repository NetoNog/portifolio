import { ImageResponse } from "next/og";

export const alt = "José Nogueira — Sites, sistemas, APIs e automações sob medida";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0f172a",
          color: "#f8fafc",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "#38bdf8",
              color: "#0f172a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: 800,
            }}
          >
            JN
          </div>
          <span style={{ fontSize: "26px", fontWeight: 700 }}>José Nogueira</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              fontSize: "68px",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1.08,
              margin: 0,
              maxWidth: "980px",
            }}
          >
            Desenvolvedor Full Stack &amp; Automações
          </h1>
          <p style={{ fontSize: "28px", color: "#b2b6bd", margin: 0 }}>
            Sites, sistemas, APIs e automações sob medida
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {["React", "Next.js", "TypeScript", "PostgreSQL", "Automações"].map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "20px",
                fontWeight: 600,
                padding: "8px 18px",
                borderRadius: "8px",
                border: "1px solid rgba(248,250,252,0.12)",
                background: "rgba(56,189,248,0.1)", color: "#38bdf8",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
