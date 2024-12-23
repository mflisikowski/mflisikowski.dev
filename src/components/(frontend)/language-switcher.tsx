"use client";

import { useTranslations } from "next-intl";

// prettier-ignore
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { useLanguageSwitch } from "@/hooks/useLanguageSwitch";

import { cn } from "@/utils/cn";

export const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { locale, changeLanguage, isLoading } = useLanguageSwitch();
  const t = useTranslations("languageSwitcher");

  return (
    <Select onValueChange={changeLanguage} defaultValue={locale}>
      <SelectTrigger
        className={cn("w-[180px]", isLoading && "cursor-not-allowed opacity-50", className)}
        disabled={isLoading}
      >
        <div className="flex items-center gap-2">
          {isLoading && (
            <div className="flex h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
          )}
          <SelectValue placeholder={t("select")} />
        </div>
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="en">{t("english")}</SelectItem>
        <SelectItem value="pl">{t("polish")}</SelectItem>
      </SelectContent>
    </Select>
  );
};
