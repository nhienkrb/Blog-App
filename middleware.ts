import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/jwt';
import { getAuthCookie } from '@/lib/cookie';

export async function middleware(req: NextRequest) {
    const token = await getAuthCookie();
    if (!token) return null;
    const payload = await verifyToken(token);
    if (!payload) return NextResponse.redirect(new URL('/login', req.url));

    const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');

    if (isAdminRoute && payload.isAdmin !== true) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
