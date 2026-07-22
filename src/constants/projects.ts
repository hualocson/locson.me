import bp1 from "@/resources/images/projects/betterprompt/frames/f1.png";
import bp2 from "@/resources/images/projects/betterprompt/frames/f2.png";
import bp3 from "@/resources/images/projects/betterprompt/frames/f3.png";
import bp4 from "@/resources/images/projects/betterprompt/frames/f4.png";
import bp5 from "@/resources/images/projects/betterprompt/frames/f5.png";
import betterpropmtHeroImage from "@/resources/images/projects/betterprompt/frames/project-image.png";
import sp1 from "@/resources/images/projects/spendly/frames/f1.png";
import sp2 from "@/resources/images/projects/spendly/frames/f2.png";
import sp3 from "@/resources/images/projects/spendly/frames/f3.png";
import sp4 from "@/resources/images/projects/spendly/frames/f4.png";
import spendlyHeroImage from "@/resources/images/projects/spendly/frames/project-image.png";

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

  spendly: {
    href: "/projects/spendly",
    images: {
      hero: {
        src: spendlyHeroImage,
        alt: "Spendly project image",
        ratio: "1880/2160",
      },
      frames: [
        {
          id: "spendly-f1",
          src: sp1,
          alt: "Spendly Frame 1",
          ratio: "3108/2160",
        },
        {
          id: "spendly-f2",
          src: sp2,
          alt: "Spendly Frame 2",
          ratio: "3100/2160",
        },
        {
          id: "spendly-f3",
          src: sp3,
          alt: "Spendly Frame 3",
          ratio: "2560/1128",
        },
        {
          id: "spendly-f4",
          src: sp4,
          alt: "Spendly Frame 4",
          ratio: "3108/2160",
        },
      ],
    },
    info: {
      name: "Spendly",
      role: "Frontend Developer, Designer",
      year: 2025,
      category: "AI & Personal Finance",
      desc: "Spendly is a personal expense tracking web application that helps users manage weekly and monthly budgets, monitor spending habits, and gain actionable insights through intuitive dashboards, reports, and budget analytics.",
      url: "https://github.com/hualocson/ai-market-expend-helper",
    } satisfies IProjectInfo,
  },
};

export default PROJECTS;

export type TProjects = typeof PROJECTS;
export type TProjectSlug = keyof typeof PROJECTS;
export type TProject = (typeof PROJECTS)[TProjectSlug];
export type TProjectFrames = TProject["images"]["frames"];
