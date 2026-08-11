import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

type SiteHeaderProps = {
  currentPage?: "home" | "projects";
};

export default function SiteHeader({ currentPage = "home" }: SiteHeaderProps) {
  const isHome = currentPage === "home";
  const navigation = [
    { label: "Início", href: isHome ? "#inicio" : "/#inicio" },
    { label: "Projetos", href: isHome ? "#projetos" : "/projetos" },
    { label: "Sobre", href: isHome ? "#sobre" : "/#sobre" },
    { label: "Skills", href: isHome ? "#skills" : "/#skills" },
    { label: "Contato", href: isHome ? "#contato" : "/#contato" },
    { label: "Currículo", href: "/curriculo" },
  ];

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
              href={item.href}
              aria-current={currentPage === "projects" && item.label === "Projetos" ? "page" : undefined}
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
