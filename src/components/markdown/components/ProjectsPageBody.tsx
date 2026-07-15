import React from "react";

import ListProjects from "./ListProjects";
import ProjectsHeroSection from "./ProjectsHeroSection";

const ProjectsPageBody: React.FC = () => {
  return (
    <div className="flex flex-col">
      <ProjectsHeroSection title="My Projects" />
      <ListProjects />
    </div>
  );
};

export default ProjectsPageBody;
