// src/components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { socialLinks } from "@/data/socialLinks";

type SocialLink = {
  platform: string;
  url: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          {(socialLinks as SocialLink[]).map(({ platform, url, Icon }) => (
            <li key={platform}>
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-500 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
