import { AptabaseProvider } from "./aptabase-provider";
import { NextIntlClientProvider } from "./i18n-provider";
import { PostHogProvider } from "./post-hog-provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextIntlClientProvider>
      <AptabaseProvider>
        <PostHogProvider>
          <>{children}</>
        </PostHogProvider>
      </AptabaseProvider>
    </NextIntlClientProvider>
  );
};
