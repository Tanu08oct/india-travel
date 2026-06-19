import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// 1. Create the next-intl middleware instance
const handleI18nRouting = createMiddleware(routing);

// 2. Explicitly export a default function to satisfy Turbopack's strict checks
export default function middleware(request: NextRequest) {
  return handleI18nRouting(request);
}

export const config = {
  // Update this array to include 'fr'
  matcher: ['/', '/(en|fr)/:path*'] 
};