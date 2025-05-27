// src/app/social/page.tsx
import React from "react";
import SocialCard from "@/components/SocialCard";
import { socialPosts } from "@/data/social";

export default function SocialPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          Social Posts
        </h1>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialPosts.map((post) => (
            <SocialCard key={post.embedUrl} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}
