import rehypeToc from "@jsdevtools/rehype-toc";
import { compile } from "@mdx-js/mdx";
import rehypeShiki from "@shikijs/rehype";
import rehypeAutoLink from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

import { getFileData, getPostFrontmatter } from "./file-service";
import preProcessMDX from "./pre-process-mdx";

const mdxCompile = async (slug: string) => {
  const frontmatter = getPostFrontmatter(slug);
  const isTocAlwaysOn = frontmatter.tocAlwaysOn;
  const tocEnabled = frontmatter.toc;
  const file = getFileData(slug);
  const source = preProcessMDX(file);
  const content = await compile(source, {
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [
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
                  "fixed hidden top-[120px] bottom-0 left-[20px] text-[0.8em] overflow-hidden w-[100px] lg:w-[200px] xl:w-[300px] sm:flex flex-col z-[200] table-of-contents" +
                  (isTocAlwaysOn ? " toc-always-on" : "") +
                  (!tocEnabled ? " !hidden" : ""),
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
    ],
    providerImportSource: "./src/mdx-components.tsx",
  });

  return {
    content: String(content),
    frontmatter,
  };
};

export default mdxCompile;
