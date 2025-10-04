import mdxCompile from "@/lib/mdx-compile";

import PostWrapper from "@/components/PostWrapper";

export default async function Home() {
  const { content, frontmatter } = await mdxCompile("index");
  return <PostWrapper frontmatter={frontmatter} code={content} />;
}
