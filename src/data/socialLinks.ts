// src/data/socialLinks.ts

import type { IconType } from "react-icons";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export interface SocialLink {
  platform: string;
  url: string;
  Icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "twitter",
    url: "https://twitter.com/bishwastmgr",
    Icon: FaTwitter,
  },
  {
    platform: "github",
    url: "https://github.com/bishwasmgr",
    Icon: FaGithub,
  },
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/bishwastmgr",
    Icon: FaLinkedin,
  },
];
