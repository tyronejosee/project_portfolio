"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button, Image } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { PencilRuler, Radio } from "lucide-react";
import { getProfile } from "@/data/profile";
import Link from "next/link";

export const HeroSection = () => {
  const { t } = useTranslation();
  const profile = getProfile(t);
  const { scrollY } = useScroll();

  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);
  const imageY = useTransform(scrollY, [0, 500], [0, -100]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 360],
      transition: {
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      },
    },
  };

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative h-[calc(100vh-60px)] overflow-hidden">
      {/* Floating particles */}
      <figure className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/20 blur-sm"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </figure>

      {/* Geometric floating shapes */}
      <motion.figure
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <motion.div
          className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-pink-400/20 to-yellow-400/20 blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rotate-45 blur-sm"
          animate={{
            y: [-30, 30, -30],
            rotate: [45, 405, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-12 h-12 border-2 border-cyan-400/40 rotate-12"
          animate={{
            rotate: [12, 372, 12],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.figure>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-8 lg:px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left content */}
          <motion.header
            className="text-center lg:text-left flex flex-col gap-10"
            style={{ y: contentY }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <motion.span
                className="flex w-fit px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm text-purple-300 rounded-full border border-purple-500/30"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                ✨ {t("profile.status")}
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                variants={itemVariants}
              >
                Hi, I&apos;m{" "}
                <motion.span
                  className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  José
                </motion.span>
              </motion.h1>

              <motion.div
                className="text-xl md:text-2xl lg:text-3xl font-medium text-default-900 h-12"
                variants={itemVariants}
              >
                <motion.span
                  animate={{
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {profile.roles.map((role) => (
                    <span key={role}>{role}</span>
                  ))}
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Slogan */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-default-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {profile.sloganLong}
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-center max-w-80">
              <div>
                <p className="text-xl font-semibold">12</p>
                <p className="text-default-500 text-xs">Projects</p>
              </div>
              <div>
                <p className="text-xl font-semibold">843</p>
                <p className="text-default-500 text-xs">Contributions</p>
              </div>
              <div>
                <p className="text-xl font-semibold">6</p>
                <p className="text-default-500 text-xs">Blog Posts</p>
              </div>
            </div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                as={Link}
                size="lg"
                href="/projects"
                className="group bg-gradient-to-r from-purple-600 via-primary to-blue-600 animate-gradient-move text-sm text-white font-medium"
              >
                <PencilRuler
                  size={16}
                  className="group-hover:rotate-180 transition-transform"
                />
                {t("buttons.see_my_projects")}
              </Button>

              <Button
                as={Link}
                size="lg"
                variant="bordered"
                href="/contact"
                className="group bg-content1 border-2 border-content2 text-primary font-medium"
              >
                <Radio
                  size={16}
                  className="group-hover:rotate-180 transition-transform"
                />
                {t("buttons.contact_me")}
              </Button>
            </motion.div>
          </motion.header>

          {/* Right side - Image section */}
          <motion.figure
            className="relative flex justify-center lg:justify-end"
            style={{ y: imageY }}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Animated background elements for image */}
            <div className="hidden absolute inset-0 md:flex items-center justify-center">
              {/* Rotating rings */}
              <motion.div
                className="absolute w-96 h-96 border border-purple-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-80 h-80 border border-pink-500/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-72 h-72 border border-cyan-500/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Floating orbs around image */}
              <motion.div
                className="absolute top-10 right-10 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-sm"
                animate={{
                  y: [20, -20, 20],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/2 left-0 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-sm"
                animate={{
                  x: [-20, 20, -20],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </div>

            {/* Main image container */}
            <motion.div
              className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 hidden lg:block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse" />

              {/* Image border with gradient */}
              <div className="relative w-full h-full p-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full">
                <div className="w-full h-full bg-gray-900 rounded-full p-2">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/hero-image.webp"
                      alt="José - Full Stack Developer"
                      className="w-full h-full object-cover rounded-full"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

              {/* Floating tech icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ⚛️
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg"
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                💻
              </motion.div>
              <motion.div
                className="absolute top-1/2 -left-6 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                animate={{
                  x: [-10, 10, -10],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                🎨
              </motion.div>
            </motion.div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};
