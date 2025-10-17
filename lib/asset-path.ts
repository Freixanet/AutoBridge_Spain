/**
 * Get the correct asset path with basePath prefix for GitHub Pages
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/AutoBridge_Spain' : ''
  return `${basePath}${path}`
}
