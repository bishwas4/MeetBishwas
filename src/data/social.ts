// src/data/social.ts

export type SocialPlatform = "linkedin" | "medium" | "facebook";

export interface SocialPost {
  platform: SocialPlatform;
  embedUrl: string;
}

export const socialPosts: SocialPost[] = [
  {
    platform: "linkedin",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:1234567890123456789",
  },
  {
    platform: "medium",
    embedUrl:
      "https://medium.com/media/abcdef1234567890/embed.html",
  },
  {
    platform: "facebook",
    embedUrl:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyourpage%2Fposts%2F1234567890&show_text=true&width=500",
  },
];
