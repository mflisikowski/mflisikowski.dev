"use client";

import { useTranslations } from "next-intl";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useLanguageSwitch } from "@/hooks/useLanguageSwitch";

import { cn } from "@/utils/cn";

export const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { locale, changeLanguage } = useLanguageSwitch();
  const t = useTranslations("languageSwitcher");

  return (
    <Select onValueChange={changeLanguage} defaultValue={locale}>
      <SelectTrigger className={cn("w-[180px]", className)}>
        <SelectValue placeholder={t("select")} />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="pl">{t("polish")}</SelectItem>
        <SelectItem value="en">{t("english")}</SelectItem>
      </SelectContent>
    </Select>
  );
};
