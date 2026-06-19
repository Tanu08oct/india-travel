import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// Point the plugin to your request file
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  // 1. Allows your specific IP to connect to the dev server without errors
  allowedDevOrigins: ['10.149.173.122'],

  // 2. Your image configuration
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '10.149.173.122',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

// Wrap your configuration with the translation plugin before exporting
export default withNextIntl(nextConfig);