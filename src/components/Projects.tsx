"use client";

import { useMemo, useState } from "react";
import Container from "@/components/Container";
import { siteData } from "@/data/siteData";

type Project = {
  title: string;
  tag: string;
  description?: string;
  images: string[];
  beforeIndex?: number; // index in images[] that is the BEFORE shot
};

export default function Projects() {
  const { projects } = siteData as any;

  const items: Project[] = projects.items;

  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const activeImages = activeProject?.images ?? [];

  const activeImageSrc = useMemo(() => {
    if (!activeImages.length) return "";
    return activeImages[Math.min(activeImageIdx, activeImages.length - 1)];
  }, [activeImages, activeImageIdx]);

  function openProject(p: Project) {
    setActiveProject(p);
    setActiveImageIdx(0); // first image should be AFTER (because we order AFTERs first)
    setOpen(true);
  }

  function close() {
    setOpen(false);
    setActiveProject(null);
    setActiveImageIdx(0);
  }

  return (
    <section id="projects" className="bg-slate-950 py-16">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          {projects.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
          {projects.subtitle}
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => {
            const cover = p.images?.[0]; // first should be an AFTER
            return (
              <button
                key={p.title}
                type="button"
                onClick={() => openProject(p)}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left
                           transition hover:border-white/25 hover:bg-white/10"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
  <img
    src={cover}
    alt={p.title}
    className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
  />

  {/* Hover overlay (desktop only) */}
  <div className="pointer-events-none absolute inset-0 hidden items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
    <div className="flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm text-white">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
      </svg>
      <span>View project photos</span>
    </div>
  </div>
</div>


                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-white">{p.title}</p>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {p.tag}
                    </span>
                  </div>
                  {p.description ? (
                    <p className="mt-2 line-clamp-2 text-sm text-white/60">
                      {p.description}
                    </p>
                  ) : null}
                  <p className="mt-3 text-xs text-white/50">
                    {p.images?.length ? `${p.images.length} photos` : "No photos yet"}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </Container>

      {/* Modal */}
      {open && activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Project gallery"
          onClick={close}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 p-4 md:p-5">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">
                    {activeProject.title}
                  </h3>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {activeProject.tag}
                  </span>
                </div>
                {activeProject.description ? (
                  <p className="mt-2 text-sm text-white/60">
                    {activeProject.description}
                  </p>
                ) : null}
              </div>

              <button
                type="button"
                onClick={close}
                className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="grid gap-5 p-4 md:grid-cols-[1fr_260px] md:p-5">
              {/* Main image */}
             <div className="flex max-h-[60vh] md:max-h-[70vh] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
  {activeImageSrc ? (
    <img
      src={activeImageSrc}
      alt=""
      className="max-h-[60vh] md:max-h-[70vh] w-auto max-w-full object-contain transition-opacity duration-200"
    />
  ) : (
    <div className="flex aspect-[4/3] items-center justify-center p-6 text-sm text-white/60">
      No images
    </div>
  )}
</div>


              {/* Thumbs */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-white/80">Photos</p>
                <div className="grid grid-cols-3 gap-3 md:grid-cols-2">
                  {activeImages.map((src, idx) => {
                    const isActive = idx === activeImageIdx;
                    const isBefore =
  typeof activeProject.beforeIndex === "number" &&
  idx >= activeProject.beforeIndex;


                    return (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setActiveImageIdx(idx)}
                        className={`relative overflow-hidden rounded-xl border transition ${
                          isActive
                            ? "border-white/40"
                            : "border-white/10 hover:border-white/25"
                        }`}
                        aria-label="Select photo"
                      >
                        <img
                          src={src}
                          alt=""
                          className="h-20 w-full object-cover"
                        />
                        {isBefore && (
                          <span className="absolute left-1 top-1 rounded bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white">
                            BEFORE
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
