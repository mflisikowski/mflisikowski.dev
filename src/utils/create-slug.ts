import slugify from "slugify";

export const createSlug = (value: string) => {
  return slugify(value, { lower: true });
};
