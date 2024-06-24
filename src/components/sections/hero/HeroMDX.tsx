/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Prose } from "@/components/mdx/Prose";
import { MDXRemote } from "next-mdx-remote/rsc";
import { type ClassAttributes, type HTMLAttributes, type JSX } from "react";

const components = {
  h1: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>,
  ) => (
    <h1
      {...props}
      className="translate-y-[-1rem] animate-fade-in text-balance py-6 text-5xl font-medium leading-none tracking-tighter opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl"
    >
      {props.children}
    </h1>
  ),
  p: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>,
  ) => (
    <Prose className="mx-auto">
      <p className="mb-12 translate-y-[-1rem] animate-fade-in text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-lg">
        {props.children}
      </p>
    </Prose>
  ),
};

export function HeroMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}