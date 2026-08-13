"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { LocaleSelector, useLocale } from "../i18n";

type SiteHeaderProps = {
  currentPage?: "home" | "projects" | "resume";
};

export default function SiteHeader({ currentPage = "home" }: SiteHeaderProps) {
  const isHome = currentPage === "home";
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLocale();
  const navigation = [
    { label: t("navigation.home"), href: "/", page: "home", section: "inicio" },
    { label: t("navigation.about"), href: isHome ? "#sobre" : "/#sobre", section: "sobre" },
    { label: t("navigation.projects"), href: "/projetos", page: "projects" },
    { label: t("navigation.skills"), href: isHome ? "#skills" : "/#skills", section: "skills" },
    { label: t("navigation.contact"), href: isHome ? "#contato" : "/#contato", section: "contato" },
    { label: t("navigation.resume"), href: "/curriculo", page: "resume" },
  ];

  useEffect(() => {
    const onScroll = () =>
      document.body.classList.toggle("is-scrolled", window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = ["inicio", "sobre", "skills", "contato"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const visibleSections = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visibleSections.set(entry.target.id, entry));

        const activeEntry = Array.from(visibleSections.values())
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            if (b.intersectionRatio !== a.intersectionRatio) {
              return b.intersectionRatio - a.intersectionRatio;
            }
            return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top);
          })[0];

        if (activeEntry) setActiveSection(activeEntry.target.id);
      },
      {
        rootMargin: "-84px 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      visibleSections.clear();
    };
  }, [isHome]);

  return (
    <header className="header">
      <div className="header-inner shell">
        <Link className="brand" href={isHome ? "#inicio" : "/#inicio"} aria-label="Início">
          <span>LD</span>
          <strong>
            Leonardo Dariva<small>UI/UX Designer &amp; Front-end Developer</small>
          </strong>
        </Link>
        <nav aria-label="Navegação principal" data-open={menuOpen || undefined}>
          {navigation.map((item) => (
            <Link
              className="nav-link"
              href={item.href}
              aria-current={
                isHome
                  ? item.section === activeSection
                    ? "page"
                    : undefined
                  : currentPage === item.page
                    ? "page"
                    : undefined
              }
              key={item.label}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? t("navigation.closeMenu") : t("navigation.openMenu")}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
        <LocaleSelector />
        <ThemeToggle />
      </div>
    </header>
  );
}
