"use client";

import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation.js";
import React from "react";

export const RefreshRouteOnSave: React.FC = () => {
  const router = useRouter();

  return (
    <PayloadLivePreview
      serverURL={process.env.NEXT_PUBLIC_SITE_URL || ""}
      refresh={() => router.refresh()}
    />
  );
};
