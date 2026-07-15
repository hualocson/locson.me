import React from "react";

import Link from "next/link";

import { TProject } from "@/constants/projects";

interface IProjectInfoProps {
  project: TProject;
}

const ProjectInfo: React.FC<IProjectInfoProps> = ({ project }) => {
  return (
    <div className="flex w-[50svw] flex-shrink-0 flex-col justify-between pt-40 pb-10 pl-7">
      <h2 className="font-roxborough my-0 text-[4.729vw] font-thin italic">
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
    <div className="flex w-2/3 items-end justify-between">
      {/* info list */}
      <div className="flex w-1/2 items-end">
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
      <div className="flex w-1/2 justify-end">
        <Link href={info.url} className="text-xl">
          Visit site
        </Link>
      </div>
    </div>
  );
};

export default ProjectInfo;
