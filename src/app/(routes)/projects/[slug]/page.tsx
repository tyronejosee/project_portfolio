"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { Button, Chip, Image, Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, Code, Globe } from "lucide-react";
import { AnimatedTitle } from "@/components/animated";
import { getProjects } from "@/data/projects";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const { t } = useTranslation();
  const projects = getProjects(t);
  const project = projects.find((p) => p.slug === slug);

  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    if (project && project.images && project.images.length > 0) {
      setSelectedImage(project.images[0]);
    }
  }, [project]);

  if (!project) notFound();

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-8"
      >
        <nav>
          <Button
            as={Link}
            radius="lg"
            href="/projects"
            variant="bordered"
            startContent={
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
            }
            className="bg-content1 border-2 border-content2"
          >
            Back to Projects
          </Button>
        </nav>

        {/* Navigation */}
        <header className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4 col-span-2">
            <div className="space-y-4">
              <div>
                <AnimatedTitle className="mb-2" title={project.title} />
                <p className="text-default-600 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    variant="flat"
                    color="primary"
                    size="sm"
                    classNames={{
                      content: "font-medium",
                      base: "hover:scale-105 transition-transform cursor-default",
                    }}
                  >
                    {tag}
                  </Chip>
                ))}
              </div>
            </div>
          </div>

          {/* Main Actions */}
          <div className="flex gap-2">
            {project.demoUrl && (
              <Button
                as="a"
                radius="lg"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="bordered"
                color="primary"
                startContent={
                  <Globe
                    size={16}
                    className="group-hover:rotate-180 transition-transform"
                  />
                }
                className="group order-2 lg:order-1 bg-content1 border-2 border-content2"
              >
                {t("buttons.preview")}
              </Button>
            )}

            <Button
              as={Link}
              radius="lg"
              href={project.githubUrl}
              size="lg"
              className="group order-1 lg:order-2 group bg-gradient-to-r from-purple-600 via-primary to-blue-600 animate-gradient-move text-white font-medium flex-1 sm:flex-initial"
              startContent={
                <Code
                  size={16}
                  className="group-hover:rotate-180 transition-transform"
                />
              }
            >
              {t("buttons.view_code")}
            </Button>
          </div>
        </header>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card
              shadow="none"
              radius="lg"
              className="overflow-hidden mb-8 border-2 border-content2"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
                className="cursor-pointer"
              >
                <Image
                  removeWrapper
                  alt={project.title}
                  className="w-full h-[400px] object-cover"
                  src={selectedImage || project.image}
                  radius="none"
                />
              </motion.div>
            </Card>

            {project.images && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
                {project.images.map((image, index) => (
                  <Card
                    key={index}
                    radius="lg"
                    shadow="none"
                    isPressable
                    onPress={() => setSelectedImage(image)}
                    className={`overflow-hidden border-2 ${
                      selectedImage === image
                        ? "border-primary"
                        : "border-content2"
                    }`}
                  >
                    <Image
                      removeWrapper
                      alt={`${project.title} thumbnail ${index + 1}`}
                      className="w-full h-20 object-cover"
                      src={image}
                      radius="none"
                    />
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Info Sidebar */}
          <section className="lg:col-span-1 flex flex-col gap-4">
            <Card
              radius="lg"
              shadow="none"
              className="border-2 border-content2"
            >
              <CardBody className="p-4 md:p-6">
                <div>
                  <AnimatedTitle
                    as="h2"
                    title={t("projects.problem")}
                    className="mb-6"
                  />
                  <p className="text-default-600">{project.problem}</p>
                </div>

                <div className="border-t-2 border-content2 pt-4">
                  <AnimatedTitle
                    as="h2"
                    title={t("projects.solution")}
                    className="mb-6"
                  />
                  <p className="text-default-600">{project.solution}</p>
                </div>
              </CardBody>
            </Card>
          </section>
        </div>

        {/* Related Projects */}
        <aside className="border-t-2 border-content2 pt-8">
          <AnimatedTitle
            as="h2"
            title={t("projects.more_projects.title")}
            className="mb-6"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 2)
              .map((relatedProject) => (
                <Card
                  key={relatedProject.id}
                  shadow="none"
                  radius="lg"
                  className="overflow-hidden border-2 border-content2"
                >
                  <Image
                    removeWrapper
                    alt={relatedProject.title}
                    className="w-full h-40 object-cover"
                    src={relatedProject.image}
                    radius="none"
                  />
                  <CardBody className="p-4 md:p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      {relatedProject.title}
                    </h3>
                    <p className="text-default-500 line-clamp-2 mb-4">
                      {relatedProject.description}
                    </p>
                    <Button
                      as={Link}
                      radius="lg"
                      href={`/projects/${relatedProject.slug}`}
                      variant="light"
                      color="primary"
                      size="sm"
                      endContent={<ArrowRight size={16} className="ml-2" />}
                    >
                      View Project
                    </Button>
                  </CardBody>
                </Card>
              ))}
          </div>
        </aside>
      </motion.div>
    </div>
  );
}
