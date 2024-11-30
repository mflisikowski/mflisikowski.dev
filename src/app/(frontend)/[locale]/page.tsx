import PageTemplate, { generateMetadata } from "@/app/(frontend)/[locale]/[...slug]/page";

console.log("process.env.VERCEL_ENV", process.env.VERCEL_ENV);
console.log("process.env.NODE_ENV", process.env.NODE_ENV);

export default PageTemplate;
export { generateMetadata };
