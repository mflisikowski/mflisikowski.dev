import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { getPayload } from "@/utils/payload";

const querySchema = z.object({
  newLocale: z.string().min(1).max(2),
  locale: z.string().min(1).max(2),
  slug: z.string().min(1),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const result = querySchema.safeParse({
      newLocale: searchParams.get("newLocale"),
      locale: searchParams.get("locale"),
      slug: searchParams.get("slug"),
    });

    if (!result.success) {
      return NextResponse.json(
        {
          details: result.error.issues,
          error: "Invalid query parameters, check if all parameters are provided and are correct",
        },
        { status: 400 },
      );
    }

    const { slug, newLocale } = result.data;
    const payload = await getPayload();

    const page = await payload.find({
      collection: "pages",
      locale: "all",
      select: {
        slug: true,
      },
      where: {
        slug: {
          equals: slug,
        },
      },
    });

    if (!page.docs[0]) {
      return NextResponse.json(
        { details: `No page found with slug '${slug}' in any locale`, error: "Page not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      // @ts-expect-error result of page.docs[0].slug is typed as string, but it's actually an object of all locales ex. { pl: "strona-glowna", en: "home" }
      url: page.docs[0].slug[newLocale],
    });
  } catch (error) {
    return NextResponse.json({ details: error, error: "Internal server error" }, { status: 500 });
  }
}

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
