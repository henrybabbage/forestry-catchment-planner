"use client";

import Image, { type ImageProps, type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type FigureProps = {
  caption?: string;
  srcDark?: StaticImageData;
} & ImageProps;

export function Figure({ src, srcDark, ...props }: FigureProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(matchDarkMode.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    matchDarkMode.addEventListener("change", handleChange);

    return () => {
      matchDarkMode.removeEventListener("change", handleChange);
    };
  }, []);

  const imageSrc = srcDark && isDarkMode ? srcDark : src;

  return (
    <figure className="relative">
      <Image
        src={imageSrc}
        sizes="100vw"
        className="h-full w-full rounded-sm"
        placeholder="blur"
        {...props}
        alt={props.alt || ""}
      />
      {props.caption && (
        <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {props.caption}
        </figcaption>
      )}
    </figure>
  );
}
