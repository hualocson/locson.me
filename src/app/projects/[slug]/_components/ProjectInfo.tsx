import React from "react";

import Link from "next/link";

import { TProject } from "@/constants/projects";

interface IProjectInfoProps {
  project: TProject;
}

const ProjectInfo: React.FC<IProjectInfoProps> = ({ project }) => {
  return (
    <div className="flex flex-shrink-0 flex-col gap-8 pt-8 pb-10 pl-7 md:w-[50svw] md:justify-between md:gap-0 md:pt-40">
      <h2 className="font-roxborough my-0 text-4xl font-thin italic md:text-[4.729vw]">
        {project.info.name}
      </h2>
      <InfoPanel info={project.info} />
    </div>
  );
};

interface IInfoPanelProps {
  info: IProjectInfo;
}

const InfoPanel: React.FC<IInfoPanelProps> = ({ info }) => {
  return (
    <div className="flex flex-col justify-between gap-12 md:w-2/3 md:flex-row md:items-end md:gap-0">
      {/* info list */}
      <div className="flex items-end md:w-1/2">
        {/* col1 */}
        <div className="flex flex-1 flex-col gap-2 opacity-70 [&_p]:my-0">
          <p>Year:</p>
          <p>Role:</p>
          <p>Cateogry:</p>
        </div>
        {/* col2 */}
        <div className="flex flex-1 flex-col gap-2 [&_p]:my-0 [&_p]:truncate">
          <p>{info.year}</p>
          <p>{info.role}</p>
          <p>{info.category}</p>
        </div>
      </div>
      {/* project cta */}
      <div className="flex md:w-1/2 md:justify-end">
        <Link href={info.url} className="text-xl">
          Visit site
        </Link>
      </div>
    </div>
  );
};

export default ProjectInfo;
