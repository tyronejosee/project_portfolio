"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { Calendar, Code, Mail, MapPin } from "lucide-react";
import { Clock } from "@/components/animated";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { getNavItems } from "@/config/constants";
import { getProfile } from "@/data/profile";
import type { NavItem, Profile } from "@/types";

export const Footer = () => {
  const { t } = useTranslation();

  const [profile, setProfile] = useState<Profile>();
  const [navItems, setNavItems] = useState<NavItem[]>();
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setProfile(getProfile(t));
    setNavItems(getNavItems(t));
    setYear(new Date().getFullYear());
  }, [t]);

  return (
    <footer className="bg-content1 border-t-2 border-content2 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Profile and socials */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code size={24} className="text-primary" />
              <p className="font-bold text-xl">
                <span className="gradient-text">Tyrone</span> Dev
              </p>
            </div>
            <p className="text-default-500 mb-4 max-w-md">
              {profile?.sloganLong}
            </p>
            <div className="flex gap-4">
              <Button
                as="a"
                radius="lg"
                href={profile?.github}
                target="_blank"
                isIconOnly
                variant="flat"
                aria-label="GitHub"
                className="group"
              >
                <GitHubIcon className="text-foreground dark:text-white group-hover:text-primary h-4 w-4 transition-colors duration-200" />
              </Button>
              <Button
                as="a"
                radius="lg"
                href={profile?.linkedin}
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
                href={profile?.x}
                target="_blank"
                isIconOnly
                variant="flat"
                aria-label="X"
              >
                <XIcon className="text-foreground dark:text-white group-hover:text-primary h-4 w-4 transition-colors duration-200" />
              </Button>
              <Button
                as="a"
                radius="lg"
                href={profile?.email || ""}
                target="_blank"
                isIconOnly
                variant="flat"
                aria-label="Email"
              >
                <Mail className="text-foreground dark:text-white group-hover:text-primary h-4 w-4 transition-colors duration-200" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {t("nav.footer.navigation")}
            </h3>
            <ul className="space-y-2">
              {navItems?.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-default-500 hover:text-primary hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {t("nav.footer.contact")}
            </h3>
            <ul className="space-y-2 text-default-500">
              <li className="group flex items-center gap-2">
                <Mail size={16} className="group-hover:text-primary" />
                <span>{profile?.email}</span>
              </li>
              <li className="group flex items-center gap-2">
                <MapPin size={16} className="group-hover:text-primary" />
                <span>{profile?.location}</span>
              </li>
              <li className="group flex items-center gap-2">
                <Calendar size={16} className="group-hover:text-primary" />
                <span>{profile?.status}</span>
              </li>
            </ul>
            <div className="py-2">
              <Clock />
            </div>
          </div>
        </div>

        {/* Copyright and links */}
        <div className="border-t-2 border-content2 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-default-500 text-sm">
            © {year} {profile?.name}. {t("nav.footer.copyright")}
          </p>
          <div className="mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-default-500 hover:text-primary hover:underline underline-offset-4 transition-colors duration-200"
            >
              {t("nav.footer.privacy")}
            </Link>
            <span className="mx-2 text-default-500">•</span>
            <Link
              href="/terms"
              className="text-sm text-default-500 hover:text-primary hover:underline underline-offset-4 transition-colors duration-200"
            >
              {t("nav.footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
