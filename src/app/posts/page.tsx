import { Metadata } from "next";

import getBaseUrl from "@/lib/get-base-url";
import { compileMDX, getPostsFrontmatter } from "@/lib/mdx";

import ListPosts from "@/components/ListPosts";
import PostWrapper from "@/components/PostWrapper";

async function PostsPage() {
  const { code, frontmatter } = await compileMDX("/posts/index");
  const items = getPostsFrontmatter();
  return (
    <PostWrapper frontmatter={frontmatter} code={code}>
      <ListPosts items={items} />
    </PostWrapper>
  );
}

export default PostsPage;
const baseUrl = getBaseUrl();
const title = "Blog - Loc Son";
const ogImage = `${baseUrl}/api/og?title=${encodeURIComponent(title)}`;

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
    description: "",
    type: "website",
    url: `${baseUrl}/posts`,
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
