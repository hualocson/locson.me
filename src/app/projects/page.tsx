import { Metadata } from "next";

import getBaseUrl from "@/lib/get-base-url";
import { compileMDX } from "@/lib/mdx";

import PostWrapper from "@/components/PostWrapper";

async function ProjectsPage() {
  const { code, frontmatter } = await compileMDX("projects");
  return <PostWrapper frontmatter={frontmatter} code={code} />;
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
