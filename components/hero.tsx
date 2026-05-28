"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-svh flex flex-col justify-end pb-24 px-8 lg:px-16 overflow-hidden"
      aria-label="Introduction"
    >
      <DotGrid />

      <div className="relative z-10 max-w-4xl">
        <FadeUp delay={0.15}>
          <p className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase mb-10">
            Robotics Software Engineer
          </p>
        </FadeUp>

        <FadeUp delay={0.28}>
          <h1 className="text-[clamp(3.5rem,9vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.03em] text-ink mb-10">
            Ryan
            <br />
            Simpson
          </h1>
        </FadeUp>

        <FadeUp delay={0.42}>
          <p className="text-base lg:text-lg font-light text-ink-muted max-w-[50ch] leading-[1.75] tracking-[0.01em]">
            Building autonomy systems that reason about the physical world.
            Focused on perception, SLAM, and sensor fusion for real robots in
            unstructured environments.
          </p>
        </FadeUp>

        <FadeUp delay={0.54}>
          <div className="flex items-center gap-6 mt-12">
            <a
              href="#work"
              className="text-sm font-medium text-ink hover:text-signal transition-colors duration-200"
            >
              View Work
            </a>
            <span className="w-10 h-px bg-edge" aria-hidden="true" />
            <a
              href="#contact"
              className="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
            >
              Get in Touch
            </a>
            <span className="w-10 h-px bg-edge" aria-hidden="true" />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
            >
              Resume
            </a>
          </div>
        </FadeUp>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 right-8 lg:right-16 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.25em] text-ink-faint uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-edge origin-top"
        />
      </motion.div>
    </section>
  );
}

function DotGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none"
      aria-hidden="true"
      style={{
        backgroundImage:
          "radial-gradient(circle, oklch(0.92 0.005 240 / 0.08) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        backgroundPosition: "0 0",
      }}
    />
  );
}
