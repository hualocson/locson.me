import dayjs from "dayjs";
import { promises as fs } from "fs";
import { glob } from "glob";
import matter from "gray-matter";
import path from "node:path";

const ROOT = path.join(process.cwd(), "src", "content");
const POSTS_ROOT = path.join(ROOT, "posts");
const INDEX_PATH = path.join(POSTS_ROOT, "index.json");

const parseMetadata = (data, slug, filePath) => {
  return {
    path: `${slug}`,
    filePath,
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

const buildPostsIndex = async () => {
  console.log(`Building posts index...`);
  const files = await glob(`${POSTS_ROOT}/**/*.mdx`);

  const posts = [];
  for (const file of files) {
    // skip index file
    if (file.endsWith("index.mdx")) {
      continue;
    }

    const source = await fs.readFile(file, "utf-8");
    const { data } = matter(source);

    const slug = data.slug || path.basename(file, ".mdx");
    const filePath = file;
    posts.push(parseMetadata(data, slug, filePath));
  }
  // Sort by newest first
  posts.sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));

  await fs.writeFile(INDEX_PATH, JSON.stringify(posts, null, 2));

  console.log(`Posts index built: ${INDEX_PATH}`);
  console.log(`${posts.length} posts found`);
};

buildPostsIndex().catch((err) => {
  console.error("Error building posts index", err);
  process.exit(1);
});
