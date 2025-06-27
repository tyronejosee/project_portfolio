"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Input, Chip, Tabs, Tab, Card, CardBody } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import { ProjectCard } from "@/components/projects";
import { AnimatedTitle } from "@/components/animated";
import { getProjects } from "@/data/projects";
import type { Project } from "@/types";

type Tag = "all" | "featured";

export default function ProjectsPage() {
  const { t } = useTranslation();

  const [projects, setProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedTab, setSelectedTab] = useState<Tag>("all");

  useEffect(() => {
    setProjects(getProjects(t));
  }, [t]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => project.tags.includes(tag));

      const matchesTab =
        selectedTab === "all" ||
        (selectedTab === "featured" && project.isFeatured);

      return matchesSearch && matchesTags && matchesTab;
    });
  }, [searchQuery, selectedTags, selectedTab, projects]);

  const handleTabChange = useCallback((key: React.Key) => {
    setSelectedTab(key as Tag);
  }, []);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

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
          <AnimatedTitle title={t("projects.title")} className="mb-4" />
          <p className="text-default-600 text-lg max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.header>

        {/* Tabs */}
        <motion.nav variants={itemVariants} className="flex justify-center">
          <Tabs
            aria-label="Projects tabs"
            color="primary"
            variant="underlined"
            classNames={{ tabList: "mx-auto" }}
            selectedKey={selectedTab}
            onSelectionChange={handleTabChange}
          >
            <Tab key="all" title={t("projects.tabs.all")} />
            <Tab key="featured" title={t("projects.tabs.featured")} />
          </Tabs>
        </motion.nav>

        {/* Search and filter */}
        <motion.nav variants={itemVariants}>
          <Card
            radius="lg"
            shadow="none"
            className="h-full border-2 border-content2"
          >
            <CardBody className="gap-4 md:gap-6">
              <Input
                isClearable
                placeholder={t("projects.search_placeholder")}
                startContent={<Search size={16} />}
                value={searchQuery}
                onValueChange={setSearchQuery}
                classNames={{
                  inputWrapper: "bg-background dark:bg-content2 shadow-none",
                }}
              />

              <div className="flex flex-wrap gap-2 justify-center">
                {allTags.map((tag) => {
                  const isSelected = selectedTags.includes(tag);

                  return (
                    <Chip
                      key={tag}
                      variant={isSelected ? "solid" : "flat"}
                      color="primary"
                      onClick={() => toggleTag(tag)}
                      className="cursor-pointer"
                      classNames={{
                        content: `font-medium ${
                          isSelected ? "text-white" : "text-foreground"
                        }`,
                        base: "hover:scale-105 transition-transform cursor-default",
                      }}
                    >
                      {tag}
                    </Chip>
                  );
                })}
              </div>
            </CardBody>
          </Card>
        </motion.nav>

        {/* Projects List */}
        {filteredProjects.length > 0 ? (
          <motion.section
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.section>
        ) : (
          <motion.section variants={itemVariants} className="text-center py-12">
            <AnimatedTitle title="No projects found" as="h3" className="mb-4" />
            <p className="text-default-500">
              Try adjusting your search or filter criteria.
            </p>
          </motion.section>
        )}
      </motion.div>
    </div>
  );
}
