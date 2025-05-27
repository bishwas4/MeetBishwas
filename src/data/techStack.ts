// src/data/techStack.ts

import type { IconType } from "react-icons";
import { SiReact, SiNodedotjs, SiPython, SiTensorflow, SiNextdotjs } from "react-icons/si";

export interface TechItem {
  name: string;
  Icon: IconType;
}

export const techStack: TechItem[] = [
  { name: "React",    Icon: SiReact },
  { name: "Next.js",  Icon: SiNextdotjs },
  { name: "Node.js",  Icon: SiNodedotjs },
  { name: "Python",   Icon: SiPython },
  { name: "TensorFlow", Icon: SiTensorflow },
];
