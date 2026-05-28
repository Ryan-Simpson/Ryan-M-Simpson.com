import Reveal from "@/components/reveal";
import { PROJECTS as PROJECT_DATA } from "@/lib/projects";

interface ProjectCard {
  index: string;
  domain: string;
  title: string;
  description: string;
  year: string;
  stackPreview: string[];
  metric: string;
  visual: React.ReactNode;
  href: string;
}

const VISUALS: Record<string, React.ReactNode> = {
  "avl-slam": <LidarFovSVG />,
  "velodyne-vlp16-decoder": <CoordFrameSVG />,
  "lewitt-lidar": <PathTraceSVG />,
};

const PROJECTS: ProjectCard[] = PROJECT_DATA.map((p) => ({
  index: p.index,
  domain: p.domain,
  title: p.title,
  description: p.description,
  year: p.year,
  stackPreview: p.stack.slice(0, 3),
  metric: p.metric,
  visual: VISUALS[p.slug],
  href: `/projects/${p.slug}`,
}));

export default function Projects() {
  return (
    <section
      id="work"
      className="relative py-32 px-8 lg:px-16 border-t border-edge"
      aria-labelledby="projects-heading"
    >
      <span
        className="absolute top-0 left-8 lg:left-16 -translate-y-1/2 font-mono text-[10px] tracking-[0.15em] text-ink-faint bg-canvas px-1"
        aria-hidden="true"
      >
        § 01
      </span>
      <div className="max-w-5xl">
        <Reveal>
          <div className="flex items-baseline justify-between mb-16">
            <p
              id="projects-heading"
              className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase"
            >
              Selected Work
            </p>
            <p className="font-mono text-[11px] tracking-[0.15em] text-ink-faint">
              0{PROJECTS.length} projects
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_3fr] gap-4 lg:gap-5">
          {/* Primary — large feature slot */}
          <Reveal>
            <ProjectCard project={PROJECTS[0]} size="primary" />
          </Reveal>

          {/* Secondary — stacked */}
          <div className="flex flex-col gap-4 lg:gap-5">
            <Reveal delay={0.1}>
              <ProjectCard project={PROJECTS[1]} size="secondary" />
            </Reveal>
            <Reveal delay={0.18}>
              <ProjectCard project={PROJECTS[2]} size="secondary" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  size,
}: {
  project: ProjectCard;
  size: "primary" | "secondary";
}) {
  return (
    <a
      href={project.href}
      className={[
        "group block border border-edge bg-surface",
        "hover:border-signal/40 transition-colors duration-300",
        "overflow-hidden",
        size === "primary" ? "lg:min-h-[480px]" : "flex-1",
      ].join(" ")}
      aria-label={`View project: ${project.title}`}
    >
      {/* Visual area */}
      <div
        className={[
          "w-full bg-canvas flex flex-col",
          "border-b border-edge group-hover:border-signal/25 transition-colors duration-300",
          size === "primary" ? "h-52 lg:h-60" : "h-36",
        ].join(" ")}
        aria-hidden="true"
      >
        <div className="flex-1 flex items-center justify-center">
          {project.visual}
        </div>
        <div className="border-t border-edge px-5 py-2 shrink-0">
          <p className="font-mono text-[10px] tracking-[0.06em] text-ink-faint">
            {project.metric}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-7">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[10px] tracking-[0.2em] text-signal-dim uppercase bg-signal/8 px-1.5 py-0.5">
            {project.domain}
          </span>
          <span className="font-mono text-[10px] tracking-[0.15em] text-ink-faint">
            {project.index}
          </span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-[10px] tracking-[0.08em] text-ink-faint">
            {project.year}
          </span>
          <span className="text-ink-faint/40 text-[10px]" aria-hidden="true">·</span>
          <span className="font-mono text-[10px] tracking-[0.06em] text-ink-faint">
            {project.stackPreview.join(" · ")}
          </span>
        </div>
        <h3
          className={[
            "font-semibold text-ink leading-snug tracking-[-0.01em] mb-3",
            size === "primary" ? "text-xl lg:text-2xl" : "text-base lg:text-lg",
          ].join(" ")}
        >
          {project.title}
        </h3>
        <p className={`font-light text-ink-muted leading-[1.7] max-w-[52ch] ${size === "primary" ? "text-base" : "text-sm"}`}>
          {project.description}
        </p>
        <p className="mt-5 text-xs font-medium text-signal-dim group-hover:text-signal transition-colors duration-200">
          View Project →
        </p>
      </div>
    </a>
  );
}

function LidarFovSVG() {
  return (
    <svg
      viewBox="0 0 200 160"
      className="w-full max-w-[220px] opacity-70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Sensor origin */}
      <circle cx="100" cy="100" r="3" fill="oklch(0.50 0.14 62)" />
      <circle cx="100" cy="100" r="6" stroke="oklch(0.50 0.14 62)" strokeWidth="0.5" opacity="0.5" />

      {/* FOV arcs */}
      {[30, 55, 80].map((r) => (
        <path
          key={r}
          d={`M ${100 - r * Math.sin(Math.PI * 0.6)} ${100 - r * Math.cos(Math.PI * 0.6)} A ${r} ${r} 0 0 1 ${100 + r * Math.sin(Math.PI * 0.6)} ${100 - r * Math.cos(Math.PI * 0.6)}`}
          stroke="oklch(0.25 0.008 50)"
          strokeWidth="0.5"
          opacity="0.4"
        />
      ))}

      {/* Scan rays */}
      {Array.from({ length: 9 }, (_, i) => {
        const angle = -0.6 * Math.PI + (i / 8) * 1.2 * Math.PI;
        const x2 = 100 + 80 * Math.sin(angle);
        const y2 = 100 - 80 * Math.cos(angle);
        return (
          <line
            key={i}
            x1="100" y1="100"
            x2={x2} y2={y2}
            stroke="oklch(0.25 0.008 50)"
            strokeWidth="0.4"
            opacity="0.25"
          />
        );
      })}

      {/* Sample points at varying distances */}
      {[
        [100 + 28 * Math.sin(-0.5), 100 - 28 * Math.cos(-0.5)],
        [100 + 52 * Math.sin(-0.25), 100 - 52 * Math.cos(-0.25)],
        [100 + 75 * Math.sin(0), 100 - 75 * Math.cos(0)],
        [100 + 40 * Math.sin(0.25), 100 - 40 * Math.cos(0.25)],
        [100 + 62 * Math.sin(0.5), 100 - 62 * Math.cos(0.5)],
        [100 + 30 * Math.sin(0.75), 100 - 30 * Math.cos(0.75)],
        [100 + 55 * Math.sin(-0.75), 100 - 55 * Math.cos(-0.75)],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.5" fill="oklch(0.50 0.14 62)" opacity="0.7" />
      ))}

      {/* Axis ticks */}
      <line x1="100" y1="8" x2="100" y2="16" stroke="oklch(0.25 0.008 50)" strokeWidth="0.5" opacity="0.3" />
      <line x1="8" y1="100" x2="16" y2="100" stroke="oklch(0.25 0.008 50)" strokeWidth="0.5" opacity="0.3" />
      <line x1="192" y1="100" x2="184" y2="100" stroke="oklch(0.25 0.008 50)" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

function CoordFrameSVG() {
  return (
    <svg
      viewBox="0 0 120 100"
      className="w-full max-w-[140px] opacity-70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Origin */}
      <circle cx="45" cy="65" r="2.5" fill="oklch(0.25 0.008 50)" />

      {/* X axis — right */}
      <line x1="45" y1="65" x2="95" y2="65" stroke="oklch(0.50 0.14 62)" strokeWidth="1" />
      <polygon points="95,62 102,65 95,68" fill="oklch(0.50 0.14 62)" />
      <text x="105" y="69" fill="oklch(0.50 0.14 62)" fontSize="9" fontFamily="monospace">x</text>

      {/* Y axis — up */}
      <line x1="45" y1="65" x2="45" y2="15" stroke="oklch(0.25 0.008 50)" strokeWidth="1" opacity="0.6" />
      <polygon points="42,15 45,8 48,15" fill="oklch(0.25 0.008 50)" opacity="0.6" />
      <text x="38" y="6" fill="oklch(0.25 0.008 50)" fontSize="9" fontFamily="monospace" opacity="0.6">y</text>

      {/* Z axis — toward viewer (isometric) */}
      <line x1="45" y1="65" x2="18" y2="88" stroke="oklch(0.25 0.008 50)" strokeWidth="1" opacity="0.35" />
      <polygon points="16,91 13,84 20,86" fill="oklch(0.25 0.008 50)" opacity="0.35" />
      <text x="6" y="97" fill="oklch(0.25 0.008 50)" fontSize="9" fontFamily="monospace" opacity="0.35">z</text>

      {/* Grid plane suggestion */}
      {[10, 20, 30].map((d) => (
        <line
          key={d}
          x1={45 + d} y1="65"
          x2={45 + d - 18} y2="88"
          stroke="oklch(0.25 0.008 50)"
          strokeWidth="0.4"
          opacity="0.12"
        />
      ))}
    </svg>
  );
}

function PathTraceSVG() {
  const waypoints = [
    [20, 75],
    [45, 55],
    [70, 60],
    [90, 35],
    [115, 45],
    [140, 25],
  ];

  const pathD = waypoints
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`)
    .join(" ");

  return (
    <svg
      viewBox="0 0 160 100"
      className="w-full max-w-[180px] opacity-70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Trajectory */}
      <path
        d={pathD}
        stroke="oklch(0.25 0.008 50)"
        strokeWidth="1"
        opacity="0.5"
        strokeDasharray="4 3"
      />

      {/* Smoothed path */}
      <path
        d={`M ${waypoints[0][0]} ${waypoints[0][1]} C ${waypoints[0][0] + 15} ${waypoints[0][1] - 5}, ${waypoints[1][0] - 10} ${waypoints[1][1] + 5}, ${waypoints[1][0]} ${waypoints[1][1]} S ${waypoints[2][0] - 5} ${waypoints[2][1] - 5}, ${waypoints[2][0]} ${waypoints[2][1]}`}
        stroke="oklch(0.50 0.14 62)"
        strokeWidth="1.2"
        opacity="0.6"
      />

      {/* Waypoints */}
      {waypoints.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="3.5" stroke="oklch(0.25 0.008 50)" strokeWidth="0.8" opacity="0.5" />
          {i === 0 && <circle cx={x} cy={y} r="2" fill="oklch(0.50 0.14 62)" />}
          {i === waypoints.length - 1 && (
            <>
              <circle cx={x} cy={y} r="3.5" fill="oklch(0.50 0.14 62)" opacity="0.2" />
              <circle cx={x} cy={y} r="1.5" fill="oklch(0.50 0.14 62)" />
            </>
          )}
        </g>
      ))}

      {/* Robot position indicator */}
      <circle cx={waypoints[2][0]} cy={waypoints[2][1]} r="6" stroke="oklch(0.50 0.14 62)" strokeWidth="0.5" opacity="0.3" />
      <circle cx={waypoints[2][0]} cy={waypoints[2][1]} r="10" stroke="oklch(0.50 0.14 62)" strokeWidth="0.4" opacity="0.15" />

      {/* Grid */}
      {[25, 50, 75].map((y) => (
        <line key={y} x1="0" y1={y} x2="160" y2={y} stroke="oklch(0.25 0.008 50)" strokeWidth="0.3" opacity="0.1" />
      ))}
      {[40, 80, 120].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="100" stroke="oklch(0.25 0.008 50)" strokeWidth="0.3" opacity="0.1" />
      ))}
    </svg>
  );
}
