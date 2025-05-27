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

export const siteConfig = {
  name: "Your Name",
  profession: "AI Engineer",
  animation: "your-lottie-file.json",
  colors: {
    primary: "bg-slate-800",
    accent: "text-emerald-400",
  },
  sections: ["Hero", "About", "Projects", "Contact"] as const,

  about: {
    title: "About Me",
    avatar: "/images/avatar.png",
    description: `
I’m Your Name, an AI Engineer who loves building 
data-driven applications and experimenting with machine learning models.
    `.trim(),
    funFact: "I build drones on weekends.",
    resumeUrl: "/resume.pdf",
    location: "Darwin, NT, Australia",
    languages: ["English", "Nepali"], 
    skills: [
      { name: "Python", level: 90 },
      { name: "TensorFlow", level: 80 },
      { name: "Next.js", level: 85 },
      { name: "Docker", level: 75 },
    ] as Skill[],
  },

  projects: [
    {
      title: "AI Chatbot Dashboard",
      description: "A real-time dashboard for monitoring chatbot interactions, built with Next.js and WebSockets.",
      tech: ["Next.js", "Socket.io", "Chart.js"],
      image: "/images/chatbot-dashboard.png",
      link: "https://github.com/your-username/ai-chatbot-dashboard",
    },
    {
      title: "Image Classifier API",
      description: "A REST API for image classification using TensorFlow.js, deployed in Docker containers.",
      tech: ["Node.js", "TensorFlow.js", "Docker"],
      image: "/images/image-classifier.png",
      link: "https://github.com/your-username/image-classifier-api",
    },
    {
      title: "Portfolio Starter",
      description: "This very portfolio template—fully themable, community-driven, and built with Next.js + Lottie.",
      tech: ["Next.js", "Tailwind CSS", "Lottie"],
      image: "/images/portfolio-starter.png",
      link: "https://github.com/your-username/minimal-grid-portfolio",
    },
    // …add more here
  ] as Project[],

  contact: {
    email: "you@domain.com",
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
  },
};
