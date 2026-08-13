"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

type SiteHeaderProps = {
  currentPage?: "home" | "projects" | "resume";
};

export default function SiteHeader({ currentPage = "home" }: SiteHeaderProps) {
  const isHome = currentPage === "home";
  const [activeSection, setActiveSection] = useState("inicio");
  const navigation = [
    { label: "Início", href: "/", page: "home", section: "inicio" },
    { label: "Sobre", href: isHome ? "#sobre" : "/#sobre", section: "sobre" },
    { label: "Projetos", href: "/projetos", page: "projects" },
    { label: "Skills", href: isHome ? "#skills" : "/#skills", section: "skills" },
    { label: "Contato", href: isHome ? "#contato" : "/#contato", section: "contato" },
    { label: "Currículo", href: "/curriculo", page: "resume" },
  ];

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
        <nav aria-label="Navegação principal">
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
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
