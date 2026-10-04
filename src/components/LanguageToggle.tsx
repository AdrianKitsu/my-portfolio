import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

type Props = {
  className?: string;
};

// Labels describe the language you'd switch *to*, written in that language.
const switchTo = {
  en: { short: "EN", label: "Switch to English" },
  fr: { short: "FR", label: "Passer au français" },
};

const labelVariants = {
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

export default function LanguageToggle({ className = "" }: Props) {
  const { lang, toggleLang } = useLanguage();
  const next = lang === "en" ? "fr" : "en";
  const { short, label } = switchTo[next];

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={label}
      title={label}
      lang={next}
      className={[
        "relative inline-flex shrink-0 items-center justify-center",
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
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={next}
          variants={labelVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative z-10 font-urw text-xs tracking-[0.12em]"
        >
          {short}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
