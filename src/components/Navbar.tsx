// src/components/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: "Home",    id: "hero"     },
    { label: "About",   id: "about"    },
    { label: "Projects",id: "projects" },
    { label: "Contact", id: "contact"  },
  ];

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname === "/") {
      // On home page: scroll smoothly to the section
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // On any other page: navigate back to home with hash, next/router preserves scroll
      router.push(`/#${id}`, { scroll: false });
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <span className="font-bold text-xl">MeetBishwas</span>
        <ul className="flex space-x-6">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`/#${id}`}
                onClick={handleClick(id)}
                className="hover:text-emerald-500 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}

          <li>
            <Link
              href="/social"
              className="hover:text-emerald-500 transition-colors"
            >
              Social
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
