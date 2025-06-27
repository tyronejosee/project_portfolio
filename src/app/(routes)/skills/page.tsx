"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Card, CardBody, Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BookOpen, Heart, Target } from "lucide-react";
import { AnimatedTitle } from "@/components/animated";
import { skills, getSkillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

type SkillCategory = {
  id: string;
  name: string;
};

export default function SkillsPage() {
  const { t } = useTranslation();

  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    setSkillCategories(getSkillCategories(t));
  }, [t]);

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "all") {
      return skills;
    }
    return skills.filter((skill) => skill.category === selectedCategory);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
          <AnimatedTitle title={t("skills.title")} className="mb-4" />
          <p className="text-default-600 text-lg max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.header>

        {/* Tabs */}
        <motion.div
          variants={itemVariants}
          className="w-full overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-muted-foreground/40 scrollbar-track-transparent md:flex md:justify-center"
        >
          <Tabs
            aria-label="Skill categories"
            color="primary"
            variant="underlined"
            selectedKey={selectedCategory}
            onSelectionChange={handleTabChange}
          >
            <Tab key="all" title={t("skills.categories.default")} />
            {skillCategories.map((category) => (
              <Tab key={category.id} title={category.name} />
            ))}
          </Tabs>
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card
                  radius="lg"
                  shadow="none"
                  className="border-2 border-content2 h-full"
                >
                  <CardBody className="flex flex-col items-center gap-2 md:gap-4 text-center p-4 md:p-6">
                    <Icon
                      className={cn(
                        "size-14 md:size-24",
                        skill.isFlat ? "text-neutral-950 dark:text-white" : ""
                      )}
                    />
                    <h3 className="text-sm font-semibold">{skill.name}</h3>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Learning journey */}
        <motion.div variants={itemVariants}>
          <Card
            radius="lg"
            shadow="none"
            className="border-2 border-content2 h-full"
          >
            <CardBody className="p-4 md:p-6">
              <AnimatedTitle
                title={t("skills.learning_journey.title")}
                className="mb-4"
                as="h2"
              />
              <p className="text-default-600 mb-4">
                {t("skills.learning_journey.description")}
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="text-primary mt-1">
                    <BookOpen className="size-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      {t("skills.learning_journey.currently_learning.title")}
                    </h3>
                    <p className="text-default-600">
                      {t(
                        "skills.learning_journey.currently_learning.description"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-primary mt-1">
                    <Target className="size-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      {t("skills.learning_journey.next_goals.title")}
                    </h3>
                    <p className="text-default-600">
                      {t("skills.learning_journey.next_goals.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-primary mt-1">
                    <Heart className="size-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      {t("skills.learning_journey.passion.title")}
                    </h3>
                    <p className="text-default-600">
                      {t("skills.learning_journey.passion.description")}
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
