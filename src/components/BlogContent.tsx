"use client";

import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface BlogContentProps {
  content: MDXRemoteSerializeResult;
}

export default function BlogContent({ content }: BlogContentProps) {
  return <MDXRemote {...content} />;
}
