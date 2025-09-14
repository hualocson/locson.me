import getBaseUrl from "@/lib/get-base-url";
import { compileMDX, getPostFrontmatter, getPostsSlugs } from "@/lib/mdx";

import PostWrapper from "@/components/PostWrapper";

export function generateStaticParams() {
  const posts = getPostsSlugs();
  return posts.map((post) => ({
    id: String(post),
  }));
}

const baseUrl = getBaseUrl();

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostFrontmatter(slug);
  if (!post) {
    return;
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
      url: `${baseUrl}/posts/${post.path}`,
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

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const { code, frontmatter } = await compileMDX(`/posts/${slug}`);
  return <PostWrapper frontmatter={frontmatter} code={code} />;
};

export default PostPage;
