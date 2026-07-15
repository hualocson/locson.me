"use client";

import { PROJECTS } from "@/constants";
import { MoveDown } from "lucide-react";
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
    <div className="mx-auto mt-8 w-fit px-[1.02vw] md:w-2/3 2xl:mt-24 2xl:px-[2.083vw]">
      <div className="flex flex-col gap-12 text-sm leading-[110%] md:flex-row md:items-center md:justify-between md:gap-0 md:text-center md:text-base">
        <p className="my-0 uppercase">
          Selected Projects I <br /> Have Done
        </p>

        {/* activeProject */}
        <div className="order-first mx-auto overflow-hidden py-[2.2vw] md:order-none md:w-[60%]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              className="my-0 text-4xl md:text-6xl 2xl:text-7xl"
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

        <p className="my-0 hidden uppercase md:block">scroll to discover</p>
        <div className="flex items-center gap-12 md:hidden">
          <p className="my-0 uppercase">
            scroll down <br /> for more
          </p>
          <MoveDown className="size-4" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeroSection;
