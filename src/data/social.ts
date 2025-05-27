// src/data/social.ts

// 1) The platforms we support
export type SocialPlatform = typeof socialPlatforms[number];

export const socialPlatforms = ["linkedin", "medium", "facebook"] as const;

// 2) Export the SocialPost shape
export interface SocialPost {
  platform: SocialPlatform;
  embedUrl: string;
}

// 3) Your actual posts
export const socialPosts: SocialPost[] = [
  {
    platform: "linkedin",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7260572382556217344?collapsed=1",
  },
  {
    platform: "linkedin",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7259786105351266304?collapsed=1",
  },
  {
    platform: "medium",
    embedUrl:
      "https://medium.com/@bishwastmgr/javascript-slice-vs-splice-a-tale-of-two-array-wizards-5d6cab248e2e",
  },
  {
    platform: "medium",
    embedUrl:
      "https://medium.com/@bishwastmgr/why-javascripts-string-to-number-conversion-is-confusing-and-a-little-fun-62a104d90832",
  },
  {
    platform: "facebook",
    embedUrl:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyourpage%2Fposts%2F1234567890&show_text=true&width=500",
  },
];
