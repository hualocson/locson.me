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
      SavvyMoney: "https://savvy.vn",
    },
  });
};

export default preProcessMDX;
