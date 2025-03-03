import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the response
  const response = NextResponse.next();

  // Add the X-Robots-Tag header
  response.headers.set('X-Robots-Tag', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

  return response;
}

// Specify which paths this middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images/ (public images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images/).*)',
  ],
};
