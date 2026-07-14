import ListProjects from "./ListProjects";
import ProjectsHeroSection from "./ProjectsHeroSection";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col">
      <ProjectsHeroSection title="My Projects" />
      <ListProjects />
    </div>
  );
};

export default ProjectsPage;
