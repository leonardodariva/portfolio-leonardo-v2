"use client";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const themeEvent = "portfolio-theme-change";

function subscribe(callback: () => void) {
  window.addEventListener(themeEvent, callback);
  return () => window.removeEventListener(themeEvent, callback);
}

function getThemeSnapshot() {
  return document.documentElement.dataset.theme === "dark";
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getThemeSnapshot, () => false);

  function applyTheme(next: boolean) {
    const root = document.documentElement;

    root.classList.add("theme-transition");
    root.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
    window.dispatchEvent(new Event(themeEvent));

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
      type="button"
      onClick={toggle}
      aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={dark ? "Ativar modo claro" : "Ativar modo escuro"}
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
