import { AptabaseProvider } from "./aptabase-provider";
import { NextIntlClientProvider } from "./i18n-provider";
import { PostHogProvider } from "./post-hog-provider";
import { ThemeProvider } from "./theme-provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <NextIntlClientProvider>
        <AptabaseProvider>
          <PostHogProvider>
            <>{children}</>
          </PostHogProvider>
        </AptabaseProvider>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
};
