import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ryan Simpson — Robotics Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f1014",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Monogram */}
        <div style={{ display: "flex" }}>
          <span
            style={{
              fontSize: 13,
              letterSpacing: "0.22em",
              color: "#c8842e",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            RS
          </span>
        </div>

        {/* Name block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span
            style={{
              fontSize: 13,
              letterSpacing: "0.22em",
              color: "#c8842e",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Robotics Software Engineer
          </span>
          <span
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: "#e8e8ec",
              letterSpacing: "-0.03em",
              lineHeight: 0.88,
            }}
          >
            Ryan
            {"\n"}Simpson
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: 12,
              letterSpacing: "0.15em",
              color: "#44444e",
              fontFamily: "monospace",
            }}
          >
            ryan-m-simpson.com
          </span>
          <span
            style={{
              fontSize: 12,
              letterSpacing: "0.15em",
              color: "#44444e",
              fontFamily: "monospace",
            }}
          >
            AVL · Cal Poly Pomona
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
