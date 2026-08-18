"use client";

import { Download, LoaderCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "../i18n";

const resumePath = "/curriculo-leonardo-dariva.pdf";

export default function ResumeDownloadButton() {
  const { t } = useLocale();
  const [isGenerating, setIsGenerating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
  }, []);

  const handleDownload = () => {
    if (isGenerating) return;

    setIsGenerating(true);
    timeoutRef.current = window.setTimeout(() => {
      const link = document.createElement("a");
      link.href = resumePath;
      link.download = "curriculo-leonardo-dariva.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      timeoutRef.current = null;
      setIsGenerating(false);
    }, 1200);
  };

  return (
    <button
      className="resume-download"
      type="button"
      disabled={isGenerating}
      aria-busy={isGenerating}
      aria-label={t(isGenerating ? "resume.generating" : "resume.download")}
      onClick={handleDownload}
    >
      {t(isGenerating ? "resume.generating" : "resume.download")}
      {isGenerating
        ? <LoaderCircle className="resume-download-spinner" aria-hidden="true" size={16} />
        : <Download aria-hidden="true" size={16} />}
    </button>
  );
}
