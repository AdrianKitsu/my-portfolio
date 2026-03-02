import { useEffect, useMemo, useState } from "react";

export type Theme = "light" | "dark";
const STORAGE_KEY = "theme";

function getInitialTheme(): Theme {
  const stored = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? null;
  if (stored === "light" || stored === "dark") return stored;

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark ? "dark" : "light";
}

export function useTheme() {
  const initial = useMemo(() => {
    if (typeof window === "undefined") return "light" as Theme;
    return getInitialTheme();
  }, []);

  const [theme, setTheme] = useState<Theme>(initial);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, setTheme, toggleTheme };
}
