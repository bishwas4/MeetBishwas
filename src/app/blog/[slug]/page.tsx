// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import type { PostMeta } from "@/lib/posts";
import BlogContent from "@/components/BlogContent";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts: PostMeta[] = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // params.slug is a string—no need to await it
  const { meta } = await getPostBySlug(params.slug);
  return {
    title: `${meta.title} – Blog`,
    description: meta.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  // params.slug is safe to use directly
  const { meta, content } = await getPostBySlug(params.slug);
  if (!meta) notFound();

  return (
    <article className="prose prose-invert lg:prose-xl mx-auto py-16 px-4">
      <Link href="/blog" className="text-sm text-emerald-500 hover:underline">
        ← Back to Blog
      </Link>
      <h1>{meta.title}</h1>
      <time className="text-gray-400 block mb-6">{meta.date}</time>
      <BlogContent content={content} />
    </article>
  );
}
