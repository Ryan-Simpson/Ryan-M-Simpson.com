import Reveal from "@/components/reveal";

const DOMAINS = [
  "Autonomy",
  "Perception",
  "SLAM",
  "LiDAR Processing",
  "Sensor Fusion",
  "Path Planning",
  "Embedded Systems",
  "Simulation",
  "Digital Twins",
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-32 px-8 lg:px-16 border-t border-edge"
      aria-labelledby="expertise-heading"
    >
      <div className="max-w-5xl">
        <Reveal>
          <div className="flex items-baseline justify-between mb-16">
            <p
              id="expertise-heading"
              className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase"
            >
              Focus Areas
            </p>
            <p className="font-mono text-[11px] tracking-[0.15em] text-ink-faint">
              0{DOMAINS.length} domains
            </p>
          </div>
        </Reveal>

        <ol className="list-none" aria-label="Technical focus areas">
          {DOMAINS.map((domain, i) => (
            <li key={domain}>
              <Reveal delay={i * 0.04}>
                <div className={`group flex items-center gap-6 py-5 border-edge-subtle ${i === 0 ? "" : "border-t"}`}>
                  <span className="font-mono text-[11px] tracking-[0.12em] text-signal-dim w-6 shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base lg:text-lg font-light text-ink-muted group-hover:text-ink transition-colors duration-200 tracking-[0.005em]">
                    {domain}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
