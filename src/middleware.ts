import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { parseAuthCookieFromRequest } from "@/lib/auth";
import {
  ROLE_USER,
  ROUTE_ROOT,
  ROUTE_SIGN_IN,
  ROUTE_SIGN_UP,
} from "@/constants";

const publicRoutes = [ROUTE_SIGN_IN, ROUTE_SIGN_UP];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js)$/)
  ) {
    return NextResponse.next();
  }

  if (publicRoutes.includes(pathname as (typeof publicRoutes)[number])) {
    return NextResponse.next();
  }

  const cookieData = await parseAuthCookieFromRequest();

  if (!cookieData?.access_token) {
    return NextResponse.redirect(new URL(ROUTE_SIGN_IN, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
