"use client";

import { Mail } from "lucide-react";
import { useLocale } from "../i18n";

export default function SiteFooter() {
  const { t } = useLocale();
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer-main">
          <strong className="site-footer-brand">
            Leonardo Dariva<small>UI/UX Designer &amp; Front-end Developer</small>
          </strong>
          <p className="site-footer-copyright">
            © 2026 Leonardo Dariva. {t("footer.rights")}
          </p>
          <a
            className="footer-email-link"
            href="mailto:leodarivask@gmail.com?subject=Contato%20pelo%20portf%C3%B3lio"
            aria-label={t("footer.email")}
            title={t("footer.email")}
          >
            <Mail aria-hidden="true" size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
