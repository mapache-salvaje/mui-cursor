# MUI Templates Ultimate Challenge

A Next.js application that combines all Material UI templates into a single, seamless website experience. Built with React 19+, Material UI v6+, and Next.js 15.2+.

## Features

- Modern tech stack with latest versions:
  - React 19+
  - Material UI v6+
  - Next.js 15.2+
  - TypeScript
- Unified navigation between all templates
- Consistent theme and styling
- Dark/light mode support
- Responsive design
- Type-safe components

## Templates Included

- About
- Blog
- Checkout
- Dashboard
- Marketing
- Pricing
- Sign In
- Sign In Side
- Sign Up

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
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── checkout/          # Checkout page
│   ├── dashboard/         # Dashboard page
│   ├── marketing/         # Marketing page
│   ├── pricing/           # Pricing page
│   ├── sign-in/          # Sign In page
│   ├── sign-in-side/     # Sign In Side page
│   └── sign-up/          # Sign Up page
├── components/            # Shared components
└── shared-theme/         # Theme configuration
```

## Development

- Each template is implemented as a separate page in the `app` directory
- Shared components are placed in the `components` directory
- Theme configuration is in `shared-theme`
- TypeScript is used throughout the project
- Material UI v6 components and styling patterns are followed
- Next.js App Router and Server Components are utilized where appropriate

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 