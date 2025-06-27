"use client";

import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { AlertCircle } from "lucide-react";
import { AnimatedTitle } from "@/components/animated";

export default function TermsPage() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const sections = t("terms.sections", { returnObjects: true }) as {
    title: string;
    description: string;
    items?: string[];
    note?: string;
  }[];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="section-container space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <Card
          radius="lg"
          shadow="none"
          className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950 border-2 border-primary-200 dark:border-primary-800"
        >
          <CardBody className="p-4 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary-700 dark:text-primary-300">
                {t("terms.title")}
              </h1>
            </div>
            <p className="text-foreground-600 dark:text-foreground-400 leading-relaxed">
              {t("terms.subtitle")}
            </p>
          </CardBody>
        </Card>
      </motion.div>

      {/* Sections */}
      <motion.div variants={containerVariants} className="space-y-4">
        {sections.map(({ title, description, items, note }, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card
              radius="lg"
              shadow="none"
              className="border-2 border-content2 bg-content1"
            >
              <CardBody className="p-4 md:p-6 gap-4 md:gap-6">
                <AnimatedTitle title={title} as="h2" />
                <p className="text-foreground-600 dark:text-foreground-400">
                  {description}
                </p>
                {items && (
                  <ul className="list-disc list-inside text-foreground-600 dark:text-foreground-400 space-y-2">
                    {items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {note && (
                  <p className="text-foreground-600 dark:text-foreground-400">
                    {note}
                  </p>
                )}
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
