import React from "react";

import { ActiveProjectProvider } from "./ActiveProjectContext";
import ListProjects from "./ListProjects";
import ProjectsHeroSection from "./ProjectsHeroSection";

const ProjectsPageBody: React.FC = () => {
  return (
    <ActiveProjectProvider>
      <div className="flex flex-col">
        <ProjectsHeroSection />
        <ListProjects />
      </div>
    </ActiveProjectProvider>
  );
};

export default ProjectsPageBody;
