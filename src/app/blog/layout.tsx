// src/app/blog/layout.tsx
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { seoConfig } from "@/data/seoConfig";

export const metadata = {
  title: `Blog – ${seoConfig.siteName}`,
  description: `Deep dives and case studies by ${seoConfig.siteName}`,
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Keep the same navbar */}
      <Navbar />

      {/* Blog section header */}
      <header className="bg-slate-800 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-semibold">Blog</h1>
        </div>
      </header>

      {/* Inner container for all blog pages */}
      <section className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        {children}
      </section>
    </>
  );
}
