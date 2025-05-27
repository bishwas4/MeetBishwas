// src/data/siteConfig.ts

export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
}

export interface SiteConfig {
  name: string;
  profession: string;
  animation: string;
  colors: {
    primary: string;
    accent: string;
  };
  sections: readonly string[];
  about: {
    title: string;
    avatar: string;
    description: string;
    funFact: string;
    resumeUrl: string;
    location: string;
    languages: string[];
    skills: Skill[];
  };
  projects: Project[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Bishwas Thapa Magar",
  profession: "Software Engineer & AI Developer",
  animation: "ai-engineer.json",  // your Lottie file in public/animations
  colors: {
    primary: "bg-slate-800",
    accent: "text-emerald-400",
  },
  sections: ["Hero", "About", "Projects", "Social", "Contact"] as const,

  about: {
    title: "About Me",
    avatar: "/images/avatar.png",
    description: `
Highly motivated recent graduate with a Master's degree in Information Technology 
(specializing in Software Engineering) from Charles Darwin University. Experienced in 
software development, automated testing, cloud services, and data analytics. Passionate 
about cloud technologies and eager to leverage strong analytical and technical skills 
in a software or cloud engineering role.
    `.trim(),
    funFact: "I love singing karaoke and exploring new technologies in my free time.",
    resumeUrl: "/resume.pdf",
    location: "Darwin City, NT, 0800",
    languages: ["English"], 
    skills: [
      { name: "Python", level: 90 },
      { name: "Ruby", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Docker", level: 70 },
      { name: "Kubernetes", level: 65 },
    ],
  },

  projects: [
    {
      title: "Cloud-based Tax Calculator",
      description:
        "Developed and deployed a scalable tax calculator web application using Ruby on Rails, React, and AWS cloud services.",
      tech: ["Rails", "React", "AWS"],
      image: "/images/cloud-tax-calculator.png",
      link: "https://austratax.com.au",
    },
    {
      title: "LeaveLogic",
      description:
        "Leave planning software as personal as your people",
      tech: ["Ruby on Rails", "React", "ASW"],
      image: "/images/image1.png",
      link: "https://https://leavelogic.com/",
    },
    {
      title: "Vendor Risk Management",
      description:
        "Designed and implemented a software tool for managing and analyzing vendor risks using automated workflows.",
      tech: ["React", "Node.js", "Cypress"],
      image: "/images/image2.png",
      link: "https://github.com/bishwasmgr/vendor-risk-management",
    },
  ],

  contact: {
    email: "bishwastmgr@gmail.com",
    linkedin: "https://linkedin.com/in/bishwastmgr",
    github: "https://github.com/bishwasmgr",
  },
};
