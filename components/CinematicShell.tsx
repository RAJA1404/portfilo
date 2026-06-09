"use client";

import Lenis from "lenis";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ReactNode, useEffect } from "react";

type CinematicShellProps = {
  children: ReactNode;
};

declare global {
  interface Window {
    __portfolioLenis?: Lenis;
  }
}

export default function CinematicShell({ children }: CinematicShellProps) {
  const reducedMotion = useReducedMotion();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 180, damping: 24 });
  const smoothY = useSpring(cursorY, { stiffness: 180, damping: 24 });
  const progress = useMotionValue(0);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    window.__portfolioLenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.__portfolioLenis = undefined;
    };
  }, [reducedMotion]);

  useEffect(() => {
    function updateCursor(event: MouseEvent) {
      cursorX.set(event.clientX - 14);
      cursorY.set(event.clientY - 14);
    }

    function updateProgress() {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      progress.set(scrollable > 0 ? window.scrollY / scrollable : 0);
    }

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("scroll", updateProgress);
    };
  }, [cursorX, cursorY, progress]);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-blue-500 to-violet-500"
        style={{ scaleX: progress }}
      />
      {!reducedMotion ? (
        <motion.div
          className="pointer-events-none fixed z-[80] hidden h-7 w-7 rounded-full border border-blue-300/50 mix-blend-difference md:block"
          style={{ x: smoothX, y: smoothY }}
        />
      ) : null}
      {children}
    </>
  );
}
