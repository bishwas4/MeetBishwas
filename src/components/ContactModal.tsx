// src/components/ContactModal.tsx
"use client";

import React from "react";
import { X } from "lucide-react";
import ContactForm from "./ContactForm";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // click outside to close
    >
      <div
        className="bg-white rounded-lg p-6 relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // prevent overlay click
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Embed the ContactForm. Pass a prop to hide its standalone heading if needed */}
        <ContactForm hideHeader />
      </div>
    </div>
  );
}
