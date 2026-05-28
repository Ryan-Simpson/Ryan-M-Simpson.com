import { ImageResponse } from "next/og";
import { getProject, PROJECTS } from "@/lib/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

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

        {/* Project block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              fontSize: 13,
              letterSpacing: "0.22em",
              color: "#c8842e",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            {project?.domain ?? "Project"} — {project?.index ?? ""}
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#e8e8ec",
              letterSpacing: "-0.03em",
              lineHeight: 0.92,
            }}
          >
            {project?.title ?? "Project"}
          </span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 300,
              color: "#6a6a7a",
              lineHeight: 1.55,
              maxWidth: 760,
            }}
          >
            {project?.tagline ?? ""}
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
            Ryan Simpson
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
