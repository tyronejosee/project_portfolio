"use client";

import { useCallback, useEffect, useState } from "react";
import { Card, CardBody, Chip, Image, Tab, Tabs } from "@heroui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Calendar } from "lucide-react";
import { AnimatedTitle } from "@/components/animated";
import { getExperiences } from "@/data/experience";
import type { Experience } from "@/types";

export default function ExperiencePage() {
  const { t } = useTranslation();

  const [selectedCategory, setSelectedCategory] =
    useState<string>("experience");
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    setExperiences(getExperiences(t));
  }, [t]);

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

  const formatDate = useCallback((dateString: string) => {
    if (typeof window === "undefined") return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  }, []);

  const handleTabChange = useCallback((key: React.Key) => {
    setSelectedCategory(String(key));
  }, []);

  return (
    <div className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4 md:gap-6"
      >
        {/* Header */}
        <motion.header variants={itemVariants} className="text-center">
          <AnimatedTitle title={t("experiences.title")} className="mb-4" />
          <p className="text-default-600 text-lg max-w-2xl mx-auto">
            {t("experiences.subtitle")}
          </p>
        </motion.header>

        {/* Tabs */}
        <motion.nav variants={itemVariants} className="flex justify-center">
          <Tabs
            aria-label="Skill categories"
            color="primary"
            variant="underlined"
            classNames={{ tabList: "mx-auto" }}
            selectedKey={selectedCategory}
            onSelectionChange={handleTabChange}
          >
            <Tab key="experience" title={t("experiences.tabs.experiences")} />
            <Tab
              key="certifications"
              title={t("experiences.tabs.certifications")}
            />
          </Tabs>
        </motion.nav>

        {selectedCategory === "experience" && (
          <motion.section variants={containerVariants}>
            {experiences.map((experience, index) => (
              <motion.div key={experience.id} variants={itemVariants}>
                <Card
                  radius="lg"
                  shadow="none"
                  className="h-full border-2 border-content2"
                >
                  <CardBody className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {experience.logo && (
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-content2 rounded-lg flex items-center justify-center overflow-hidden">
                            <Image
                              removeWrapper
                              alt={experience.company}
                              src={experience.logo}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <div>
                            <AnimatedTitle
                              as="h2"
                              className="mb-2"
                              title={experience.role}
                            />
                            <div className="flex items-center gap-2">
                              <a
                                href={experience.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                {experience.company}
                              </a>
                              {experience.endDate === null && (
                                <Chip
                                  size="sm"
                                  color="success"
                                  variant="flat"
                                  classNames={{
                                    content: "font-medium",
                                    base: "hover:scale-105 transition-transform cursor-default",
                                  }}
                                >
                                  Current
                                </Chip>
                              )}
                            </div>
                          </div>

                          <div className="text-default-500 mt-2 md:mt-0">
                            <div className="flex items-center gap-1">
                              <Calendar size={16} className="mb-1 mr-2" />
                              <span>
                                {formatDate(experience.startDate)} -{" "}
                                {experience.endDate
                                  ? formatDate(experience.endDate)
                                  : "Present"}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-default-600 mb-4">
                          {experience.description}
                        </p>

                        <h3 className="font-black mb-2">
                          {t("experiences.key_achievements")}
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-default-600 mb-4">
                          <ul className="list-disc list-inside space-y-1 text-default-600 mb-4">
                            {(
                              t(`experiences.${experience.id}.achievements`, {
                                returnObjects: true,
                              }) as string[]
                            ).map?.((item, idx) => (
                              <li key={idx}>{item}</li>
                            )) || (
                              <li className="italic text-default-400">
                                No achievements listed
                              </li>
                            )}
                          </ul>
                        </ul>

                        <h3 className="font-semibold mb-2">
                          {t("experiences.technologies_used")}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <Chip
                              key={i}
                              variant="flat"
                              color="primary"
                              classNames={{
                                content: "font-medium text-foreground",
                                base: "hover:scale-105 transition-transform cursor-default",
                              }}
                            >
                              {tech}
                            </Chip>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {index < experiences.length - 1 && (
                  <div className="flex justify-center">
                    <div className="h-4 md:h-6 border-l-4 border-dashed border-primary animate-pulse"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.section>
        )}

        {selectedCategory === "certifications" && (
          <motion.section variants={itemVariants}>
            {/* TODO: Add certifications */}
            <Card
              radius="lg"
              shadow="none"
              className="h-full border-2 border-content2"
            >
              <CardBody className="p-4 md:p-6">
                <AnimatedTitle
                  title="Certifications"
                  as="h2"
                  className="mb-4"
                />

                <div className="space-y-6">
                  <div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <h3 className="font-semibold">
                            Frontend Masters Certification
                          </h3>
                          <span className="text-default-500">2019</span>
                        </div>
                        <p className="text-default-500">
                          Completed advanced courses in React, JavaScript
                          performance, and state management.
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <h3 className="font-semibold">
                            AWS Certified Developer
                          </h3>
                          <span className="text-default-500">2021</span>
                        </div>
                        <p className="text-default-500">
                          Specialized in serverless architecture and
                          cloud-native applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.section>
        )}
      </motion.div>
    </div>
  );
}
