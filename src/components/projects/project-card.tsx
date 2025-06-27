"use client";

import Link from "next/link";
import { Card, CardBody, CardFooter, Chip, Button, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatedTitle } from "@/components/animated";
import { GitHubIcon } from "@/components/icons";
import type { Project } from "@/types";

export type ProjectSummary = Pick<
  Project,
  | "id"
  | "slug"
  | "title"
  | "description"
  | "image"
  | "tags"
  | "githubUrl"
  | "demoUrl"
  | "isFeatured"
>;

type ProjectCardProps = {
  project: ProjectSummary;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card radius="lg" shadow="none" className="border-2 border-content2 h-full">
      <CardBody className="p-0 overflow-hidden">
        <div className="border-b-2 border-content2 aspect-video overflow-hidden">
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
              },
            }}
            className="w-full h-full"
          >
            <Image
              removeWrapper
              alt={project.title}
              className="w-full h-full object-cover"
              src={project.image}
              radius="none"
            />
          </motion.div>
        </div>
        <div className="p-5">
          <div className="flex gap-2 flex-wrap mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <Chip
                key={tag}
                size="sm"
                variant="flat"
                color="primary"
                classNames={{
                  content: "font-medium",
                  base: "hover:scale-105 transition-transform cursor-default",
                }}
              >
                {tag}
              </Chip>
            ))}
            {project.tags.length > 3 && (
              <Chip
                size="sm"
                variant="flat"
                color="default"
                classNames={{
                  content: "font-medium",
                  base: "hover:scale-105 transition-transform cursor-default",
                }}
              >
                +{project.tags.length - 3}
              </Chip>
            )}
          </div>
          <AnimatedTitle title={project.title} as="h3" className="mb-2" />
          <p className="text-default-500 line-clamp-2">{project.description}</p>
        </div>
      </CardBody>
      <CardFooter className="flex justify-between gap-2">
        <Button
          as={Link}
          radius="lg"
          href={`/projects/${project.slug}`}
          variant="light"
          color="primary"
          endContent={
            <ArrowRight size={16} className="group-hover:translate-x-2" />
          }
          className="group"
        >
          View Details
        </Button>
        <div className="flex gap-2">
          <Button
            as="a"
            radius="lg"
            href={project.githubUrl}
            target="_blank"
            isIconOnly
            variant="flat"
            aria-label="GitHub repository"
          >
            <GitHubIcon className="text-foreground dark:text-white group-hover:text-primary h-4 w-4 transition-colors duration-200" />
          </Button>
          {project.demoUrl && (
            <Button
              as="a"
              radius="lg"
              href={project.demoUrl}
              target="_blank"
              isIconOnly
              variant="flat"
              aria-label="Live demo"
            >
              <ArrowUpRight
                size={16}
                className="text-foreground dark:text-white group-hover:text-primary h-4 w-4 transition-colors duration-200"
              />
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
