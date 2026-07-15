import React from "react";

import Image from "next/image";

import { TProject } from "@/constants/projects";

interface IProjectImageProps {
  project: TProject;
}

const ProjectImage: React.FC<IProjectImageProps> = ({ project }) => {
  return (
    <div className="relative w-[50svw] flex-shrink-0">
      <Image
        src={project.images.hero.src}
        alt={project.images.hero.alt}
        fill
        className="my-0 object-cover"
      />
    </div>
  );
};

export default ProjectImage;
