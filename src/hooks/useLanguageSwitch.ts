import { useLocale } from "next-intl";
import { notFound, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { GET_PAGE_LOCALE_URL_ROUTE } from "@/constants/api-routes";

const getTranslatedUrl = async (params: { newLocale: string; locale: string; slug: string }) => {
  const searchParams = new URLSearchParams({
    newLocale: params.newLocale,
    locale: params.locale,
    slug: params.slug,
  });

  const response = await fetch(`${GET_PAGE_LOCALE_URL_ROUTE}?${searchParams}`);
  const data = await response.json();
  return data.url;
};

export const useLanguageSwitch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const changeLanguage = async (newLocale: string) => {
    setIsLoading(true);
    const slug = pathname.split("/").pop() ?? "";

    try {
      const url = await getTranslatedUrl({ locale, newLocale, slug });
      router.replace(url ? `/${newLocale}/${url}` : `/${newLocale}`);
      router.refresh();
    } catch (error) {
      console.error("Error checking translation:", error);
      notFound();
    } finally {
      setIsLoading(false);
    }
  };

  return {
    changeLanguage,
    isLoading,
    locale,
  };
};
