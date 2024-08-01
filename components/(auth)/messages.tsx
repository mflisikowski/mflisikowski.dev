"use client";

import { useSearchParams } from "next/navigation";

export default function Messages() {
  const searchParams = useSearchParams();

  const message = searchParams.get("message");
  const error = searchParams.get("error");

  const sharedStyles = "mt-4 p-4 text-center";

  return (
    <>
      {error && (
        <p className={`${sharedStyles} bg-red-500 text-white`}>{error}</p>
      )}

      {message && (
        <p className={`${sharedStyles} bg-green-500 text-white`}>{message}</p>
      )}
    </>
  );
}
