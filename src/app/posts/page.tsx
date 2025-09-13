import { compileMDX } from "@/lib/mdx";

import PostWrapper from "@/components/PostWrapper";

async function PostsPage() {
  const { code, frontmatter } = await compileMDX("/posts/index");
  return <PostWrapper frontmatter={frontmatter} code={code} />;
}

export default PostsPage;
