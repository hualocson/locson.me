import { FC } from "react";

interface IProjectDescProps {
  desc: string;
}
const ProjectDesc: FC<IProjectDescProps> = ({ desc }) => {
  return (
    <div className="flex-shrink-0 pt-[6.25vw] pl-[2.083vw] md:w-[50svw]">
      <p className="pr-4 pb-2.5 indent-[5rem] text-2xl leading-[110%] font-light tracking-[-0.04rem] md:text-[2.083vw]">
        {desc}
      </p>
    </div>
  );
};

export default ProjectDesc;
