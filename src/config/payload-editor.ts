import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { Config } from "payload";

export const payloadEditorConfig: Config["editor"] = lexicalEditor();
