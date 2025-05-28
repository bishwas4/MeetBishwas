"use client";

import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface RemoteMdxProps {
  content: MDXRemoteSerializeResult;
}

export default function RemoteMdx({ content }: RemoteMdxProps) {
  return <MDXRemote {...content} />;
}
