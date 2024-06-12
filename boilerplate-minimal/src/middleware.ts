import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPaths: string[] = [];
const authPaths: string[] = ["/auth.*"];

const homePaths = {
  public: "/auth",
  private: "/dashboard",
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("authjs.session-token"); // session token cookie name is set in the auth provider

  const publicPathsMatchers = publicPaths.map((path) => new RegExp(`^${path}`));
  const authPathsMatchers = authPaths.map((path) => new RegExp(`^${path}`));

  const isPublicPath = publicPathsMatchers.some((pathRegex) =>
    pathRegex.test(pathname)
  );

  const isAuthPath = authPathsMatchers.some((pathRegex) =>
    pathRegex.test(pathname)
  );

  const isPrivatePath = !isPublicPath && !isAuthPath;

  const isAuthenticated = !!token;

  const homeUrl = new URL(
    isAuthenticated ? homePaths.private : homePaths.public,
    request.nextUrl.origin
  );

  const ResponseNext = NextResponse.next();
  // ResponseNext.headers.set('x-layout-group', '')

  const ResponseRedirect = NextResponse.redirect(homeUrl);
  // ResponseRedirect.headers.set('x-layout-group', '')

  if (isPublicPath) {
    return ResponseNext;
  }

  if (isAuthPath && isAuthenticated) {
    return ResponseRedirect;
  }

  if (isPrivatePath && !isAuthenticated) {
    return ResponseRedirect;
  }

  return ResponseNext;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
