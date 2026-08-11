"use client";
import { Moon, Sun, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const next = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = next ? "dark" : "light";
    setDark(next);
    const onScroll = () =>
      document.body.classList.toggle("is-scrolled", window.scrollY > 18);
    onScroll();
    addEventListener("scroll", onScroll);
    return () => removeEventListener("scroll", onScroll);
  }, []);

  function applyTheme(next: boolean) {
    const root = document.documentElement;

    root.classList.add("theme-transition");
    root.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);

    window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 650);
  }

  function toggle() {
    applyTheme(!dark);
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {dark ? (
        <Sun size={18} strokeWidth={2} aria-hidden="true" />
      ) : (
        <Moon
          size={18}
          strokeWidth={2}
          fill="currentColor"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
