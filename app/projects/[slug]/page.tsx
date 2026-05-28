import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, PROJECTS } from "@/lib/projects";
import Reveal from "@/components/reveal";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Ryan Simpson`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen pt-32 pb-40 px-8 lg:px-16">
      <div className="max-w-3xl">
        {/* Back */}
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] text-ink-faint hover:text-ink-muted transition-colors duration-200 uppercase mb-16"
          >
            ← Work
          </Link>
        </Reveal>

        {/* Domain + index */}
        <Reveal delay={0.06}>
          <div className="flex items-baseline gap-4 mb-6">
            <p className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase">
              {project.domain}
            </p>
            <p className="font-mono text-[11px] tracking-[0.15em] text-ink-faint">
              {project.index}
            </p>
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={0.1}>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-[-0.03em] text-ink leading-[0.95] mb-8">
            {project.title}
          </h1>
        </Reveal>

        {/* Tagline */}
        <Reveal delay={0.16}>
          <p className="text-base lg:text-lg font-light text-ink-muted leading-[1.8] max-w-[58ch] mb-16">
            {project.tagline}
          </p>
        </Reveal>

        {/* Metadata */}
        <Reveal delay={0.22}>
          <div className="border-t border-edge pt-8 mb-0 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-signal-dim uppercase mb-2">
                Year
              </p>
              <p className="text-sm font-light text-ink-muted">{project.year}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-signal-dim uppercase mb-2">
                Role
              </p>
              <p className="text-sm font-light text-ink-muted leading-relaxed">
                {project.role}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-signal-dim uppercase mb-2">
                Stack
              </p>
              <p className="text-sm font-light text-ink-muted leading-relaxed">
                {project.stack.join(" · ")}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Highlights */}
        <Reveal delay={0.28}>
          <div className="border-t border-edge mt-8 pt-8 mb-16">
            <p className="font-mono text-[10px] tracking-[0.2em] text-signal-dim uppercase mb-8">
              Technical Highlights
            </p>
            <ol className="list-none">
              {project.highlights.map((item, i) => (
                <li
                  key={i}
                  className={`flex gap-5 py-4 ${i === 0 ? "" : "border-t border-edge-subtle"}`}
                >
                  <span className="font-mono text-[11px] tracking-[0.12em] text-signal-dim w-6 shrink-0 tabular-nums pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-light text-ink-muted leading-[1.7]">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* GitHub CTA */}
        <Reveal delay={0.34}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm text-ink-muted hover:text-ink transition-colors duration-200 group"
          >
            <span className="font-mono text-[9px] tracking-[0.2em] text-signal-dim uppercase group-hover:text-signal transition-colors duration-200">
              GitHub
            </span>
            <span className="w-px h-3 bg-edge" aria-hidden="true" />
            <span>View Repository →</span>
          </a>
        </Reveal>
      </div>
    </main>
  );
}
