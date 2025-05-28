import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const postsDir = path.join(process.cwd(), "posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export async function getAllPosts(): Promise<PostMeta[]> {
  return fs.readdirSync(postsDir).map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const source = fs.readFileSync(path.join(postsDir, file), "utf-8");
    const { data } = matter(source);
    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const source = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(source);
  const mdxSource = await serialize(content);
  return {
    meta: {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
    },
    content: mdxSource,
  };
}
