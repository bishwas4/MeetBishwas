"use client";

import React from "react";
import Script from "next/script";
import SocialCard from "@/components/SocialCard";
import { socialPosts } from "@/data/social";

export default function SocialPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white py-16">
      {/* Medium’s embed script */}
      <Script
        src="https://medium.com/embed.js"
        strategy="afterInteractive"
      />

      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Social Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialPosts.map((post) => (
            <SocialCard key={post.embedUrl} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}
