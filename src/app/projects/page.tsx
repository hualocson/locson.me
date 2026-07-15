import { Metadata } from "next";

import getBaseUrl from "@/lib/get-base-url";
import mdxCompile from "@/lib/mdx-compile";

import ContentWrapper from "@/components/ContentWrapper";
import ProjectsPageBody from "@/components/markdown/components/ProjectsPageBody";

async function ProjectsPage() {
  const { frontmatter } = await mdxCompile("/projects/index");
  return (
    <ContentWrapper frontmatter={frontmatter}>
      <ProjectsPageBody />
    </ContentWrapper>
  );
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
