import Image from "next/image";
import type { ProjectTone } from "../../../data/projects";

type CaseGalleryProps = {
  images?: string[];
  label: string;
  title: string;
  tone: ProjectTone;
  layout?: "stack" | "grid";
  hasFollowingSections?: boolean;
};

export default function CaseGallery({
  images = [],
  label,
  title,
  tone,
  layout = "stack",
  hasFollowingSections = false,
}: CaseGalleryProps) {
  const galleryItems: (string | undefined)[] = images.length > 0 ? images : [undefined];

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

  return (
    <section
      className={`case-gallery case-gallery-${layout} shell${hasFollowingSections ? "" : " case-gallery-end"}`}
      aria-label={`${title} — galeria`}
    >
      {galleryItems.map((image, index) => (
        <div
          className={`case-gallery-item${image ? "" : " case-gallery-fallback-item"}`}
          key={`${image ?? "fallback"}-${index}`}
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
        </div>
      ))}
    </section>
  );
}
