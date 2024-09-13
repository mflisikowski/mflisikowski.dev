"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/utils/cn";

export const LanguageSwitcher = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const t = useTranslations("languageSwitcher");

  const changeLanguage = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, "");
    router.push(`/${newLocale}${newPathname}`);
  };

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
