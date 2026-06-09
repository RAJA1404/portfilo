"use client";

import { motion } from "framer-motion";
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
    <motion.section
      id={id}
      className={`scroll-mt-28 px-5 py-24 sm:px-8 lg:px-12 ${className}`}
      initial={reveal ? { opacity: 0, y: 40 } : false}
      whileInView={reveal ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </motion.section>
  );
}
