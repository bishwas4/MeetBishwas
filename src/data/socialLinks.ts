import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import type { SVGProps } from "react";

export interface SocialLink {
  platform: string;
  url: string;
  Icon: React.ComponentType<SVGProps<SVGSVGElement>>;
}

export const socialLinks: SocialLink[] = [
  { platform: "twitter",  url: "https://twitter.com/Bishwastmgr", Icon: FaTwitter },
  { platform: "github",   url: "https://github.com/bishwasmgr", Icon: FaGithub },
  { platform: "linkedin", url: "https://www.linkedin.com/in/bishwastmgr", Icon: FaLinkedin },
];
