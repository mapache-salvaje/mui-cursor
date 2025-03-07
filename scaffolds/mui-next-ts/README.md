# MUI Next.js Dashboard

A modern dashboard template built with Material UI and Next.js.

## Features

- Next.js 15 with App Router
- Material UI v6
- TypeScript support
- Responsive layout
- Dark mode support
- Modern UI components
- Client-side components with proper hydration

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page component
│   └── root-client-layout.tsx # Client-side root with theme setup
├── components/            # React components
│   ├── Dashboard.tsx      # Dashboard component
│   └── Layout.tsx         # Layout component with navigation
└── theme.ts              # Material UI theme configuration
```

## Important Notes

1. Client Components:
   - All components using MUI must be marked as client components
   - Add 'use client' directive at the top of files using MUI
   - This includes components using styled, theme, or other MUI features

2. Theme Setup:
   - Theme configuration is handled in root-client-layout.tsx
   - Color mode state is managed at the root level
   - Theme provider wraps the entire application

3. Component Guidelines:
   - Keep shared components in sync across templates
   - Maintain consistent styling patterns
   - Use theme variables for colors and spacing
   - Follow MUI v6 best practices

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Dependencies

- Next.js 15
- Material UI v6
- React 19
- TypeScript
- ESLint 