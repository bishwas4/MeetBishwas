"use client";

import React from "react";
import { Mail } from "lucide-react"; // you can also use your own SVG

export default function FloatingContactButton() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      onClick={scrollToContact}
      aria-label="Contact Us"
      className="
        fixed 
        bottom-6 
        right-6 
        bg-emerald-500 
        text-white 
        p-3 
        rounded-full 
        shadow-lg 
        hover:bg-emerald-600 
        transition-colors
        focus:outline-none 
        focus:ring-2 
        focus:ring-emerald-300
      "
    >
      <Mail size={24} />
    </button>
  );
}
