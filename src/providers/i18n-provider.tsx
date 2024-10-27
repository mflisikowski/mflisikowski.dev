import { NextIntlClientProvider as Provider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import React from "react";

export const NextIntlClientProvider = async ({ children }: { children: React.ReactNode }) => {
  const messages = await getMessages();
  const locale = await getLocale();

  if (!messages) {
    notFound();
  }

  return (
    <Provider messages={messages} locale={locale} timeZone="Europe/Warsaw">
      {children}
    </Provider>
  );
};
