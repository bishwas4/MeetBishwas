// src/components/Hero.tsx
"use client";

import React from "react";
import Lottie from "lottie-react";
import { siteConfig } from "@/data/siteConfig";
import animationData from "@/animations/Animation - 1748303245841.json";

export default function Hero() {
  // Sanity check: ensure we actually have a layers array
  if (!animationData?.layers) {
    console.error("Hero: invalid Lottie JSON", animationData);
    return (
      <section id="hero"
        className={`${siteConfig.colors.primary} h-screen flex items-center justify-center`}
      >
        <p className="text-white">Animation data is missing or malformed.</p>
      </section>
    );
  }

  // Debug print
  console.log("Hero animationData:", animationData);

  return (
    <section
         id="hero"
      className={`${siteConfig.colors.primary} h-screen flex flex-col items-center justify-center`}
    >
      <div className="w-64 h-64">
        {/* Lottie will fill this container */}
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <h1 className="mt-6 text-5xl font-mono text-white">
        {`print("Hi, I’m ${siteConfig.name}")`}
      </h1>
      <p className={`mt-2 text-2xl ${siteConfig.colors.accent}`}>
        {siteConfig.profession}
      </p>
    </section>
  );
}
