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
      Tuvitaichinh: {
        link: "https://tuvitaichinh.com",
        imageUrl: "https://tuvitaichinh.com/favicon.ico",
      },
      "locson me": {
        link: "https://locson-me.vercel.app",
        imageUrl: "https://locson-me.vercel.app/logo.svg",
      },
      "Notion ai personal": {
        link: "https://notion-ai-personal.vercel.app",
        imageUrl: "https://notion-ai-personal.vercel.app/icon.png",
      },
      "Bookstore Demo": {
        link: "https://bookstore-fe-three.vercel.app/",
        imageUrl: "https://bookstore-fe-three.vercel.app/books-logo.svg",
      },
    },
  });
};

export default preProcessMDX;
