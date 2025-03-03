import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization
  images: {
    domains: ["github.com", "avatars.githubusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },

  // Enable React strict mode for better development
  reactStrictMode: true,

  // Add experimental features from Next.js 15.2
  experimental: {
    // Enable View Transitions API (experimental)
    // viewTransition: true,
    
    // Uncomment to enable Node.js Middleware (experimental, requires next@canary)
    // nodeMiddleware: true,
    
    // Configure Turbopack
    turbo: {
      // Configure Turbopack rules if needed
      // rules: {
      //   '*.svg': {
      //     loaders: ['@svgr/webpack'],
      //     as: '*.js',
      //   },
      // },
      
      // Configure resolve extensions if needed
      // resolveExtensions: [
      //   '.tsx',
      //   '.ts',
      //   '.jsx',
      //   '.js',
      //   '.mjs',
      //   '.json',
      // ],
    },
  },

  // Configure headers for security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
