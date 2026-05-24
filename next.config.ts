import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Remove output: 'export' and basePath for Vercel
  images: {
    // Can re-enable optimization on Vercel if desired
    unoptimized: true,
  },
};

export default nextConfig;
