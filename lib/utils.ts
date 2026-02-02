// Helper to get the base path for assets
// In production (GitHub Pages), this returns the repo name prefix
// In development, this returns an empty string

const isProd = process.env.NODE_ENV === "production";
const repoName = "salon-demo"; // Change this to match your GitHub repository name

export const basePath = isProd ? `/${repoName}` : "";

export function getImagePath(imagePath: string): string {
  // If path already starts with basePath, return as is
  if (imagePath.startsWith(basePath) && basePath !== "") {
    return imagePath;
  }
  // Ensure path starts with /
  const normalizedPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  return `${basePath}${normalizedPath}`;
}
