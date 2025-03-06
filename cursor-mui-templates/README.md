# Cursor MUI Templates

This directory contains the source templates for Material UI components and pages that can be used with Cursor. These templates are designed to be easily integrated into various project types through Cursor's template system.

## Structure

Each template is contained in its own subdirectory with the following structure:
```
template-name/
├── components/     # Template-specific components
├── shared-theme/   # Shared theme components (do not modify)
├── README.md       # Template documentation
├── Template.tsx    # TypeScript version
└── Template.js     # JavaScript version
```

## Available Templates

- `about/` - About page template
- `theme/` - Theme customization template
- (more templates coming soon)

## Usage

1. In Cursor, use the template command to add a template to your project
2. Cursor will automatically generate the appropriate integration in the `integrations/` directory
3. The integration will be customized for your project type (Vite, Next.js, etc.)

## Development

When creating or modifying templates:
1. Create both TypeScript (.tsx) and JavaScript (.js) versions
2. Include comprehensive documentation in README.md
3. Follow the established directory structure
4. Do not modify files in the `shared-theme/` directory
5. Test the template with different project types

## Note

The templates in this directory are the source of truth. When you use a template through Cursor, it will automatically generate the appropriate integration in the `integrations/` directory. 