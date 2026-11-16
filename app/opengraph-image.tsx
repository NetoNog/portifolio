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
          background: "#0a110e",
          color: "#f4f4f5",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "#10b981",
              color: "#04130d",
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
          <p style={{ fontSize: "28px", color: "#a1a1aa", margin: 0 }}>
            Sites, sistemas, APIs e automações sob medida
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {["React", "Next.js", "Node.js", "TypeScript", "Automações"].map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "20px",
                fontWeight: 600,
                padding: "8px 18px",
                borderRadius: "8px",
                border: "1px solid #3f3f46",
                background: "#16201b",
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
