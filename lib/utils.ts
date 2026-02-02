// Helper to get the base path for assets
// Uses Next.js basePath configuration for GitHub Pages deployment

const repoName = "salon-demo"; // Change this to match your GitHub repository name

// Always use basePath in production builds (static export)
// Next.js sets NODE_ENV to 'production' during `next build`
export const basePath = process.env.NODE_ENV === "production" ? `/${repoName}` : "";

export function getImagePath(imagePath: string): string {
  // Ensure path starts with /
  const normalizedPath = imagePath.startsWith("/")
    ? imagePath
    : `/${imagePath}`;
  return `${basePath}${normalizedPath}`;
}
