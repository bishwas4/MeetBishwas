// src/components/About.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig, Skill } from "@/data/siteConfig";
import { TimelineEvent } from "@/data/timeline";
import { socialLinks } from "@/data/socialLinks";
import { techStack } from "@/data/techStack";
import { testimonials } from "@/data/testimonials";

export default function About() {
  const { title, avatar, description, skills, funFact, resumeUrl, location, languages } = siteConfig.about;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold mb-2">{title}</h2>
          {avatar && (
            <Image
              src={avatar}
              alt={`${siteConfig.name} avatar`}
              width={160}
              height={160}
              className="mx-auto mb-4 w-40 h-40 rounded-full object-cover border-4 border-emerald-500"
            />
          )}
          <p className="mb-4 whitespace-pre-line leading-relaxed">{description}</p>
          <p className="italic text-sm text-gray-600 dark:text-gray-400 mb-6">{funFact}</p>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-6 px-6 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition"
          >
            Download Resume
          </a>
          <div className="flex justify-center space-x-4 mb-4">
            {socialLinks.map(({ platform, url, Icon }) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-emerald-500 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
          <div className="flex justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <span>📍 {location}</span>
            {languages.map((lang) => (
              <span key={lang}>💬 {lang}</span>
            ))}
          </div>
        </motion.div>

        {/* Skills: Radial Chart & Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-2xl font-medium mb-4">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((s: Skill) => (
              <div key={s.name} className="text-center">
                <div className="relative mb-2 w-20 h-20 mx-auto">
                  {/* simple radial progress using SVG circle */}
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path
                      className="text-gray-200"
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      strokeWidth="3"
                    />
                    <path
                      className="text-emerald-500"
                      strokeDasharray={`${s.level}, 100"`}
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      strokeWidth="3"
                    />
                    <text x="18" y="20.35" className="text-sm fill-current text-gray-700 dark:text-gray-200" textAnchor="middle">
                      {`${s.level}%`}
                    </text>
                  </svg>
                </div>
                <span className="block font-medium">{s.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl font-medium mb-4">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map(({ name, Icon }) => (
              <div key={name} className="flex flex-col items-center w-20">
                <Icon className="text-4xl text-emerald-500" />
                <span className="text-sm mt-1 text-center">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h3 className="text-2xl font-medium mb-4">Career Timeline</h3>
          {/* Timeline component can be built similarly */}
          <ul className="border-l-2 border-emerald-500">
            {TimelineEvent.map((e: TimelineEvent) => (
              <li key={e.date} className="mb-8 ml-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">{e.date}</span>
                <h4 className="text-lg font-semibold">{e.title}</h4>
                <p className="text-gray-700 dark:text-gray-300">{e.description}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h3 className="text-2xl font-medium mb-4">Testimonials</h3>
          <div className="space-y-6">
            {testimonials.map((t) => (
              <blockquote key={t.author} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <p className="italic mb-2">“{t.quote}”</p>
                <footer className="text-right font-semibold">— {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
