import { compileMDX } from "@/lib/mdx";

import PostWrapper from "@/components/PostWrapper";

export default async function Home() {
  const { code, frontmatter } = await compileMDX("index");
  return <PostWrapper frontmatter={frontmatter} code={code} />;
}
