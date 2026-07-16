import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Filax3d",
  assetPrefix: "/Filax3d",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
