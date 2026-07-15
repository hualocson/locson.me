"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { PROJECTS } from "@/constants";
import type { TProjectSlug } from "@/constants/projects";

import HorizontalScrollContainer from "@/components/HorizontalScrollContainer";

import { useActiveProject } from "./ActiveProjectContext";

const ListProjects: React.FC = () => {
  const { setActiveSlug } = useActiveProject();

  return (
    <HorizontalScrollContainer className="hide-scrollbar-x mt-24 flex max-h-64 items-stretch gap-4 overflow-x-auto">
      {Object.entries(PROJECTS).map(([key, p]) => {
        const slug = key as TProjectSlug;
        return (
          <React.Fragment key={key}>
            <Link
              key={key}
              href={p.href}
              data-custom="true"
              style={
                {
                  "--ratio": p.images.hero.ratio,
                } as React.CSSProperties
              }
              onMouseEnter={() => setActiveSlug(slug)}
              onMouseLeave={() => setActiveSlug(null)}
              className="aspect-[var(--ratio)] w-44 overflow-hidden first:ml-7 last:mr-7"
            >
              <div className="relative size-full">
                <Image
                  src={p.images.hero.src}
                  fill
                  alt={p.images.hero.alt}
                  className="my-0 object-cover"
                />
                <span className="absolute inset-0 ring-1 ring-white/10 ring-inset" />
              </div>
            </Link>

            {p.images.frames.map((f) => (
              <Link
                key={f.id}
                href={p.href}
                data-custom="true"
                style={
                  {
                    "--ratio": f.ratio,
                  } as React.CSSProperties
                }
                onMouseEnter={() => setActiveSlug(slug)}
                onMouseLeave={() => setActiveSlug(null)}
                className="aspect-[var(--ratio)] h-fit w-44 overflow-hidden first:ml-7 last:mr-7"
              >
                <div className="relative size-full">
                  <Image
                    src={f.src}
                    fill
                    alt={f.alt}
                    className="my-0 object-cover"
                  />
                  <span className="absolute inset-0 ring-1 ring-white/10 ring-inset" />
                </div>
              </Link>
            ))}
          </React.Fragment>
        );
      })}
    </HorizontalScrollContainer>
  );
};

export default ListProjects;
