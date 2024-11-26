"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
// prettier-ignore
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// prettier-ignore
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { cn } from "@/utils/cn";

type ThemeToggleProps = React.HTMLAttributes<HTMLDivElement>;

export function ThemeToggleIcon({ className }: ThemeToggleProps) {
  const t = useTranslations("themeToggle");
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn(className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="icon">
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-zinc-900 transition-all dark:rotate-0 dark:scale-100 dark:text-zinc-50" />
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-zinc-900 transition-all dark:-rotate-90 dark:scale-0 dark:text-zinc-50" />
            <span className="inline-block lg:hidden">{t("toggleTheme")}</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")} isSelected={theme === "light"}>
            {t("light")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")} isSelected={theme === "dark"}>
            {t("dark")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")} isSelected={theme === "system"}>
            {t("system")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function ThemeToggleSelect({ className }: ThemeToggleProps) {
  const t = useTranslations("themeToggle");
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn(className)}>
      <Select onValueChange={setTheme} defaultValue={theme}>
        <SelectTrigger className={cn("w-[180px]", className)}>
          <SelectValue placeholder={t("toggleTheme")} />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="light">{t("light")}</SelectItem>
          <SelectItem value="dark">{t("dark")}</SelectItem>
          <SelectItem value="system">{t("system")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
