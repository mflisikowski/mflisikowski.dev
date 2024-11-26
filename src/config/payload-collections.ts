import * as collectionsList from "@/collections";
import type { Config } from "payload";

export const payloadCollectionsConfig: Config["collections"] = [...Object.values(collectionsList)];
