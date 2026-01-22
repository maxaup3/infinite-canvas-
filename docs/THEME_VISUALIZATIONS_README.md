# Infinite Canvas Theme Visualizations

Interactive D3.js visualizations showcasing the design language of each theme in the Infinite Canvas project.

## Overview

This documentation provides interactive visualizations for the 5 Infinite Canvas themes:
- **Gen-Z**: Z世代赛博朋克糖果美学 (High saturation gradients with neon aesthetics)
- **Minimalism**: 日式极简主义 (Pure simplicity with high contrast)
- **Flat Design**: 现代扁平化 (Bold colors with no shadows)
- **Glassmorphism**: 新拟态玻璃 (Frosted glass effects with soft transparency)
- **Aurora**: 极光梦幻 (Northern lights inspired gradients and flowing animations)

## Files

### 1. `theme-visualizations.html`
A complete, standalone HTML page with all visualizations embedded. Open this file in a browser to explore all themes interactively.

**Features:**
- Interactive color wheels showing theme palettes
- Typography scale visualizations with size and weight information
- Geometric spacing system patterns
- Smooth animations and transitions
- Responsive design
- Hover tooltips with detailed information

**Usage:**
```bash
# Simply open in your browser
open docs/theme-visualizations.html
```

### 2. `theme-visualizations.js`
A reusable JavaScript module for integrating theme visualizations into your own projects.

**Features:**
- `ThemeVisualizer` class with full API
- Customizable visualization options
- Event callbacks for interactivity
- Theme data export functionality

## Interactive Features

### Color Palette Wheel
- **Visualization**: Circular color wheel showing all theme colors
- **Interaction**: Hover to see color names and hex values
- **Animation**: Smooth rotation on load
- **Design**: Each theme uses its own aesthetic (e.g., Gen-Z has neon borders, Minimalism has sharp edges)

### Typography Scale
- **Visualization**: Bar chart showing font size hierarchy
- **Interaction**: Hover to see size, weight, and line-height
- **Animation**: Bars animate in sequentially
- **Design**: Gradient fills matching theme accent colors

### Spacing System
- **Visualization**: Geometric pattern showing spacing values
- **Interaction**: Hover to see exact pixel values
- **Animation**: Rotating pattern with staggered element animations
- **Design**: Radial layout emphasizing the spacing scale

## Theme Details

### Gen-Z Theme
**Aesthetic**: Cyberpunk candy with maximum saturation

**Color Palette**:
- Primary Pink: `#FF6B9D`
- Purple: `#C06CF8`
- Electric Blue: `#00D4FF` (accent)
- Yellow: `#FFC837`
- Neon Green: `#00FFA3`

**Typography**:
- Font Family: "SF Pro Display", sans-serif
- Weight Range: 400-700
- Size Range: 12px - 48px

**Spacing**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px

**Border Radius**: 24px (fully rounded buttons)

**Effects**:
- Blur: 20px
- Saturation: 200%
- Glow: Neon pink/purple
- Animation: Fast and energetic (200ms)

---

### Minimalism Theme
**Aesthetic**: Japanese minimalism with extreme simplicity

**Color Palette**:
- Pure Black: `#212121`
- Dark Gray: `#616161`
- Medium Gray: `#9E9E9E`
- Light Gray: `#E0E0E0`
- Background: `#FAFAFA`
- White: `#FFFFFF`

**Typography**:
- Font Family: "Helvetica Neue", "Arial", sans-serif
- Weight Range: 300-400
- Size Range: 12px - 48px
- Line Height: 1.8 (generous leading)

**Spacing**: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80px (generous whitespace)

**Border Radius**: 0-2px (sharp edges)

**Effects**:
- Blur: none
- Saturation: 100%
- Glow: none
- Animation: Subtle and slow (300ms)

---

### Flat Design Theme
**Aesthetic**: Modern flat design with bold saturated colors

**Color Palette**:
- Flat Blue: `#3498DB` (primary)
- Flat Purple: `#9B59B6`
- Flat Red: `#E74C3C`
- Flat Orange: `#F39C12`
- Flat Green: `#2ECC71`
- Flat Turquoise: `#1ABC9C`
- Text: `#2C3E50`

**Typography**:
- Font Family: "Lato", "Open Sans", sans-serif
- Weight Range: 400-700
- Size Range: 12px - 48px

**Spacing**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56px

**Border Radius**: 6px (subtle rounds)

**Effects**:
- Blur: none
- Saturation: 100%
- Glow: none (no shadows)
- Animation: Instant state changes (100ms)

---

### Glassmorphism Theme
**Aesthetic**: Frosted glass with soft transparency

**Color Palette**:
- Purple Gradient: `#667EEA` → `#764BA2` → `#F093FB`
- Glass Surface: `rgba(255, 255, 255, 0.1)`
- Glass Border: `rgba(255, 255, 255, 0.2)`
- Text Primary: `rgba(255, 255, 255, 0.95)`
- Accent: `#FFFFFF`

**Typography**:
- Font Family: "Inter", "SF Pro Display", sans-serif
- Weight Range: 400-600
- Size Range: 12px - 48px

**Spacing**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56px

**Border Radius**: 20px (soft rounded)

**Effects**:
- Blur: 40px (heavy frosting)
- Saturation: 180%
- Glow: Soft shadow `0 8px 32px rgba(0, 0, 0, 0.1)`
- Animation: Smooth glass transitions (300ms)

---

### Aurora Theme
**Aesthetic**: Northern lights with flowing gradients

**Color Palette**:
- Aurora Purple: `#6A11CB`
- Aurora Blue: `#2575FC`
- Aurora Cyan: `#25FCAA` (accent)
- Dark Blue: `#203A43`
- Deep Dark: `#0F2027`

**Typography**:
- Font Family: "SF Pro Display", sans-serif
- Weight Range: 400-600
- Size Range: 12px - 48px

**Spacing**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px

**Border Radius**: 16px (smooth curves)

**Effects**:
- Blur: 30px
- Saturation: 150%
- Glow: Aurora shimmer `0 0 40px rgba(106, 17, 203, 0.5)`
- Animation: Flowing aurora waves (8s continuous)

## Using the JavaScript Module

### Basic Usage

```javascript
import ThemeVisualizer from './theme-visualizations.js';

const visualizer = new ThemeVisualizer();

// Create a color wheel
visualizer.createColorWheel('#container', 'genz', {
  width: 500,
  height: 500,
  interactive: true,
  onColorHover: (color) => {
    console.log('Hovering:', color.name, color.value);
  },
  onColorClick: (color) => {
    console.log('Clicked:', color.name);
  }
});

// Create typography scale
visualizer.createTypographyScale('#typo-container', 'minimalism', {
  width: 600,
  height: 400,
  showGrid: true,
  onTypographyHover: (type) => {
    console.log('Font:', type.label, type.size + 'px');
  }
});

// Create spacing pattern
visualizer.createSpacingPattern('#spacing-container', 'aurora', {
  width: 500,
  height: 500,
  pattern: 'radial', // 'radial', 'grid', 'spiral'
  animate: true
});
```

### Advanced Options

```javascript
// Get all theme names
const themes = visualizer.getThemeNames();
console.log(themes); // ['genz', 'minimalism', 'flat', 'glassmorphism', 'aurora']

// Get theme data
const genzTheme = visualizer.getTheme('genz');
console.log(genzTheme.colors);
console.log(genzTheme.typography);
console.log(genzTheme.spacing);

// Export theme as JSON
const themeJSON = visualizer.exportTheme('minimalism');
console.log(themeJSON);
```

### React Integration Example

```jsx
import React, { useEffect, useRef } from 'react';
import ThemeVisualizer from './theme-visualizations.js';

function ThemeColorWheel({ theme }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const visualizer = new ThemeVisualizer();
    visualizer.createColorWheel(containerRef.current, theme, {
      width: 500,
      height: 500,
      interactive: true
    });
  }, [theme]);

  return <div ref={containerRef}></div>;
}
```

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (requires Safari 14+)
- Mobile: Responsive and touch-friendly

## Dependencies

- [D3.js v7](https://d3js.org/) - Data visualization library
- Modern browser with ES6+ support

## Technical Implementation

### Color Wheel
- Uses D3's `pie()` and `arc()` generators
- Implements smooth hover animations with `arcHover`
- Automatic rotation animation on load
- Responsive sizing based on container

### Typography Scale
- Bar chart using D3's `scaleBand()` and `scaleLinear()`
- Sequential animation with staggered delays
- Gradient fills using SVG `linearGradient`
- Configurable grid system

### Spacing Pattern
- Radial layout with geometric shapes
- Continuous rotation animation
- Dynamic sizing based on spacing values
- Interactive tooltips with exact measurements

## Performance

- Smooth 60fps animations
- Efficient D3 transitions
- Minimal DOM manipulation
- Optimized for multiple simultaneous visualizations

## Customization

### Adding New Themes

Edit `theme-visualizations.js` and add to the `themes` object:

```javascript
newtheme: {
  name: 'Your Theme',
  description: 'Theme description',
  colors: [
    { name: 'Primary', value: '#000000', category: 'primary' }
  ],
  typography: {
    fontFamily: 'Your Font',
    scale: [
      { label: 'Heading', size: 48, weight: 700, lineHeight: 1.2 }
    ]
  },
  spacing: {
    values: [4, 8, 16, 32]
  },
  accent: '#000000'
}
```

### Styling

Customize CSS variables in the HTML file:

```css
:root {
  --animation-duration: 2000ms;
  --hover-scale: 1.1;
  --tooltip-bg: rgba(0, 0, 0, 0.9);
}
```

## Contributing

To add new visualization types:

1. Add method to `ThemeVisualizer` class
2. Update HTML with new visualization container
3. Document in this README
4. Add examples

## License

Part of the Infinite Canvas project. See main project LICENSE.

## Credits

- Design System: Infinite Canvas Team
- Visualizations: D3.js
- Inspiration: Material Design, Apple HIG, Tailwind CSS

## Questions?

For questions or suggestions about the theme system, please open an issue in the main repository.
