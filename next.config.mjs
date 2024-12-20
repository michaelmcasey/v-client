/** @type {import('next').NextConfig} */

import { config } from "dotenv";

config();

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "https://dashboard.shadcnuikit.com" : undefined,
  env: {
    BASE_URL: process.env.BASE_URL,
    DASHBOARD_BASE_URL: process.env.DASHBOARD_BASE_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost"
      },
      {
        protocol: "https",
        hostname: "dashboard.shadcnuikit.com"
      },
      {
        protocol: "https",
        hostname: "shadcnuikit.com"
      }
    ]
  }
};

export default nextConfig;
