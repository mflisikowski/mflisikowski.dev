import path from "path";
import type { Config } from "payload";

export const typescript: Config["typescript"] = {
  outputFile: path.resolve(__dirname, "../../payload-types.ts"),
};
