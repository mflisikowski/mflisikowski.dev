import { AptabaseProvider as Provider } from "@aptabase/react";

export const AptabaseProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider appKey={process.env.NEXT_PUBLIC_APTABASE_APP_KEY!}>
      <>{children}</>
    </Provider>
  );
};
