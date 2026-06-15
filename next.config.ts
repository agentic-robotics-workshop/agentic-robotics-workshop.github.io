import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (served at the org root domain).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
