import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

type Props = {
  className?: string;
};

const iconVariants = {
  initial: { y: -18, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    y: 18,
    opacity: 0,
    transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ThemeToggle({ className = "" }: Props) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={isDark ? "Switch to light" : "Switch to dark"}
      className={[
        "relative inline-flex items-center justify-center",
        "h-10 w-10 rounded-full",
        "border border-ink/10 dark:border-surface/15",
        "bg-white/70 dark:bg-ink/50 backdrop-blur",
        "text-ink dark:text-surface",
        "hover:border-brand/40 dark:hover:border-brand/50",
        "transition",
        "overflow-hidden",
        className,
      ].join(" ")}
    >
      <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition">
        <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent dark:from-surface/10" />
      </span>

      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative z-10 text-[18px] leading-none"
        >
          {isDark ? (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
