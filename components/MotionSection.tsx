"use client";

// imports removed
import type { ReactNode } from "react";

type MotionSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  reveal?: boolean;
};

export default function MotionSection({
  id,
  children,
  className = "",
  reveal = true,
}: MotionSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-4 py-16 sm:scroll-mt-28 sm:px-8 sm:py-24 lg:px-12 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
