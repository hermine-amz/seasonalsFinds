import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, verifyAdminSession } from "./lib/admin-auth";

export function proxy(request: NextRequest) {
  const isLoginPage = request.nextUrl.pathname === "/admin/login";
  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const isAuthenticated = verifyAdminSession(token);

  if (isLoginPage) {
    return isAuthenticated
      ? NextResponse.redirect(new URL("/admin/dashboard", request.url))
      : NextResponse.next();
  }

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (request.nextUrl.pathname === "/admin") {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
