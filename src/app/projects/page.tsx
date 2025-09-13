import { compileMDX } from "@/lib/mdx";

import PostWrapper from "@/components/PostWrapper";

async function ProjectsPage() {
  const { code, frontmatter } = await compileMDX("projects");
  return <PostWrapper frontmatter={frontmatter} code={code} />;
}

export default ProjectsPage;
