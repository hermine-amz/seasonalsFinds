import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME } from "../../../../lib/admin-auth";

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin || new URL(origin).host !== request.nextUrl.host) {
    return NextResponse.json({ error: "Request not allowed." }, { status: 403 });
  }

  const response = NextResponse.redirect(new URL("/admin/login", request.url), 303);
  response.cookies.set(ADMIN_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
  return response;
}
