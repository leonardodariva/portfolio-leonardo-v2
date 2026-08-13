"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ProjectTone } from "../../../data/projects";
import { useLocale } from "../../i18n";

type CaseGalleryProps = {
  images?: string[];
  label: string;
  title: string;
  tone: ProjectTone;
};

export default function CaseGallery({
  images = [],
  label,
  title,
  tone,
}: CaseGalleryProps) {
  const { t } = useLocale();
  const visibleImages = images.slice(0, 5);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (activeImage === null) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      lastTrigger.current?.focus();
    };
  }, [activeImage]);

  const openImage = (index: number, trigger: HTMLButtonElement) => {
    lastTrigger.current = trigger;
    setActiveImage(index);
  };

  const renderPreview = (image: string | undefined, index: number) =>
    image ? (
      <Image
        src={image}
        alt={`${title} — mockup ${index + 1}`}
        fill
        sizes={index === 0 ? "(max-width: 800px) 100vw, 75vw" : "25vw"}
      />
    ) : (
      <div className={`case-cover-fallback case-cover-${tone}`} aria-hidden="true">
        <div className="browser">
          <div className="browser-top">
            <i />
            <i />
            <i />
          </div>
          <div className="skeleton">
            <span />
            <b />
            <b />
            <div />
            <div />
          </div>
        </div>
        <small>{label}</small>
      </div>
    );

  const galleryItems = visibleImages.length > 0 ? visibleImages : [undefined];

  return (
    <>
      <section
        className={`case-gallery shell ${galleryItems.length === 1 ? "case-gallery-single" : ""}`}
        aria-label={`${t("projects.gallery")} ${title}`}
      >
        <button
          className="case-gallery-main"
          type="button"
          onClick={(event) => openImage(0, event.currentTarget)}
          aria-label={`${t("projects.enlargeMain")} ${title}`}
        >
          {renderPreview(galleryItems[0], 0)}
        </button>

        {galleryItems.length > 1 && (
          <div className="case-gallery-thumbnails">
            {galleryItems.slice(1).map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={(event) => openImage(index + 1, event.currentTarget)}
                aria-label={`${t("projects.enlarge")} ${index + 2} ${title}`}
              >
                {renderPreview(image, index + 1)}
              </button>
            ))}
          </div>
        )}
      </section>

      {activeImage !== null && (
        <div
          className="case-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${t("projects.enlarged")} ${title}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveImage(null);
          }}
          onKeyDown={(event) => {
            if (event.key === "Tab") {
              event.preventDefault();
              event.currentTarget.querySelector<HTMLButtonElement>("button")?.focus();
            }
          }}
        >
          <button
            className="case-lightbox-close"
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label={t("projects.close")}
            autoFocus
          >
            <X aria-hidden="true" />
          </button>
          <div className="case-lightbox-content">
            {renderPreview(galleryItems[activeImage], activeImage)}
          </div>
        </div>
      )}
    </>
  );
}
