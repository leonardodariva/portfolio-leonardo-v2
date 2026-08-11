import { Mail } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer-main">
          <strong className="site-footer-brand">
            Leonardo Dariva<small>UI/UX Designer &amp; Front-end Developer</small>
          </strong>
          <p className="site-footer-copyright">
            © 2026 Leonardo Dariva. Todos os direitos reservados.
          </p>
          <a
            className="footer-email-link"
            href="mailto:leodarivask@gmail.com?subject=Contato%20pelo%20portf%C3%B3lio"
            aria-label="Enviar e-mail para Leonardo Dariva"
            title="Enviar e-mail"
          >
            <Mail aria-hidden="true" size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
