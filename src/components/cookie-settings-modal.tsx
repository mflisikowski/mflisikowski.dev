"use client";

import { useTranslations } from "next-intl";

import { CookieSettingsSwitch } from "@/components/cookie-settings-switch";
import { Button } from "@/components/ui/button";
// prettier-ignore
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { useConsentStore } from "@/stores/consent-store";

export function CookieSettingsModal() {
  const { isSettingsVisible, hideSettings, preferences, setPreferences, savePreferences } =
    useConsentStore();
  const t = useTranslations("cookieSettings");

  const handleSaveSettings = async () => {
    await savePreferences();
  };

  return (
    <Dialog open={isSettingsVisible} onOpenChange={hideSettings}>
      <DialogContent className="h-full w-full max-w-full sm:h-auto sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>

        <div className="space-y-2 py-4">
          <CookieSettingsSwitch
            description={t("necessary.description")}
            title={t("necessary.title")}
            checked={true}
            disabled
          />

          <CookieSettingsSwitch
            onCheckedChange={(checked) => setPreferences({ functional: checked })}
            description={t("functional.description")}
            title={t("functional.title")}
            checked={preferences.functional}
          />

          <CookieSettingsSwitch
            onCheckedChange={(checked) => setPreferences({ analytics: checked })}
            description={t("analytics.description")}
            title={t("analytics.title")}
            checked={preferences.analytics}
          />

          <CookieSettingsSwitch
            onCheckedChange={(checked) => setPreferences({ marketing: checked })}
            description={t("marketing.description")}
            title={t("marketing.title")}
            checked={preferences.marketing}
          />
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Button variant="cookieAccept" onClick={handleSaveSettings}>
            {t("save")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
