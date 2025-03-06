# About Page Template

A modern, responsive about page template built with Material UI.

## Features

- Responsive design that works on all screen sizes
- Dark/light mode support
- Smooth scrolling navigation
- Modern, clean UI components
- Easy to customize and extend

## Usage

```jsx
import About from './about/About';

function App() {
  const [mode, setMode] = React.useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return <About mode={mode} onToggleColorMode={toggleColorMode} />;
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| mode | 'light' \| 'dark' | The current color mode |
| onToggleColorMode | () => void | Function to toggle between light and dark mode |

## Components

The template includes the following components:

- NavigationBar: Main navigation with color mode toggle
- Hero: Hero section with main heading and description
- MissionStatement: Company mission and vision
- CompanyValues: Core company values
- History: Company history timeline
- TeamSection: Team members showcase
- Contact: Contact information and form
- Footer: Site footer with links and social media

## Customization

You can customize the template by:

1. Modifying the theme in `shared-theme/AppTheme.tsx`
2. Updating component styles in their respective files
3. Adding or removing sections as needed
4. Customizing the content in each component

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