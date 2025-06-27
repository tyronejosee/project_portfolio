"use client";

import { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Chip,
  Progress,
} from "@heroui/react";
import { useTranslation } from "react-i18next";
import { getProjects } from "@/data/projects";

export const ProjectsOverview = () => {
  const { t } = useTranslation();
  const projects = getProjects(t);

  // Project statistics
  const totalProjects = projects.length;
  const completedProjects = projects.length - 2;
  const completionRate = (completedProjects / totalProjects) * 100;

  // Project types distribution
  const projectTypes = {
    frontend: 3,
    fullstack: 2,
    mobile: 1,
  };

  // Most used technologies
  const technologies = useMemo(() => {
    const techCount: Record<string, number> = {};

    projects.forEach((project) => {
      project.tags.forEach((tag) => {
        techCount[tag] = (techCount[tag] || 0) + 1;
      });
    });

    return Object.entries(techCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold">Projects Overview</h2>
        <p className="text-default-500 text-sm">Summary of all projects</p>
      </CardHeader>
      <Divider />
      <CardBody className="p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Project Stats</h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-default-600">Completion Rate</span>
                  <span className="font-semibold">
                    {completionRate.toFixed(0)}%
                  </span>
                </div>
                <Progress
                  value={completionRate}
                  color="primary"
                  className="h-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-content2 p-4 rounded-lg text-center">
                  <p className="text-2xl font-semibold">{totalProjects}</p>
                  <p className="text-default-500 text-sm">Total Projects</p>
                </div>
                <div className="bg-content2 p-4 rounded-lg text-center">
                  <p className="text-2xl font-semibold">{completedProjects}</p>
                  <p className="text-default-500 text-sm">Completed</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Project Types</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-default-600">Frontend</span>
                    <span>{projectTypes.frontend}</span>
                  </div>
                  <Progress
                    value={(projectTypes.frontend / totalProjects) * 100}
                    color="success"
                    className="h-2"
                  />

                  <div className="flex justify-between items-center mt-2">
                    <span className="text-default-600">Full Stack</span>
                    <span>{projectTypes.fullstack}</span>
                  </div>
                  <Progress
                    value={(projectTypes.fullstack / totalProjects) * 100}
                    color="primary"
                    className="h-2"
                  />

                  <div className="flex justify-between items-center mt-2">
                    <span className="text-default-600">Mobile</span>
                    <span>{projectTypes.mobile}</span>
                  </div>
                  <Progress
                    value={(projectTypes.mobile / totalProjects) * 100}
                    color="secondary"
                    className="h-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Recent Projects</h3>

            <div className="space-y-4">
              {projects.slice(0, 4).map((project) => (
                <div
                  key={project.id}
                  className="flex gap-4 p-3 border border-divider rounded-lg"
                >
                  <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="font-semibold text-sm truncate">
                      {project.title}
                    </h4>
                    <p className="text-default-500 text-xs line-clamp-1">
                      {project.description}
                    </p>
                    <div className="flex gap-1 mt-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <Chip
                          key={tag}
                          size="sm"
                          variant="flat"
                          className="text-xs"
                        >
                          {tag}
                        </Chip>
                      ))}
                      {project.tags.length > 2 && (
                        <Chip size="sm" variant="flat" className="text-xs">
                          +{project.tags.length - 2}
                        </Chip>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Chip
                      color={project.id === "1" ? "primary" : "success"}
                      size="sm"
                      variant="flat"
                    >
                      {project.id === "1" ? "In Progress" : "Completed"}
                    </Chip>
                  </div>
                </div>
              ))}
            </div>

            <Divider className="my-4" />

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Most Used Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map(([tech, count]) => (
                  <Chip key={tech} variant="flat" className="gap-1">
                    {tech}
                    <span className="ml-1 text-xs bg-default-100 px-1.5 py-0.5 rounded-full">
                      {count}
                    </span>
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
