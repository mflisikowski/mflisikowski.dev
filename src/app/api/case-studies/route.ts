import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { slug } = await request.json();

  if (slug) {
    revalidatePath(`/case-studies/${slug}`);
    revalidatePath(`/case-studies`, "page");

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
    });
  }

  return NextResponse.json({
    revalidated: false,
    now: Date.now(),
  });
}
