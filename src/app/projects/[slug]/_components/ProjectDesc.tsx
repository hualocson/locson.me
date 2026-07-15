import { FC } from "react";

interface IProjectDescProps {
  desc: string;
}
const ProjectDesc: FC<IProjectDescProps> = ({ desc }) => {
  return (
    <div className="w-[50svw] flex-shrink-0 pt-[6.25vw] pl-[2.083vw]">
      <p className="pr-4 pb-2.5 indent-[5rem] text-[2.083vw] leading-[110%] font-light tracking-[-0.04rem]">
        {desc}
      </p>
    </div>
  );
};

export default ProjectDesc;
