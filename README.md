# MUI Cursor Templates

A collection of Material UI templates and integrations for Next.js and Vite.

## Directory Structure

- `/.cursor/rules/` - Cursor IDE rules for project standards and best practices
- `/complete-template-integrations/` - Complete template integrations
  - `/nextjs-full-site/` - Full Next.js site implementation
  - `/vite-full-site/` - Full Vite site implementation
- `/cursor-mui-templates/` - Cursor-built templates for various use cases
  - `/about/` - About page template
  - `/pricing/` - Pricing page template
- `/integrations/` - Cursor-built MUI templates integrated with Next.js and Vite
  - `/cursor-mui-next-about/` - About page template with Next.js
  - `/cursor-mui-next-pricing/` - Pricing page template with Next.js
  - `/cursor-mui-vite-about/` - About page template with Vite
  - `/cursor-mui-vite-pricing/` - Pricing page template with Vite
- `/mui-docs-templates/` - Read-only reference templates from MUI docs
  - `/blog/` - Blog template
  - `/checkout/` - Checkout flow template
  - `/dashboard/` - Admin dashboard template
  - `/marketing-page/` - Marketing landing page template
  - `/shared-theme/` - Shared theme components
  - `/sign-in/` - Sign in page template
  - `/sign-in-side/` - Side-by-side sign in template
  - `/sign-up/` - Sign up page template
- `/scaffolds/` - Cursor-built project scaffolds
  - `/mui-next-ts/` - Next.js scaffold with TypeScript and MUI v6
  - `/mui-vite-ts/` - Vite scaffold with TypeScript and MUI v6
- `/site-reproductions/` - Attempts to reproduce existing sites
  - `/nextjs-org-next-mui-ts/` - [FAILED] Attempt to reproduce nextjs.org with MUI v6 and Next.js

## Development Guidelines

1. Never modify files in `mui-docs-templates/` - it's read-only
2. Keep shared components synchronized across templates
3. Follow the established patterns in each template
4. Use TypeScript for type safety
5. Maintain consistent styling and theming

## Technology Stack

- Material UI v6
- Next.js 15
- Vite
- TypeScript
- React 19 