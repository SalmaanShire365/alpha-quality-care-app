import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/alpha-quality-care-app',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;