import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_PATHS = [
  '/dashboard/login/v2',
  '/dashboard/register/v2',
  '/dashboard/forgot-password',
];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Handle root path
  if (pathname === '/') {
    return NextResponse.next();
  }

  // Handle /dashboard path
  if (pathname === '/dashboard') {
    return NextResponse.redirect(new URL('/dashboard/default', request.url));
  }

  // Check if the path is public
  const isPublicPath = PUBLIC_PATHS.some(path => 
    pathname.startsWith(path)
  );

  const session = request.cookies.get('session')?.value || '';

  // If no session and trying to access protected route
  if (!session && !isPublicPath) {
    return NextResponse.redirect(new URL('/dashboard/login/v2', request.url));
  }

  // If session exists and trying to access public route
  if (session && isPublicPath) {
    return NextResponse.redirect(new URL('/dashboard/default', request.url));
  }

  // For all other cases, continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
