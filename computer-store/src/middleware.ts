import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from "@/service/Authservices";

const protectedRoutes = [
    '/Testing',
    '/backends'
]

const publicRoutes = [
    '/signin'
]

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const session = await auth();
    
    const isProtectedRoute = protectedRoutes.some((prefix) => 
        request.nextUrl.pathname.startsWith(prefix)
    );

    if (!session && isProtectedRoute) {
        return NextResponse.redirect(new URL('/signin', request.nextUrl.origin));
    }

    if (session && publicRoutes.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/', request.nextUrl.origin));
    }
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }