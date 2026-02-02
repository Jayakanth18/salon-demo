import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "salon-demo"; // Change this to your GitHub repository name

const nextConfig: NextConfig = {
  output: "export", // Enable static export for GitHub Pages
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Helps with GitHub Pages routing
};

export default nextConfig;
