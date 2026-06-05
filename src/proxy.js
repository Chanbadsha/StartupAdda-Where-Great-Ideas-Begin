import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    const loginUrl = new URL("/auth/login", request.url);

    // Save current path for redirect after login
    loginUrl.searchParams.set("next", request.nextUrl.pathname);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/ideas/:path*",
    "/my-ideas",
    "/add-idea",
    "/my-interactions",
    "/dashboard",
  ],
};
