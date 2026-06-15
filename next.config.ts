import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel suporta Next.js nativo — sem necessidade de export estático
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },
};

export default nextConfig;
