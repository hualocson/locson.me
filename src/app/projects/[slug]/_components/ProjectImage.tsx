import React from "react";

import Image from "next/image";

import { TProject } from "@/constants/projects";

interface IProjectImageProps {
  project: TProject;
}

const ProjectImage: React.FC<IProjectImageProps> = ({ project }) => {
  return (
    <div
      className="relative aspect-[var(--ratio)] w-full flex-shrink-0 md:aspect-auto md:w-[50svw]"
      style={
        {
          "--ratio": project.images.hero.ratio,
        } as React.CSSProperties
      }
    >
      <Image
        src={project.images.hero.src}
        alt={project.images.hero.alt}
        fill
        className="my-0 object-cover"
        priority
        quality={90}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};

export default ProjectImage;
