import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactForm from "@/components/ContactForm";
export default function Home() {
  return (
  <>
    <title>MeetBishwas – AI Engineer</title>
      <meta name="description" content="Portfolio of Your Name, AI Engineer." />
      <meta property="og:title" content="Your Name – AI Engineer" />
      <meta property="og:description" content="Building AI-powered web apps." />
      <meta property="og:image" content="/images/og-image.png" />
      <Hero />
      <About />
      <ProjectsGrid /> 
      <ContactForm />        

  </>
  )
}