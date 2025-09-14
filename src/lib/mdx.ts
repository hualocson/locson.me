import rehypeShiki from "@shikijs/rehype";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import fs from "node:fs";
import path from "node:path";
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
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
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
