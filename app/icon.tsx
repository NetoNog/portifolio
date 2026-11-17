import { ImageResponse } from "next/og";

export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0f172a", border: "2px solid #38bdf8",
          color: "#f8fafc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          fontSize: "24px",
          fontWeight: 800,
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "-1px",
        }}
      >
        JN
      </div>
    ),
    { ...size }
  );
}
