"use client";

import { Button, Card, CardBody, Chip, Image } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { BadgeCheck, Eye, Save } from "lucide-react";
import { GithubStats } from "@/components/dashboard";
import { AnimatedTitle } from "@/components/animated";
import { getProfile } from "@/data/profile";

export const AboutSection = () => {
  const { t } = useTranslation();
  const profile = getProfile(t);

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
        className="mx-auto"
      >
        {/* Aside */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="sticky top-24 flex flex-col gap-4">
              {/* Avatar */}
              <div className="border-2 border-content2 aspect-square overflow-hidden rounded-3xl">
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
                    shadow="none"
                    alt="Jane Developer"
                    className="w-full h-full object-cover"
                    src="https://img.heroui.chat/image/avatar?w=400&h=400&u=1"
                  />
                </motion.div>
              </div>

              {/* Profile info */}
              <div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {profile.availableForHire && (
                    <Chip
                      color="success"
                      variant="flat"
                      radius="sm"
                      classNames={{
                        content: "font-medium",
                        base: "hover:scale-105 transition-transform cursor-default",
                      }}
                    >
                      {t("home.about.availableForHire")}
                    </Chip>
                  )}

                  {profile.experienceYears > 0 && (
                    <Chip
                      color="primary"
                      variant="flat"
                      radius="sm"
                      classNames={{
                        content: "font-medium",
                        base: "hover:scale-105 transition-transform cursor-default",
                      }}
                    >
                      {/* 2+ years experience */}
                      {profile.experienceYears}+{" "}
                      {t("home.about.yearsExperience")}
                    </Chip>
                  )}

                  {profile.availableForRemote && (
                    <Chip
                      variant="flat"
                      radius="sm"
                      classNames={{
                        content: "font-medium",
                        base: "hover:scale-105 transition-transform cursor-default",
                      }}
                    >
                      {t("home.about.remote")}
                    </Chip>
                  )}
                </div>
              </div>

              {/* GitHub stats */}
              <div className="border-t-2 border-content2 pt-4">
                <GithubStats />
              </div>

              {/* Buttons */}
              <div className="flex flex-row gap-2">
                <Button
                  as="a"
                  size="lg"
                  download
                  href={profile.resumeURL}
                  className="group bg-gradient-to-r from-purple-600 via-primary to-blue-600 animate-gradient-move text-sm text-white font-medium w-full"
                  startContent={
                    <Save
                      size={16}
                      className="group-hover:rotate-180 transition-transform"
                    />
                  }
                >
                  {t("buttons.resume")}
                </Button>
                <Button
                  as="a"
                  size="lg"
                  variant="bordered"
                  title="View CV"
                  aria-label="View CV"
                  href={profile.resumeURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  startContent={
                    <Eye
                      size={16}
                      className="group-hover:rotate-180 transition-transform"
                    />
                  }
                  className="bg-content1 border-2 border-content2"
                  isIconOnly
                ></Button>
              </div>
            </div>
          </motion.div>

          {/* About me */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <Card
              radius="lg"
              shadow="none"
              className="border-2 border-content2 h-full"
            >
              <CardBody className="p-4 md:p-6 gap-4 md:gap-6">
                {/* About Me */}
                <div>
                  <AnimatedTitle
                    title={t("home.about.about_me")}
                    as="h2"
                    className="mb-3"
                  />
                  <p className="text-default-600 mb-3">{t("profile.bio")}</p>
                </div>

                <hr className="border-t-2 border-content2" />

                {/* Core Values */}
                <div>
                  <AnimatedTitle
                    title={t("home.about.core_values")}
                    as="h2"
                    className="mb-3"
                  />
                  <ul className="space-y-4">
                    {profile.coreValues.map((value) => (
                      <li key={value.id} className="flex gap-3">
                        <BadgeCheck size={20} className="text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">{value.title}</h3>
                          <p className="text-default-600">
                            {value.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="border-t-2 border-content2" />

                {/* Education */}
                <div>
                  <AnimatedTitle
                    as="h2"
                    className="mb-3"
                    title={t("home.about.education")}
                  />
                  <div className="space-y-4">
                    {profile.education.map((education) => (
                      <div key={education.id}>
                        <h3 className="font-semibold">{education.title}</h3>
                        <p className="text-default-500">
                          {education.company} • {education.year}
                        </p>
                        <p className="text-default-600 mt-1">
                          {education.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="border-t-2 border-content2" />

                {/* Interests */}
                <div>
                  <AnimatedTitle
                    as="h2"
                    className="mb-3"
                    title={t("home.about.interests")}
                  />
                  <div className="flex flex-wrap gap-2">
                    {profile.interestedIn.map((interest) => (
                      <Chip
                        key={interest}
                        variant="flat"
                        color="primary"
                        classNames={{
                          content: "font-medium text-foreground",
                          base: "hover:scale-105 transition-transform cursor-default",
                        }}
                      >
                        {interest}
                      </Chip>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
