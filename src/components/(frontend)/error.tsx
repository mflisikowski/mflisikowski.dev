"use client";

import { AlertTriangleIcon, RefreshCcwIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function Error({ error }: { error: Error & { digest?: string } }) {
  const t = useTranslations("Error");

  return (
    <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="mx-auto max-w-md space-y-4 text-center">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            <AlertTriangleIcon className="text-destructive h-6 w-6" />
            {t("title")}
          </h1>
          <p className="text-muted-foreground text-sm">{t("subtitle")}</p>
        </div>

        <div className="space-y-2">
          <Alert variant="destructive" className="border-0">
            <AlertTitle></AlertTitle>
            <AlertDescription className="space-y-2">
              <div>{error.message}</div>

              {error.digest && (
                <div className="font-bold">
                  {t("digest")} {error.digest}
                </div>
              )}
            </AlertDescription>
          </Alert>
        </div>

        <Button variant="outline" onClick={() => window.location.reload()}>
          <RefreshCcwIcon className="mr-2 h-4 w-4" />
          {t("try-again")}
        </Button>
      </div>
    </div>
  );
}
