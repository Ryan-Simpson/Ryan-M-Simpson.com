"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LINKS = [
  { href: "#work", label: "Work", sectionId: "work" },
  { href: "#about", label: "About", sectionId: "about" },
  { href: "#contact", label: "Contact", sectionId: "contact" },
  { href: "/resume.pdf", label: "Resume", external: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = LINKS.map((l) => l.sectionId).filter(Boolean) as string[];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "flex items-center justify-between",
        "px-8 lg:px-16 h-14",
        "transition-colors duration-300",
        scrolled
          ? "bg-canvas/90 backdrop-blur-sm border-b border-signal/20"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <Link
        href="/"
        className="font-mono text-xs tracking-[0.2em] text-signal-dim hover:text-signal transition-colors"
        aria-label="Ryan Simpson — home"
      >
        RS
      </Link>

      <nav aria-label="Primary navigation">
        <ul className="flex items-center gap-6 lg:gap-8 list-none">
          {LINKS.map(({ href, label, external, sectionId }) => (
            <li key={href} className={external ? "hidden sm:list-item" : ""}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={[
                  "text-sm transition-colors",
                  activeSection === sectionId
                    ? "text-ink"
                    : "text-ink-muted hover:text-ink",
                ].join(" ")}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
