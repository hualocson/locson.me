import processMagicLink from "./mdx-plugins/magic-link";

const preProcessMDX = (source: string) => {
  return processMagicLink(source, {
    linksMap: {
      "Next.js": "https://nextjs.org",
      "Tailwind CSS": "https://tailwindcss.com/",
      "Shadcn UI": "https://ui.shadcn.com",
      React: "https://react.dev",
      TypeScript: "https://www.typescriptlang.org",
      BetterPrompt: "https://betterprompt.me",
      "locson me": {
        link: "https://locson-me.vercel.app",
        imageUrl: "https://locson-me.vercel.app/logo.svg",
      },
      Spendly: {
        link: "https://locson-me.vercel.app/projects/spendly",
        imageUrl: "https://spendly-expense-jot.vercel.app/favicon-196.png",
      },
      "Notion ai personal": {
        link: "https://notion-ai-personal.vercel.app",
        imageUrl: "https://notion-ai-personal.vercel.app/icon.png",
      },
    },
  });
};

export default preProcessMDX;
