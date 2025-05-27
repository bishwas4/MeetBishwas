// src/data/techStack.ts
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTensorflow,
  SiNextdotjs,
} from "react-icons/si";
import type { SVGProps } from "react";

export interface TechItem {
  name: string;
  Icon: React.ComponentType<SVGProps<SVGSVGElement>>;
}

export const techStack: TechItem[] = [
  { name: "React",    Icon: SiReact },
  { name: "Next.js",  Icon: SiNextdotjs },
  { name: "Node.js",  Icon: SiNodedotjs },
  { name: "Python",   Icon: SiPython },
  { name: "TensorFlow", Icon: SiTensorflow },
];
