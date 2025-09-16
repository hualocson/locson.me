import rehypeToc from "@jsdevtools/rehype-toc";
import rehypeShiki from "@shikijs/rehype";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import fs from "node:fs";
import path from "node:path";
import rehypeAutoLink from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import preProcessMDX from "./pre-process-mdx";

const root = path.join(process.cwd(), "src", "content");
const POSTS_ROOT = path.join(root, "posts");

export const getPostsSlugs = () => {
  return fs
    .readdirSync(POSTS_ROOT)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
    .filter((f) => f !== "index");
};

export const getPostFrontmatter = (slug: string): IPostFrontmatter => {
  const source = fs.readFileSync(path.join(POSTS_ROOT, `${slug}.mdx`), "utf8");
  const { data } = matter(source);
  return {
    path: `posts/${slug}`,
    title: data.title,
    place: data.place,
    date: data.date,
    lang: data.lang,
    desc: data.desc,
    platform: data.platform,
    duration: data.duration,
    redirect: data.redirect,
    inperson: data.inperson,
  };
};

export const getPostsFrontmatter = () => {
  return getPostsSlugs().map(getPostFrontmatter);
};

const globals = {
  "@mdx-js/react": {
    varName: "MdxJsReact",
    namedExports: ["useMDXComponents"],
    defaultExport: false,
  },
};

export const compileMDX = async (slug: string) => {
  const source = fs.readFileSync(path.join(root, `${slug}.mdx`), "utf8");

  const { code, frontmatter } = await bundleMDX({
    source: preProcessMDX(source),
    mdxOptions(options, frontmatter) {
      const isTocAlwaysOn = frontmatter.tocAlwaysOn;
      const tocEnabled = frontmatter.toc;

      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,

        [
          rehypeToc,
          {
            headings: ["h1", "h2", "h3", "h4"],
            customizeTOC(toc: unknown) {
              const rootToc = toc;
              const iconElement = {
                type: "element",
                tagName: "div",
                properties: {
                  className:
                    "mx-2 size-4 text-[#8887] transition-all duration-400 ease-in-out flex items-center justify-center",
                },
                children: [
                  {
                    type: "element",
                    tagName: "i",
                    properties: {
                      className: "fa-solid fa-bars text-lg w-4",
                    },
                  },
                ],
              };
              const newToc = {
                type: "element",
                tagName: "div",
                properties: {
                  className:
                    "fixed top-[120px] bottom-0 left-[20px] text-[0.8em] overflow-hidden w-[100px] lg:w-[200px] xl:w-[300px] flex flex-col z-[200] table-of-contents" +
                    (isTocAlwaysOn ? " toc-always-on" : "") +
                    (!tocEnabled ? " hidden" : ""),
                },
                children: [iconElement, rootToc],
              };
              return newToc;
            },
            cssClasses: {
              toc: "transition-opacity duration-700 ease-in-out",
              list: "h-full overflow-y-auto rounded-lg mt-1 pb-5 list-none ps-0 text-ellipsis",
              listItem: "pl-[0.8em] mt-[0.5em] leading-[1.5em]",
              link: "opacity-75 hover:opacity-100 transition-all duration-300",
            },
          },
        ],
        [
          rehypeAutoLink,
          {
            content: {
              type: "text",
              value: "#",
            },
            properties: {
              className:
                "float-left mt-1 ml-[-1.2em] pr-[0.5em] text-[0.85em] border-none! group-hover:opacity-50 opacity-0 transition-opacity duration-300 ease-in-out",
              ariaHidden: true,
              tabIndex: -1,
            },

            headingProperties: {
              className: "group",
            },
          },
        ],
        [
          rehypeShiki,
          {
            themes: {
              light: "vitesse-light",
              dark: "vitesse-dark",
            },
            defaultColor: false,
            cssVariablePrefix: "--s-",
          },
        ],
      ];

      return {
        ...options,
        providerImportSource: "@mdx-js/react",
      };
    },
    globals,
    esbuildOptions(options) {
      options.minify = false;
      return options;
    },
  });

  return {
    code,
    frontmatter,
  };
};
