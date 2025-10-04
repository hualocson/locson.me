import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";

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
  const source = fs.readFileSync(path.join(root, `${slug}.mdx`), "utf8");
  const { data } = matter(source);
  return {
    path: `${slug}`,
    title: data.title,
    display: data.display,
    place: data.place,
    date: data.date,
    lang: data.lang,
    desc: data.desc,
    platform: data.platform,
    duration: data.duration,
    redirect: data.redirect,
    inperson: data.inperson,
    wrapperClass: data.wrapperClass,
    art: data.art,
    toc: data.toc,
    tocAlwaysOn: data.tocAlwaysOn,
  };
};

export const getFileData = (slug: string) => {
  const source = fs.readFileSync(path.join(root, `${slug}.mdx`), "utf8");
  return source;
};

export const getPostsFrontmatter = () => {
  return getPostsSlugs().map((slug) => getPostFrontmatter(`/posts/${slug}`));
};
