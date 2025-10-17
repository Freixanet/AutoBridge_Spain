# GitHub Pages Deployment - Changes Summary

## Overview
This document summarizes all changes made to configure the AutoBridge_Spain repository for GitHub Pages deployment.

## Issues Fixed

### 1. Static Export Configuration
- **File**: `next.config.mjs`
- **Changes**: 
  - Added `output: 'export'` for static site generation
  - Added `basePath: '/AutoBridge_Spain'` for GitHub Pages repository deployment
  - Added `assetPrefix: '/AutoBridge_Spain/'` for correct asset loading

### 2. GitHub Workflow - Package Manager
- **File**: `.github/workflows/nextjs.yml`
- **Changes**:
  - Updated package manager detection to check for `pnpm-lock.yaml` first
  - Added pnpm installation step when pnpm is detected
  - Updated cache paths to include `pnpm-lock.yaml`
  - Added `.nojekyll` file creation step
  - Added environment variable `NEXT_PUBLIC_USE_STATIC_NEWSLETTER=true` for build

### 3. Font Loading
- **Files**: `app/layout.tsx`, `app/globals.css`
- **Changes**:
  - Removed `next/font/google` usage (incompatible with offline builds)
  - Added Google Fonts CSS import in `globals.css`
  - Added `--font-serif` configuration in Tailwind theme

### 4. Sitemap and Robots Configuration
- **Files**: `app/sitemap.ts`, `app/robots.ts`
- **Changes**:
  - Added `export const dynamic = 'force-static'` for static export compatibility
  - Updated URLs to use GitHub Pages URL: `https://freixanet.github.io/AutoBridge_Spain`
  - Added environment variable support for base URL

### 5. Newsletter Form
- **File**: `components/newsletter-form.tsx`
- **Changes**:
  - Added mailto fallback for static deployments
  - Uses environment variable `NEXT_PUBLIC_USE_STATIC_NEWSLETTER` to determine behavior
  - In static mode, opens default email client instead of API call

### 6. Asset Path Handling
- **Files**: `lib/asset-path.ts` (new), `app/page.tsx`, `app/garantias/page.tsx`, `app/por-que-importar/page.tsx`
- **Changes**:
  - Created utility function `getAssetPath()` to handle basePath prefixing
  - Updated all static image references to use the utility function
  - Ensures all assets work correctly with GitHub Pages basePath

## Deployment Instructions

### Prerequisites
- GitHub Pages must be enabled for the repository
- Deployment source should be set to "GitHub Actions"

### Automatic Deployment
The workflow is configured to automatically deploy when:
1. Changes are pushed to the `main` branch
2. Workflow is manually triggered from Actions tab

### Build Process
1. Workflow detects pnpm as package manager
2. Installs dependencies
3. Builds static export with production settings
4. Creates `.nojekyll` file in output directory
5. Uploads artifact to GitHub Pages
6. Deploys to GitHub Pages

### Expected Output
- Static site will be available at: `https://freixanet.github.io/AutoBridge_Spain`
- All pages are pre-rendered as static HTML
- Assets (CSS, JS, images) include correct basePath
- Navigation and routing work correctly

## Testing Locally

To test the static build locally:

```bash
# Build the static export
NEXT_PUBLIC_USE_STATIC_NEWSLETTER=true NODE_ENV=production pnpm run build

# Serve the output directory
cd out
python3 -m http.server 8000

# Access at http://localhost:8000
# Note: Local testing won't have the /AutoBridge_Spain prefix
```

## Files Changed

1. `next.config.mjs` - Static export and basePath configuration
2. `.github/workflows/nextjs.yml` - pnpm support and .nojekyll creation
3. `app/layout.tsx` - Font loading changes
4. `app/globals.css` - Font CSS import and Tailwind configuration
5. `app/sitemap.ts` - Static export and URL configuration
6. `app/robots.ts` - Static export and URL configuration
7. `components/newsletter-form.tsx` - mailto fallback
8. `lib/asset-path.ts` - Asset path utility (new file)
9. `app/page.tsx` - Use asset path utility
10. `app/garantias/page.tsx` - Use asset path utility
11. `app/por-que-importar/page.tsx` - Use asset path utility

## Known Limitations

1. **API Routes**: The `/api/newsletter` route won't work in static export. Newsletter form uses mailto as fallback.
2. **Dynamic Features**: Any server-side features are disabled in static export mode.
3. **Image Optimization**: Images are unoptimized as required for static export.

## Future Improvements

1. Consider using a third-party service (Formspree, EmailJS) for newsletter subscriptions
2. Add custom 404 page handling
3. Optimize images before deployment
4. Add performance monitoring for GitHub Pages deployment
