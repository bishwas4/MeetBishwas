"use client";

import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import type { SocialPost } from "@/data/social";

export default function SocialCard({ platform, embedUrl }: SocialPost) {
  // Pick the right icon (Medium has no icon here)
  const Icon =
    platform === "linkedin"
      ? FaLinkedin
      : platform === "facebook"
      ? FaFacebook
      : null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center px-4 py-2 border-b dark:border-gray-700">
        {Icon && <Icon className="text-emerald-500 mr-2 w-5 h-5" />}
        <h3 className="font-medium capitalize">{platform}</h3>
      </div>

      {/* Embed */}
      <div className="p-4">
        {platform === "medium" ? (
          <blockquote className="medium-widget">
            <a href={embedUrl}></a>
          </blockquote>
        ) : (
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={embedUrl}
              className="absolute top-0 left-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              title={`${platform}-embed`}
            />
          </div>
        )}
      </div>
    </div>
);
}
