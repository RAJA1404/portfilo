"use client";

import Particles, {
  ParticlesProvider,
  type ParticlesPluginRegistrar,
} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { profile } from "@/data/portfolioData";

const title = "RAJA K C";
const subtitle = "AI & Data Science Student\nFull Stack Developer & IoT Innovator";
const socialLinks = [
  { label: "GitHub", href: profile.githubUrl },
  { label: "LinkedIn", href: profile.linkedinUrl },
  { label: "Email", href: `mailto:${profile.email}` },
];



const premiumEase = [0.22, 1, 0.36, 1] as const;

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2 + index * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const particlesInit: ParticlesPluginRegistrar = async (engine) => {
  await loadSlim(engine);
};

function HeroParticles() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    function updateMobileState() {
      setIsMobile(mediaQuery.matches);
    }

    updateMobileState();
    mediaQuery.addEventListener("change", updateMobileState);

    return () => mediaQuery.removeEventListener("change", updateMobileState);
  }, []);

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="hero-particles"
        className="absolute inset-0 z-0"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            number: {
              value: isMobile ? 20 : 45,
            },
            color: {
              value: "#38bdf8",
            },
            size: {
              value: {
                min: 1,
                max: 3,
              },
            },
            opacity: {
              value: 0.25,
            },
            move: {
              enable: true,
              speed: isMobile ? 0.3 : 0.5,
              direction: "none",
              outModes: {
                default: "out",
              },
            },
            links: {
              enable: true,
              color: "#38bdf8",
              opacity: 0.08,
              distance: 120,
            },
          },
          interactivity: {
            events: {
              onDiv: {
                enable: false,
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              grab: {
                distance: 120,
              },
            push: {
              quantity: 2,
            },
            },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
}

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 22 });
  const cardX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const cardY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);

  function handleMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="home"
      onMouseMove={handleMove}
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      <HeroParticles />
      <motion.div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_28rem),radial-gradient(circle_at_80%_10%,rgba(139,92,246,0.16),transparent_30rem)]"
        style={reducedMotion ? undefined : { x: cardX, y: cardY }}
      />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            className="overflow-hidden text-sm font-semibold uppercase text-blue-300"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
          >
            Portfolio / AI Product Builder / 2026
          </motion.p>
          <h1 className="mt-6 flex flex-wrap text-6xl font-semibold leading-[0.9] text-white sm:text-8xl lg:text-9xl">
            {title.split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                className={char === " " ? "w-5 sm:w-8" : "inline-block"}
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="mt-7 text-2xl font-semibold text-zinc-100 sm:text-4xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >
            {subtitle.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.p>
          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl"
            initial={false}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 1.35, ease: premiumEase }}
          >
            Building full stack applications, AI-powered solutions, and IoT
            systems that connect clean interfaces with practical engineering.
          </motion.p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {[
              { label: "View Projects", href: "#projects", primary: true },
              { label: "Download Resume", href: profile.resumeUrl },
            ].map((button, index) => (
              <motion.a
                key={button.label}
                href={button.href}
                className={`rounded-full px-7 py-4 text-center text-sm font-semibold transition ${
                  button.primary
                    ? "bg-blue-500 text-white shadow-2xl shadow-blue-500/25"
                    : "border border-white/15 text-white hover:bg-white/10"
                }`}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={buttonVariants}
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {button.label}
              </motion.a>
            ))}
          </div>
          <motion.div
            className="mt-9 flex flex-wrap gap-5 text-sm text-zinc-400"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.7 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="relative hover:text-white"
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...(reducedMotion ? {} : { x: cardX, y: cardY }),
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.05, delay: 1.1, ease: premiumEase }}
        >
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#6366f1"
            scale={1.03}
            transitionSpeed={400}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Atmospheric indigo glow behind photo */}
              <div
                style={{
                  position: "absolute",
                  width: 440,
                  height: 440,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 65%)",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />
              {/* Circular photo with soft mask fade */}
              <div
                style={{
                  position: "relative",
                  width: 400,
                  height: 400,
                  zIndex: 1,
                  maskImage:
                    "radial-gradient(circle at 50% 50%, black 45%, rgba(0,0,0,0.5) 60%, transparent 72%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at 50% 50%, black 45%, rgba(0,0,0,0.5) 60%, transparent 72%)",
                }}
              >
                <Image
                  src="/raja.jpg"
                  alt="Raja K C"
                  width={400}
                  height={400}
                  quality={100}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 5%",
                    width: "100%",
                    height: "100%",
                    imageRendering: "auto",
                  }}
                  priority
                />
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}
