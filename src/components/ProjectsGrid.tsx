// src/components/ProjectsGrid.tsx
"use client";
import React from "react";
import { siteConfig, Project } from "@/data/siteConfig";

export default function ProjectsGrid() {
  const projects = siteConfig.projects as Project[];

  return (
    <section id="projects" className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, description, tech, image, link }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden"
            >
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-2xl font-medium mb-2">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="text-sm bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
