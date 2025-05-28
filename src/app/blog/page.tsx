// src/app/blog/page.tsx
import Link from "next/link";
import { getAllPosts, PostMeta } from "@/lib/posts";

export default async function BlogIndex() {
  const posts: PostMeta[] = await getAllPosts();

  return (
    <ul className="space-y-8">
      {posts.map(({ slug, title, date, description }) => (
        <li key={slug} className="bg-slate-800 rounded-lg p-6">
          <Link href={`/blog/${slug}`} className="block group">
            <h2 className="text-2xl font-bold group-hover:text-emerald-400">
              {title}
            </h2>
            <time className="text-sm text-gray-400 block mb-2">{date}</time>
            <p className="text-gray-300">{description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
