"use client";

import Error from "@/components/(frontend)/error";

export default function ErrorPage({ error }: { error: Error }) {
  return <Error error={error} />;
}
