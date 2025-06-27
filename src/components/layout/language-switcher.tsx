"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { useTranslation } from "react-i18next";
import { GB, ES, DE, PT, CN, JP, KR, RU, IT, IN } from "@/components/icons";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", name: "English", flag: GB },
    { code: "es", name: "Español", flag: ES },
    { code: "de", name: "Deutsch", flag: DE },
    { code: "pt", name: "Português", flag: PT },
    { code: "zh", name: "中文", flag: CN },
    { code: "ja", name: "日本語", flag: JP },
    { code: "ko", name: "한국어", flag: KR },
    { code: "ru", name: "Русский", flag: RU },
    { code: "it", name: "Italiano", flag: IT },
    { code: "hi", name: "हिंदी", flag: IN },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const CurrentFlag = currentLanguage.flag;

  return (
    <Dropdown
      placement="top-end"
      classNames={{
        content: "bg-content1 border-2 border-content2 shadow-none",
      }}
    >
      <DropdownTrigger>
        <Button
          isIconOnly
          radius="lg"
          color="default"
          aria-label="Change language"
          className="bg-content1 border-2 border-content2"
        >
          <CurrentFlag className="size-4 rounded-full" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language selection">
        {languages.map((lang) => {
          const Flag = lang.flag;

          return (
            <DropdownItem
              key={lang.code}
              startContent={<Flag className="size-4 rounded-full mr-2" />}
              onPress={() => i18n.changeLanguage(lang.code)}
              className={i18n.language === lang.code ? "text-primary" : ""}
            >
              {lang.name}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};
