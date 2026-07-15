import { PROJECTS } from "@/constants";

const getProjectData = (slug: string) => {
  return PROJECTS[slug as keyof typeof PROJECTS];
};

export default getProjectData;
