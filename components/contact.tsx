import Reveal from "@/components/reveal";

const LINKS = [
  { label: "Email", href: "mailto:1143rms@gmail.com", display: "1143rms@gmail.com" },
  { label: "GitHub", href: "https://github.com/Ryan-Simpson", display: "GitHub" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ryan-m-simpson/", display: "LinkedIn" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-40 px-8 lg:px-16 border-t border-edge"
      aria-labelledby="contact-heading"
    >
      <span
        className="absolute top-0 left-8 lg:left-16 -translate-y-1/2 font-mono text-[10px] tracking-[0.15em] text-ink-faint bg-canvas px-1"
        aria-hidden="true"
      >
        § 04
      </span>
      <div className="max-w-5xl">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase mb-12">
            Contact
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            id="contact-heading"
            className="text-3xl lg:text-5xl font-bold tracking-[-0.03em] text-ink leading-[1.05] mb-6 max-w-[20ch]"
          >
            Let&rsquo;s build something.
          </h2>
          <p className="text-base font-light text-ink-muted leading-relaxed mb-16 max-w-[48ch]">
            Open to internships, research positions, and full-time roles in
            robotics and autonomy.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <ul className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 list-none">
            {LINKS.map(({ label, href, display }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-3 text-sm text-ink-muted hover:text-ink transition-colors duration-200"
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] text-signal-dim uppercase group-hover:text-signal transition-colors duration-200">
                    {label}
                  </span>
                  <span className="w-px h-3 bg-signal/30" aria-hidden="true" />
                  <span>{display}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.24} className="mt-20 pt-6 border-t border-edge-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.15em] text-ink-faint">
            Ryan Simpson
          </p>
          <p className="font-mono text-[10px] tracking-[0.15em] text-ink-faint">
            {new Date().getFullYear()} · Robotics Software Engineer
          </p>
        </div>
      </Reveal>
    </section>
  );
}
