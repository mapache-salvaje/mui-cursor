# MUI Cursor Integration

Experiments and templates for integrating Material UI with Cursor IDE, focusing on efficient development workflows and code reuse.

## Project Structure

- `/.cursor/rules/` - Cursor IDE rules for consistent development practices and standards
- `/cursor-mui-templates/` - Cursor-built templates for MUI projects
  - `/about/` - About page template
  - `/pricing/` - Pricing page template
- `/integrations/` - Cursor-built examples of MUI templates integrated with Next.js and Vite
  - `/cursor-mui-next-about/` - About page template with Next.js
  - `/cursor-mui-next-pricing/` - Pricing page template with Next.js
  - `/cursor-mui-vite-about/` - About page template with Vite
  - `/cursor-mui-vite-pricing/` - Pricing page template with Vite
- `/mui-docs-templates/` - Original MUI documentation templates (read-only reference)
- `/mui-vite-ts/` - Base setup for MUI with Vite and TypeScript
- `/nextjs-full-site/` - Next.js full site implementation
- `/complete-template-integrations/` - Complete template integrations
- `/src/` - Source files

## Development Guidelines

1. Never modify files in `/mui-docs-templates/` - these are reference implementations
2. Use proper `.gitignore` files in each project
3. Follow the established patterns in existing integrations
4. Reuse components from base templates when possible
5. Keep shared theme files synchronized across projects
6. Follow all Cursor rules in `/.cursor/rules/`

## Getting Started

Each project directory contains its own README with specific setup instructions. For new projects:

1. Choose a base template from `/cursor-mui-templates/`
2. Create a new directory in `/integrations/`
3. Follow the integration patterns from existing examples
4. Ensure proper `.gitignore` configuration
5. Maintain consistent component and theme structure

## Technology Stack

- React 19+
- Material UI v6+
- Next.js 15.2+ (for Next.js integrations)
- Vite 5+ (for Vite integrations)
- TypeScript 5+
- Emotion (for styling)
- ESLint (for code quality)
- Prettier (for code formatting) 