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
- `/scaffolds/` - Cursor-built project scaffolds
  - `/mui-next-ts/` - Next.js scaffold with TypeScript and MUI v6
  - `/mui-vite-ts/` - Vite scaffold with TypeScript and MUI v6
- `/site-reproductions/` - Attempts to reproduce existing sites
  - `/nextjs-org-next-mui-ts/` - [Failed] Attempt to reproduce nextjs.org with MUI v6 and Next.js

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

## Cursor Rules

The `.cursor/rules/` directory contains the following rules:

- `absolute-honesty.mdc`: Rule enforcing absolute honesty about AI capabilities and limitations
- `conventional-commits.mdc`: Rule for automatically committing changes using conventional commits format
- `cursor-rule-format.mdc`: Standards for formatting Cursor rule files
- `cursor-rule-writing.mdc`: Standards for writing Cursor rules
- `cursor-rules-location.mdc`: Standards for placing and organizing Cursor rule files in the repository
- `dependency-versions.mdc`: Standards for using the latest versions of core dependencies in MUI projects
- `keep-it-simple.mdc`: Keep solutions simple and avoid overcomplicating things
- `master-rule.mdc`: Rule requiring reading all rules before completing any task
- `mui-nextjs-assembly.mdc`: Standards for assembling Material UI applications with Next.js
- `mui-nextjs-ultimate.mdc`: Standards for building sophisticated Material UI Next.js applications
- `mui-template-creation.mdc`: Standards for creating new Material UI templates
- `mui-template-duplication.mdc`: Standards for efficiently duplicating and customizing MUI templates while maintaining shared components
- `mui-template-vite-integration.mdc`: Standards for integrating MUI templates with Vite
- `mui-v6-vite-setup.mdc`: Standards for setting up a React project with Material UI v6 and Vite
- `nextjs-scaffold-process.mdc`: Standards for creating and maintaining Next.js scaffolds with Material UI
- `nextjs-to-vite-refactor.mdc`: Rule for refactoring Next.js applications to Vite applications
- `no-assumptions.mdc`: Rule for preventing assumptions about directory contents and project structure
- `no-auto-commits.mdc`: Rule for automatically committing changes using conventional commits format
- `no-destructive-actions.mdc`: Rule to prevent destructive actions in the repository
- `no-root-directory-creation.mdc`: Rule to prevent creating any files or directories in the project root
- `no-template-modifications.mdc`: Prevent any modifications to the mui-docs-templates directory
- `reuse-existing-code.mdc`: Rule for reusing existing code instead of creating from scratch
- `single-git-history.mdc`: Rule for maintaining a single git history at the root level
- `terse-responses.mdc`: Rule for enforcing terse, direct responses without unnecessary summaries
- `verification-process.mdc`: Rule for enforcing a strict verification process before any action
- `verify-directory.mdc`: Rule for verifying directory before executing commands 