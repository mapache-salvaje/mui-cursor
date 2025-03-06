# About Page Template

A beautiful and responsive About page template built with Material UI v6 and React. This template provides a modern and professional design for company About pages, featuring sections for company information, values, team members, and contact details.

## Features

- 🎨 Modern and clean design
- 🌓 Light and dark mode support
- 📱 Fully responsive layout
- 🎯 Smooth scroll navigation
- 🎭 Customizable components
- 🎨 Consistent styling with Material UI v6

## Sections

1. **Hero Section**
   - Engaging headline and subheading
   - Call-to-action buttons
   - Hero image

2. **Mission Statement**
   - Company mission and vision
   - Supporting text and imagery

3. **Company Values**
   - Core values with icons
   - Animated cards
   - Responsive grid layout

4. **Company History**
   - Timeline of key events
   - Visual representation
   - Responsive design

5. **Team Section**
   - Team member cards
   - Social media links
   - Professional imagery

6. **Contact Section**
   - Contact form
   - Company information
   - Location details

## Getting Started

1. Install dependencies:
   ```bash
   npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
   ```

2. Copy the components to your project:
   ```bash
   cp -r cursor-mui-templates/about/* your-project/src/
   ```

3. Import and use the About page:
   ```tsx
   import About from './components/About';

   function App() {
     return <About />;
   }
   ```

## Customization

### Colors and Theme
The template uses Material UI's theming system. You can customize colors, typography, and other theme properties in your theme configuration.

### Content
Each section is modular and can be easily customized by modifying the component props or content.

### Images
Replace the placeholder images in the `/public` directory with your own images:
- `/about-hero.svg`
- `/mission.svg`
- `/history.svg`
- `/team/*.jpg`

## Dependencies

- React
- Material UI v6
- Emotion (for styling)
- TypeScript (optional)

## License

MIT License - feel free to use this template in your projects. 