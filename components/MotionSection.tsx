"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function MotionSection({
  id,
  children,
  className = "",
}: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-28 px-5 py-16 sm:px-8 lg:px-12 ${className}`}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </motion.section>
  );
}
