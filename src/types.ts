import type { Config } from "payload";

export interface PagePropsParams {
  locale: string;
  slug: string[];
}

export interface PageProps {
  params: Promise<PagePropsParams>;
}

export type PayloadCollections = keyof Config["collections"];
