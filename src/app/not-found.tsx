"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedTitle } from "@/components/animated";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-theme(spacing.20))] text-center"
    >
      <AnimatedTitle title={t("notFound.title")} />
      <p className="text-xl text-gray-600 dark:text-gray-300">
        {t("notFound.subtitle")}
      </p>
      <Button
        as={Link}
        href="/"
        size="lg"
        className="group bg-gradient-to-r from-purple-600 via-primary to-blue-600 animate-gradient-move text-sm text-white font-medium"
      >
        <span className="group-hover:scale-105 transition-transform flex items-center gap-2">
          <Home size={16} />
          {t("notFound.cta")}
        </span>
      </Button>
    </motion.div>
  );
}
