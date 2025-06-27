"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  Input,
  Textarea,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  Calendar,
  Check,
  ChevronLeft,
  CircleHelp,
  Mail,
  MailIcon,
  MapPin,
  Send,
} from "lucide-react";
import { AnimatedTitle } from "@/components/animated";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { getFAQs } from "@/data/faqs";
import { getProfile } from "@/data/profile";
import type { ContactFormValues } from "@/types";

export default function ContactPage() {
  const { t } = useTranslation();
  const faqs = getFAQs(t);
  const profile = getProfile(t);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  useEffect(() => {
    const stored = localStorage.getItem("contact_submitted");
    if (stored === "true") setIsBlocked(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      setIsSubmitted(true);
      reset();

      localStorage.setItem("contact_submitted", "true");
      setIsBlocked(true);
    } catch (error) {
      console.error(`Error submitting form: ${error}`);
    } finally {
      setIsSubmitting(false);
    }
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
        <motion.header variants={itemVariants} className="text-center">
          <AnimatedTitle title={t("contact.title")} className="mb-4" />
          <p className="text-default-600 text-lg max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <motion.div variants={itemVariants}>
            <Card
              radius="lg"
              shadow="none"
              className="h-full border-2 border-content2"
            >
              <CardBody className="p-4 md:p-6 gap-4 md:gap-6">
                <div>
                  <AnimatedTitle
                    title={t("contact.sections.get_in_touch")}
                    className="mb-4"
                    as="h2"
                  />
                  <p className="text-default-600 mb-6">{profile.sloganLong}</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full text-primary">
                      <MailIcon size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-default-600">{profile.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full text-primary">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-default-600">{profile.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full text-primary">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Availability</h3>
                      <p className="text-default-600">{t("profile.status")}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <AnimatedTitle
                    title={t("contact.sections.connect_with_me")}
                    className="mb-4"
                    as="h3"
                  />
                  <div className="flex gap-3">
                    <Button
                      as="a"
                      radius="lg"
                      href={profile.github}
                      target="_blank"
                      isIconOnly
                      variant="flat"
                      aria-label="GitHub"
                    >
                      <GitHubIcon className="text-foreground dark:text-white group-hover:text-primary h-4 w-4 transition-colors duration-200" />
                    </Button>
                    <Button
                      as="a"
                      radius="lg"
                      href={profile.linkedin}
                      target="_blank"
                      isIconOnly
                      variant="flat"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon className="text-foreground dark:text-white group-hover:text-primary h-4 w-4 transition-colors duration-200" />
                    </Button>
                    <Button
                      as="a"
                      radius="lg"
                      href={profile.x}
                      target="_blank"
                      isIconOnly
                      variant="flat"
                      aria-label="x"
                    >
                      <XIcon className="text-foreground dark:text-white groupx-hover:text-primary h-4 w-4 transition-colors duration-200" />
                    </Button>
                    <Button
                      as="a"
                      radius="lg"
                      href={profile.email}
                      target="_blank"
                      isIconOnly
                      variant="flat"
                      aria-label="Email"
                    >
                      <Mail size={16} className="group-hover:text-primary" />
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card
              radius="lg"
              shadow="none"
              className="h-full border-2 border-content2"
            >
              <CardBody className="p-4 md:p-6">
                <AnimatedTitle
                  title={t("contact.sections.send_me_a_message")}
                  className="mb-6"
                  as="h2"
                />

                {isSubmitted && !isBlocked && (
                  <div className="bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300 p-4 rounded-lg mb-4 flex items-center gap-2">
                    <Check size={16} className="text-success" />
                    <span>
                      Thank you! Your message has been sent successfully.
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <Input
                    disabled={isBlocked}
                    label={t("contact.form.name.label")}
                    placeholder={t("contact.form.name.placeholder")}
                    {...register("name", {
                      required: t("contact.form.name.error"),
                    })}
                    isInvalid={!!errors.name}
                    errorMessage={errors.name?.message}
                    classNames={{
                      inputWrapper:
                        "bg-background dark:bg-content2 shadow-none",
                    }}
                  />

                  <Input
                    disabled={isBlocked}
                    label={t("contact.form.email.label")}
                    placeholder={t("contact.form.email.placeholder")}
                    type="email"
                    {...register("email", {
                      required: t("contact.form.email.error"),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    isInvalid={!!errors.email}
                    errorMessage={errors.email?.message}
                    classNames={{
                      inputWrapper:
                        "bg-background dark:bg-content2 shadow-none",
                    }}
                  />

                  <Input
                    disabled={isBlocked}
                    label={t("contact.form.subject.label")}
                    placeholder={t("contact.form.subject.placeholder")}
                    {...register("subject", {
                      required: t("contact.form.subject.error"),
                    })}
                    isInvalid={!!errors.subject}
                    errorMessage={errors.subject?.message}
                    classNames={{
                      inputWrapper:
                        "bg-background dark:bg-content2 shadow-none",
                    }}
                  />

                  <Textarea
                    disabled={isBlocked}
                    label={t("contact.form.message.label")}
                    placeholder={t("contact.form.message.placeholder")}
                    minRows={4}
                    {...register("message", {
                      required: t("contact.form.message.error"),
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    isInvalid={!!errors.message}
                    errorMessage={errors.message?.message}
                    classNames={{
                      inputWrapper:
                        "bg-background dark:bg-content2 shadow-none",
                    }}
                  />

                  <Button
                    size="lg"
                    type="submit"
                    endContent={
                      !isSubmitting && (
                        <Send
                          size={16}
                          className="group-hover:rotate-45 transition-transform duration-200"
                        />
                      )
                    }
                    disabled={isBlocked || isSubmitting}
                    className="w-full group bg-gradient-to-r from-purple-600 via-primary to-blue-600 animate-gradient-move text-sm text-white font-medium"
                  >
                    {isSubmitting
                      ? t("buttons.sending")
                      : t("buttons.send_me_a_message")}
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>
        </div>

        <motion.section variants={itemVariants}>
          <Card
            radius="lg"
            shadow="none"
            className="h-full border-2 border-content2"
          >
            <CardBody className="p-4 md:p-6">
              <AnimatedTitle
                title={t("contact.sections.frequently_asked_questions")}
                className="mb-6"
                as="h2"
              />

              <Accordion
                variant="light"
                showDivider={false}
                defaultExpandedKeys={["1"]}
              >
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    title={faq.question}
                    HeadingComponent="h3"
                    aria-label={faq.question}
                    startContent={<CircleHelp className="stroke-primary" />}
                    indicator={({ isOpen }) =>
                      isOpen ? (
                        <ChevronLeft className="stroke-primary" />
                      ) : (
                        <ChevronLeft className="group-hover:stroke-primary" />
                      )
                    }
                  >
                    <p className="text-default-500">{faq.answer}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardBody>
          </Card>
        </motion.section>
      </motion.div>
    </div>
  );
}
