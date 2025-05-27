import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export interface SocialLink {
  platform: string;
  url: string;
  Icon: React.ComponentType;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "twitter",
    url: "https://twitter.com/yourprofile",
    Icon: FaTwitter,
  },
  {
    platform: "github",
    url: "https://github.com/your-username",
    Icon: FaGithub,
  },
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/your-profile",
    Icon: FaLinkedin,
  },
];
