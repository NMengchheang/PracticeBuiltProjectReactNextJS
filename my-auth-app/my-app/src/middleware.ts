import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico, sitemap.xml, robots.txt (metadata files)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}

export default async function middleware(request: NextRequest) {
    const path= request.nextUrl.pathname;
    const authorized = false;

    if(!authorized && path !=='/signin') {
        return NextResponse.redirect(new URL('/signin', request.url))
    }
    else if (authorized && path==='/signin') {
        return NextResponse.redirect(new URL("/", request.url))
    }
}