"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          ? "bg-canvas/90 backdrop-blur-sm border-b border-edge"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <Link
        href="/"
        className="font-mono text-xs tracking-[0.2em] text-ink-muted hover:text-ink transition-colors"
        aria-label="Ryan Simpson — home"
      >
        RS
      </Link>

      <nav aria-label="Primary navigation">
        <ul className="flex items-center gap-8 list-none">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-ink-muted hover:text-ink transition-colors"
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
