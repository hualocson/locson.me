import { Metadata } from "next";

import getBaseUrl from "@/lib/get-base-url";
import mdxCompile from "@/lib/mdx-compile";

import PostWrapper from "@/components/PostWrapper";

async function ProjectsPage() {
  const { content, frontmatter } = await mdxCompile("projects");
  console.log({ frontmatter });
  return <PostWrapper frontmatter={frontmatter} code={content} />;
}

export default ProjectsPage;

const baseUrl = getBaseUrl();
const title = "Projects - Loc Son";
const description = "List of projects that I am proud of";
const ogImage = `${baseUrl}/api/og?title=${encodeURIComponent(title)}`;

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
    description,
    type: "website",
    url: `${baseUrl}/projects`,
    images: [
      {
        url: ogImage,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};
