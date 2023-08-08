import { NextResponse } from "next/server";
import fetchAttractions from "@/util/fetchAttractions";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword") ?? "";
  const attraction = await fetchAttractions(keyword);
  return NextResponse.json({ attraction });
}
