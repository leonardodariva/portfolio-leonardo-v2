"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ProjectTone } from "../../../data/projects";
import { useLocale } from "../../i18n";

type CaseGalleryProps = {
  images?: string[];
  label: string;
  title: string;
  tone: ProjectTone;
  hasFollowingSections?: boolean;
};

export default function CaseGallery({
  images = [],
  label,
  title,
  tone,
  hasFollowingSections = false,
}: CaseGalleryProps) {
  const { t } = useLocale();
  const galleryItems: (string | undefined)[] = images.length > 0 ? images : [undefined];
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const isOpen = activeImage !== null;
  const activeSource = activeImage === null ? undefined : galleryItems[activeImage];

  useEffect(() => {
    if (!isOpen) return;

    const page = document.querySelector("main");
    const pageWasInert = page?.hasAttribute("inert") ?? false;
    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    page?.setAttribute("inert", "");
    document.body.style.overflow = "hidden";

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveImage((current) =>
          current === null ? current : Math.max(0, current - 1),
        );
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveImage((current) =>
          current === null
            ? current
            : Math.min(galleryItems.length - 1, current + 1),
        );
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = previousOverflow;
      if (!pageWasInert) page?.removeAttribute("inert");
      lastTrigger.current?.focus();
    };
  }, [isOpen, galleryItems.length]);

  const openImage = (index: number, trigger: HTMLButtonElement) => {
    lastTrigger.current = trigger;
    setActiveImage(index);
  };

  const showPreviousImage = () => {
    setActiveImage((current) =>
      current === null ? current : Math.max(0, current - 1),
    );
  };

  const showNextImage = () => {
    setActiveImage((current) =>
      current === null
        ? current
        : Math.min(galleryItems.length - 1, current + 1),
    );
  };

  const renderFallback = () => (
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

  const lightbox = activeImage !== null
    ? createPortal(
        <div
          className="case-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${t("projects.enlarged")} ${title}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveImage(null);
          }}
          onKeyDown={(event) => {
            if (event.key !== "Tab") return;
            const controls = Array.from(
              event.currentTarget.querySelectorAll<HTMLButtonElement>("button:not(:disabled)"),
            );
            const firstControl = controls[0];
            const lastControl = controls.at(-1);

            if (event.shiftKey && document.activeElement === firstControl) {
              event.preventDefault();
              lastControl?.focus();
            } else if (!event.shiftKey && document.activeElement === lastControl) {
              event.preventDefault();
              firstControl?.focus();
            }
          }}
        >
          <button
            className="case-lightbox-close"
            type="button"
            ref={closeButtonRef}
            onClick={() => setActiveImage(null)}
            aria-label={t("projects.closeGallery")}
          >
            <X aria-hidden="true" />
          </button>

          <button
            className="case-lightbox-navigation case-lightbox-previous"
            type="button"
            onClick={showPreviousImage}
            aria-label={t("projects.previousImage")}
            disabled={activeImage === 0}
          >
            <ChevronLeft aria-hidden="true" />
          </button>

          <div className="case-lightbox-content">
            {activeSource ? (
              <Image
                key={`${activeImage}-${activeSource}`}
                src={activeSource}
                alt={`${title} — mockup ${activeImage + 1}`}
                fill
                sizes="95vw"
                unoptimized
              />
            ) : (
              renderFallback()
            )}
          </div>

          <button
            className="case-lightbox-navigation case-lightbox-next"
            type="button"
            onClick={showNextImage}
            aria-label={t("projects.nextImage")}
            disabled={activeImage === galleryItems.length - 1}
          >
            <ChevronRight aria-hidden="true" />
          </button>

          <span className="case-lightbox-counter" aria-live="polite">
            {activeImage + 1} / {galleryItems.length}
          </span>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <section
        className={`case-gallery shell${hasFollowingSections ? "" : " case-gallery-end"}`}
        aria-label={`${t("projects.gallery")} ${title}`}
      >
        {galleryItems.map((image, index) => (
          <button
            className={`case-gallery-item${image ? "" : " case-gallery-fallback-item"}`}
            type="button"
            key={`${image ?? "fallback"}-${index}`}
            onClick={(event) => openImage(index, event.currentTarget)}
            aria-label={`${t("projects.enlargeImage")} ${index + 1} — ${title}`}
          >
            {image ? (
              <Image
                className="case-gallery-image"
                src={image}
                alt={`${title} — mockup ${index + 1}`}
                width={0}
                height={0}
                sizes="(max-width: 1360px) 100vw, 1280px"
                unoptimized
              />
            ) : (
              renderFallback()
            )}
          </button>
        ))}
      </section>
      {lightbox}
    </>
  );
}
