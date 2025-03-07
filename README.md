# MUI Cursor Templates

A collection of Material UI templates and integrations for Next.js and Vite.

## Directory Structure

- `/.cursor/rules/` - Cursor IDE rules for project standards and best practices
- `/cursor-mui-templates/` - Cursor-built templates for various use cases
- `/integrations/` - Cursor-built MUI templates integrated with Next.js and Vite
- `/mui-docs-templates/` - Read-only reference templates from MUI docs
- `/scaffolds/` - Cursor-built project scaffolds
  - `/mui-next-ts/` - Next.js scaffold with TypeScript and MUI v6
  - `/mui-vite-ts/` - Vite scaffold with TypeScript and MUI v6
- `/complete-template-integrations/` - Complete template integrations
  - `/nextjs-full-site/` - Full Next.js site implementation
  - `/vite-full-site/` - Full Vite site implementation

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