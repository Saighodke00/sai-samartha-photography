import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    // Allow all local images without domain restriction
  },
};

export default nextConfig;
