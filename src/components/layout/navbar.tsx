"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Tabs,
  Tab,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { Code, Waypoints } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { getNavItems } from "@/config/constants";
import { getProfile } from "@/data/profile";
import type { Key } from "react-aria-components";
import type { NavItem, Profile } from "@/types";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();

  const [profile, setProfile] = useState<Profile>();
  const [navItems, setNavItems] = useState<NavItem[]>();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setProfile(getProfile(t));
    setNavItems(getNavItems(t));
  }, [t]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleTabChange = (key: Key) => {
    if (typeof key === "string" && key !== pathname) {
      router.push(key);
    }
  };

  return (
    <HeroNavbar
      maxWidth="xl"
      isBlurred
      isBordered
      className="bg-background/70 backdrop-blur-md border-b-2 border-content2"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <Code size={24} className="text-primary" />
            <p className="font-bold text-inherit text-xl">
              <span className="gradient-text">Tyrone</span> Dev
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Tabs
          aria-label="Navbar tabs"
          color="primary"
          variant="underlined"
          selectedKey={pathname}
          onSelectionChange={handleTabChange}
        >
          {navItems?.map((item) => (
            <Tab key={item.path} title={item.name} />
          ))}
        </Tabs>
      </NavbarContent>

      <NavbarContent justify="end">
        {/* <NavbarItem>
          <Button
            isIconOnly
            radius="lg"
            variant="light"
            aria-label="Toggle theme"
            onPress={handleThemeToggle}
            className="group bg-content1 border-2 border-content2"
          >
            {isDark ? (
              <Sun
                size={18}
                className="group-hover:rotate-180 transition-transform"
              />
            ) : (
              <Moon
                size={18}
                className="group-hover:rotate-180 transition-transform"
              />
            )}
          </Button>
        </NavbarItem> */}
        <NavbarItem className="hidden sm:flex">
          <Dropdown
            classNames={{
              content: "bg-content1 border-2 border-content2 shadow-none",
            }}
          >
            <DropdownTrigger>
              <Button
                radius="lg"
                color="primary"
                className="group bg-gradient-to-r from-purple-600 via-primary to-blue-600 animate-gradient-move text-sm text-white font-medium"
                endContent={
                  <Waypoints
                    size={16}
                    className="group-hover:rotate-180 transition-transform"
                  />
                }
              >
                {t("nav.connect")}
              </Button>
            </DropdownTrigger>
            {profile && (
              <DropdownMenu aria-label="Social links">
                <DropdownItem
                  key="github"
                  onPress={() =>
                    window.open(profile.github, "_blank", "noopener,noreferrer")
                  }
                  startContent={
                    <GitHubIcon className="text-foreground dark:text-white group-hover:text-primary h-4 w-4 transition-colors duration-200 mr-2" />
                  }
                >
                  GitHub
                </DropdownItem>
                <DropdownItem
                  key="linkedin"
                  target="_blank"
                  onPress={() =>
                    window.open(
                      profile.linkedin,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  startContent={
                    <LinkedInIcon className="text-foreground dark:text-white group-hover:text-primary h-4 w-4 transition-colors duration-200 mr-2" />
                  }
                >
                  LinkedIn
                </DropdownItem>
                <DropdownItem
                  key="x"
                  target="_blank"
                  onPress={() =>
                    window.open(profile.x, "_blank", "noopener,noreferrer")
                  }
                  startContent={
                    <XIcon className="text-foreground dark:text-white group-hover:text-primary h-4 w-4 transition-colors duration-200 mr-2" />
                  }
                >
                  Twitter
                </DropdownItem>
              </DropdownMenu>
            )}
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navItems?.map((item) => (
          <NavbarMenuItem key={item.path}>
            <Link
              href={item.path}
              color={isActive(item.path) ? "primary" : "foreground"}
              className="w-full font-medium text-lg py-2"
              onClick={() => handleTabChange(item.path)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
};
