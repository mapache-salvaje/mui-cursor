# MUI Next.js Dashboard

A modern dashboard template built with Material UI and Next.js.

## Features

- Next.js 15 with App Router
- Material UI v6
- TypeScript support
- Responsive layout
- Dark mode support
- Modern UI components

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
│   ├── layout.tsx         # Root layout with theme setup
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── Dashboard.tsx      # Dashboard component
│   └── Layout.tsx         # Layout component with navigation
└── theme.ts              # Material UI theme configuration
```

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