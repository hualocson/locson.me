"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import useIsMobile from "@/app/hooks/isMobile";
import { PROJECTS } from "@/constants";
import type { TProjectSlug } from "@/constants/projects";

import HorizontalScrollContainer from "@/components/HorizontalScrollContainer";

import { useActiveProject } from "./ActiveProjectContext";

const ListProjects: React.FC = () => {
  const { setActiveSlug } = useActiveProject();
  const isMobile = useIsMobile();

  return (
    <HorizontalScrollContainer className="md:hide-scrollbar-x mt-24 flex flex-col gap-4 md:max-h-64 md:flex-row md:items-stretch md:overflow-x-auto">
      {Object.entries(PROJECTS).map(([key, p]) => {
        const slug = key as TProjectSlug;
        const projectName = p.info.name;

        const [firstWord, ...rest] = projectName.split(" ");
        const restWords = rest.join(" ");

        return (
          <div key={key} className="flex gap-8">
            <div className="flex-1 text-2xl md:hidden">
              <span className="font-roxborough font-thin italic">
                {firstWord}
              </span>
              {restWords && <span> {restWords}</span>}
            </div>

            <div className="flex flex-1 flex-col gap-4 md:flex-row">
              <Link
                key={key}
                href={p.href}
                data-custom="true"
                style={
                  {
                    "--ratio": p.images.hero.ratio,
                  } as React.CSSProperties
                }
                onMouseEnter={() => {
                  if (!isMobile) {
                    setActiveSlug(slug);
                  }
                }}
                onMouseLeave={() => {
                  if (!isMobile) {
                    setActiveSlug(null);
                  }
                }}
                className="aspect-[var(--ratio)] w-full flex-shrink-0 overflow-hidden md:w-44 md:first:ml-7 md:last:mr-7"
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
                  className="aspect-[var(--ratio)] h-fit w-full overflow-hidden md:w-44 md:first:ml-7 md:last:mr-7"
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
            </div>
          </div>
        );
      })}
    </HorizontalScrollContainer>
  );
};

export default ListProjects;
