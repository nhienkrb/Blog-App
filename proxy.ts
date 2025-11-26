import { verifyToken } from "./lib/jwt";
import { getAuthCookie } from "./lib/cookie";

export async function proxy(req: Request) {
  const url = new URL(req.url);

  const token = await getAuthCookie();

  if (!token) {
    return Response.redirect(new URL("/login", req.url));
  }

  const payload = await verifyToken(token);

  if (!payload) {
    return Response.redirect(new URL("/login", req.url));
  }

  const pathname = url.pathname;

  if (pathname.startsWith("/admin") && payload.isAdmin !== true) {
    return Response.redirect(new URL("/", req.url));
  }

  return;
}

export const config = {
  matcher: ["/admin/:path*"],
};
