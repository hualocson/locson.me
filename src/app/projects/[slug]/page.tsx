import { Metadata } from "next";
import Link from "next/link";

import { getFrontmatter, getProjectSlugs } from "@/lib/file-service";
import getBaseUrl from "@/lib/get-base-url";
import getProjectData from "@/lib/get-project-data";
import { XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import ContentWrapper from "@/components/ContentWrapper";
import HorizontalScrollContainer from "@/components/HorizontalScrollContainer";

import ProjectDesc from "./_components/ProjectDesc";
import ProjectImage from "./_components/ProjectImage";
import ProjectInfo from "./_components/ProjectInfo";
import ProjectShowcase from "./_components/ProjectShowcase";

export function generateStaticParams() {
  const projects = getProjectSlugs();

  return projects.map((project) => ({
    id: String(project),
  }));
}

const baseUrl = getBaseUrl();

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getFrontmatter(`/projects/${slug}`);
  if (!post) {
    return {};
  }

  const { title } = post;
  const ogImage = `${baseUrl}/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description: "",
    openGraph: {
      title,
      description: "",
      type: "article",
      url: `${baseUrl}/projects/${post.path}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "",
      images: [ogImage],
    },
  };
}

const ProjectPageDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const frontmatter = getFrontmatter(`/projects/${slug}`);

  const project = getProjectData(slug);

  if (!project) {
    return null;
  }

  return (
    <ContentWrapper frontmatter={frontmatter}>
      {/* buttons */}
      <div className="fixed bottom-[1.927vw] left-1/2 z-10 -translate-x-1/2">
        <Link href={"/projects"} data-custom="true">
          <Button
            size={"icon-lg"}
            className="size-14 rounded-full invert-100 hover:scale-110"
          >
            <XIcon className="text-foreground size-5 invert-100" />
          </Button>
        </Link>
      </div>
      <HorizontalScrollContainer className="hide-scrollbar-x flex flex-col md:fixed md:top-0 md:left-0 md:-z-10 md:h-svh md:w-svw md:flex-row md:items-stretch md:overflow-x-auto">
        <ProjectInfo project={project} />
        <ProjectImage project={project} />
        <ProjectDesc desc={project.info.desc} />
        <ProjectShowcase frames={project.images.frames} />
      </HorizontalScrollContainer>
    </ContentWrapper>
  );
};

export default ProjectPageDetail;
