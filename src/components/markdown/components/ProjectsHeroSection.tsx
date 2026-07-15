"use client";

import { PROJECTS } from "@/constants";
import { AnimatePresence, motion } from "motion/react";

import { useActiveProject } from "./ActiveProjectContext";

const ProjectsHeroSection: React.FC = () => {
  const { activeSlug } = useActiveProject();
  const activeProject = activeSlug
    ? PROJECTS[activeSlug].info.name
    : "My Projects";

  const [firstWord, ...rest] = activeProject.split(" ");
  const restWords = rest.join(" ");

  return (
    <div className="mx-auto mt-24 flex w-2/3 items-center justify-between gap-56 px-[2.083vw] text-center leading-[110%]">
      <p className="my-0 uppercase">Selected Projects I Have Done</p>
      {/* activeProject */}
      <div className="w-[60%] overflow-hidden py-[2.2vw]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            className="my-0 text-7xl"
            key={activeSlug ?? "default"}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-roxborough font-thin italic">
              {firstWord}
            </span>
            {restWords && <span> {restWords}</span>}
          </motion.p>
        </AnimatePresence>
      </div>
      <p className="my-0 uppercase">scroll to discover</p>
    </div>
  );
};

export default ProjectsHeroSection;
