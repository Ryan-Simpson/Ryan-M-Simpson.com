import Reveal from "@/components/reveal";

const DOMAINS = [
  { name: "Autonomy",          proof: "ROS 2 · Jetson AGX Orin" },
  { name: "Perception",        proof: "VLP-16 · ZED X · RealSense D455" },
  { name: "SLAM",              proof: "RTAB-Map · LiDAR-ICP · loop closure" },
  { name: "LiDAR Processing",  proof: "300k+ pts/sec · Open3D" },
  { name: "Sensor Fusion",     proof: "LiDAR + cameras + IMU" },
  { name: "Path Planning",     proof: "kinodynamic planning · AVL-002" },
  { name: "Embedded Systems",  proof: "Arduino · CAN bus · PID firmware" },
  { name: "Simulation",        proof: "Gazebo · ROS 2 integration" },
  { name: "Digital Twins",     proof: "3D Gaussian Splatting · campus-scale" },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative py-32 px-8 lg:px-16 border-t border-edge"
      aria-labelledby="expertise-heading"
    >
      <span
        className="absolute top-0 left-8 lg:left-16 -translate-y-1/2 font-mono text-[10px] tracking-[0.15em] text-ink-faint bg-canvas px-1"
        aria-hidden="true"
      >
        § 03
      </span>
      <div className="max-w-5xl">
        <Reveal>
          <div className="flex items-baseline justify-between mb-10">
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

        <p className="text-sm font-light text-ink-faint leading-relaxed max-w-[55ch] mb-8">
          The full stack for an autonomous system, from sensing the world to acting in it.
        </p>

        <ol className="list-none" aria-label="Technical focus areas">
          {DOMAINS.map((domain, i) => (
            <li key={domain.name}>
              <Reveal delay={i * 0.04}>
                <div className={`group flex items-center gap-6 py-4 px-2 -mx-2 border-edge-subtle transition-colors duration-200 hover:bg-signal/5 ${i === 0 ? "" : "border-t"}`}>
                  <span className="font-mono text-[11px] tracking-[0.12em] text-signal w-6 shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-base font-normal text-ink-muted group-hover:text-ink transition-colors duration-200 tracking-[0.005em]">
                    {domain.name}
                  </span>
                  <span className="hidden md:block font-mono text-[10px] tracking-[0.05em] text-ink-faint group-hover:text-ink-muted transition-colors duration-200 text-right">
                    {domain.proof}
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
