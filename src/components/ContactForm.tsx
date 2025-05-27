// src/components/ContactForm.tsx
"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { siteConfig } from "@/data/siteConfig";

interface ContactFormProps {
  hideHeader?: boolean;
}

export default function ContactForm({ hideHeader = false }: ContactFormProps) {
  const { email, linkedin, github } = siteConfig.contact;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(() => {
        setStatus("success");
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-20 bg-white text-gray-900">
      <div className="max-w-lg mx-auto px-4">
        {!hideHeader && (
          <h2 className="text-4xl font-semibold mb-6">Contact Me</h2>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full border rounded p-2"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full border rounded p-2"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full border rounded p-2 h-32"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-emerald-500 text-white rounded"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-600">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600">Something went wrong. Try again.</p>
        )}

        <div className="mt-8 flex justify-center space-x-6 text-xl">
          <a href={`mailto:${email}`} className="hover:text-emerald-600">
            ✉️ Email
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600"
          >
            💼 LinkedIn
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600"
          >
            🐙 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
