// app/blog/[slug]/page.tsx
import { getPost, getSlugs } from "@/lib/mdx";

export async function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { meta } = getPost(slug);
  const Post = require(`@/content/${slug}.mdx`).default;

  return (
    <article className="prose dark:prose-invert mx-auto">
      <h1>{meta.title}</h1>
      <p className="text-sm text-gray-500">{meta.date}</p>
      <Post /> {/* compiled MDX component */}
    </article>
  );
}
