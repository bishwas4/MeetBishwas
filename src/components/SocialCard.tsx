// src/components/SocialCard.tsx
"use client";

import React from "react";
import { FaLinkedin, FaMedium, FaFacebook } from "react-icons/fa";
import { SocialPost } from "@/data/social";

const icons = {
  linkedin: FaLinkedin,
  medium:   FaMedium,
  facebook: FaFacebook,
};

export default function SocialCard({ platform, embedUrl }: SocialPost) {
  const Icon = icons[platform]!;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center px-4 py-2 border-b dark:border-gray-700">
        <Icon className="text-emerald-500 mr-2" size={20} />
        <h3 className="font-medium capitalize">{platform}</h3>
      </div>

      {/* Embed container */}
      <div className="relative" style={{ paddingTop: "56.25%" /* 16:9 */ }}>
        <iframe
          src={embedUrl}
          className="absolute top-0 left-0 w-full h-full"
          loading="lazy"
          allowFullScreen
          title={`${platform} post`}
        />
      </div>
    </div>
  );
}
