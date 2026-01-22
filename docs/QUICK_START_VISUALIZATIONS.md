# Quick Start Guide - Theme Visualizations

## Getting Started in 30 Seconds

### Option 1: View Complete Visualizations (Recommended)
```bash
# Navigate to the docs folder
cd docs

# Open the complete visualization page in your browser
open theme-visualizations.html
```

This will show all 5 themes with interactive:
- Color palette wheels
- Typography scales
- Spacing system patterns

### Option 2: Compare Themes Side-by-Side
```bash
# Open the comparison tool
open theme-comparison.html
```

Features:
- Select any 2 themes to compare
- Toggle between Colors, Typography, Spacing, or All views
- Export theme data as JSON
- Real-time interactive visualizations

### Option 3: Integrate into Your Code

```javascript
// Import the visualizer module
import ThemeVisualizer from './docs/theme-visualizations.js';

// Create instance
const visualizer = new ThemeVisualizer();

// Create a color wheel for Gen-Z theme
visualizer.createColorWheel('#my-container', 'genz', {
  width: 500,
  height: 500,
  interactive: true,
  onColorClick: (color) => {
    console.log('Selected:', color.name, color.value);
  }
});
```

## Files Overview

| File | Purpose | Use Case |
|------|---------|----------|
| `theme-visualizations.html` | Complete showcase of all themes | Documentation, presentations, design reviews |
| `theme-comparison.html` | Side-by-side theme comparison | Choosing between themes, A/B testing |
| `theme-visualizations.js` | Reusable visualization module | Integrating into your app, custom tools |
| `THEME_VISUALIZATIONS_README.md` | Full documentation | API reference, customization guide |

## What You'll See

### Gen-Z Theme
- Vibrant neon colors (#FF6B9D, #C06CF8, #00D4FF)
- Fully rounded buttons (24px radius)
- High saturation (200%) with heavy blur (20px)
- Fast, energetic animations

### Minimalism Theme
- Pure black and white (#212121, #FFFFFF)
- Sharp edges (0-2px radius)
- No effects (no blur, no shadows)
- Generous whitespace (up to 80px spacing)

### Flat Design Theme
- Bold saturated colors (#3498DB, #E74C3C, #2ECC71)
- No shadows or depth
- Instant state transitions
- Classic flat color palette

### Glassmorphism Theme
- Purple to pink gradient background
- Heavy frosted glass blur (40px)
- Semi-transparent surfaces
- Soft white text on gradient

### Aurora Theme
- Northern lights color scheme (#6A11CB, #2575FC, #25FCAA)
- Flowing gradient animations (8s waves)
- Medium blur (30px) with high saturation (150%)
- Dreamy, ethereal aesthetic

## Interactive Features

All visualizations include:

1. **Hover Tooltips**: Show detailed information on hover
2. **Animations**: Smooth entrance and transition animations
3. **Responsiveness**: Adapt to different screen sizes
4. **Click Events**: Export data, copy color codes
5. **Theme Switching**: Dynamic background changes

## Browser Requirements

- Modern browsers (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- SVG support
- CSS backdrop-filter support (for glassmorphism effects)

## Next Steps

1. Open `theme-visualizations.html` to explore all themes
2. Use `theme-comparison.html` to compare themes for your project
3. Read `THEME_VISUALIZATIONS_README.md` for full API documentation
4. Import `theme-visualizations.js` to add visualizations to your app

## Questions?

See the full documentation in `THEME_VISUALIZATIONS_README.md` or check the inline code comments in `theme-visualizations.js`.

## License

Part of the Infinite Canvas project.
