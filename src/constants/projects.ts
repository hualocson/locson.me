import bp1 from "@/resources/images/projects/betterprompt/frame/f1.png";
import bp2 from "@/resources/images/projects/betterprompt/frame/f2.png";
import bp3 from "@/resources/images/projects/betterprompt/frame/f3.png";
import bp4 from "@/resources/images/projects/betterprompt/frame/f4.png";
import bp5 from "@/resources/images/projects/betterprompt/frame/f5.png";
import betterpropmtHeroImage from "@/resources/images/projects/betterprompt/frame/project-image.png";

const PROJECTS = {
  betterprompt: {
    href: "/projects/betterprompt",
    images: {
      hero: {
        src: betterpropmtHeroImage,
        alt: "BetterPrompt project image",
        ratio: "1880/2160",
      },
      frames: [
        {
          id: "betterprompt-f1",
          src: bp1,
          alt: "BetterPrompt Frame 1",
          ratio: "2992/2160",
        },
        {
          id: "betterprompt-f2",
          src: bp2,
          alt: "BetterPrompt Frame 2",
          ratio: "2560/1114",
        },
        {
          id: "betterprompt-f3",
          src: bp3,
          alt: "BetterPrompt Frame 3",
          ratio: "2560/1122",
        },
        {
          id: "betterprompt-f4",
          src: bp4,
          alt: "BetterPrompt Frame 4",
          ratio: "2560/1122",
        },
        {
          id: "betterprompt-f5",
          src: bp5,
          alt: "BetterPrompt Frame 5",
          ratio: "2992/2160",
        },
      ],
    },
    info: {
      name: "BetterPrompt",
      role: "Frontend Developer",
      year: 2025,
      category: "AI & E-commerce",
      desc: "A modern AI prompt marketplace where users can explore, save, and publish prompts for various AI models. Designed with a clean user experience, responsive layouts, and fast performance.",
      url: "https://betterprompt.me",
    } satisfies IProjectInfo,
  },
};

export default PROJECTS;

export type TProjects = typeof PROJECTS;
export type TProjectSlug = keyof typeof PROJECTS;
export type TProject = (typeof PROJECTS)[TProjectSlug];
export type TProjectFrames = TProject["images"]["frames"];
