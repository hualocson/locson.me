import { bundleMDX } from "mdx-bundler";
import fs from "node:fs";
import path from "node:path";
import remarkGfm from "remark-gfm";

import preProcessMDX from "./pre-process-mdx";

const root = path.join(process.cwd(), "src", "content");
const COMPONENTS_ROOT = path.join(
  process.cwd(),
  "src",
  "components",
  "markdown"
);

export function getSlugs() {
  return fs
    .readdirSync(root)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

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
    cwd: COMPONENTS_ROOT,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];

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
