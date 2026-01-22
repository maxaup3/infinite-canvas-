/**
 * Infinite Canvas Theme Visualizations
 * Interactive D3.js visualizations for theme system exploration
 */

export class ThemeVisualizer {
  constructor() {
    this.themes = {
      genz: {
        name: 'Gen-Z',
        description: 'Z世代赛博朋克糖果美学',
        colors: [
          { name: 'Primary Pink', value: '#FF6B9D', category: 'primary' },
          { name: 'Purple', value: '#C06CF8', category: 'primary' },
          { name: 'Electric Blue', value: '#00D4FF', category: 'accent' },
          { name: 'Yellow', value: '#FFC837', category: 'accent' },
          { name: 'Neon Green', value: '#00FFA3', category: 'accent' },
          { name: 'Background Dark', value: '#1A1A2E', category: 'background' },
          { name: 'Panel', value: 'rgba(20, 20, 40, 0.75)', category: 'surface' },
          { name: 'Text Primary', value: '#FFFFFF', category: 'text' }
        ],
        typography: {
          fontFamily: '"SF Pro Display", -apple-system, sans-serif',
          scale: [
            { label: 'Heading XL', size: 48, weight: 700, lineHeight: 1.2 },
            { label: 'Heading L', size: 36, weight: 700, lineHeight: 1.2 },
            { label: 'Heading M', size: 24, weight: 600, lineHeight: 1.3 },
            { label: 'Body L', size: 18, weight: 500, lineHeight: 1.5 },
            { label: 'Body M', size: 16, weight: 400, lineHeight: 1.5 },
            { label: 'Body S', size: 14, weight: 400, lineHeight: 1.5 },
            { label: 'Caption', size: 12, weight: 400, lineHeight: 1.4 }
          ]
        },
        spacing: {
          values: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64],
          scale: '4px base unit with exponential growth'
        },
        borderRadius: {
          values: [24, 16, 12, 8],
          primary: '24px (fully rounded for buttons)'
        },
        effects: {
          blur: '20px',
          saturation: '200%',
          glow: '0 8px 32px rgba(255, 107, 157, 0.3)',
          animation: 'Fast and energetic (200ms)'
        },
        accent: '#00D4FF'
      },
      minimalism: {
        name: 'Minimalism',
        description: '日式极简主义',
        colors: [
          { name: 'Pure Black', value: '#212121', category: 'primary' },
          { name: 'Dark Gray', value: '#616161', category: 'text' },
          { name: 'Medium Gray', value: '#9E9E9E', category: 'text' },
          { name: 'Light Gray', value: '#E0E0E0', category: 'border' },
          { name: 'Background', value: '#FAFAFA', category: 'background' },
          { name: 'White', value: '#FFFFFF', category: 'surface' },
          { name: 'Text Primary', value: '#212121', category: 'text' },
          { name: 'Accent Black', value: '#000000', category: 'accent' }
        ],
        typography: {
          fontFamily: '"Helvetica Neue", "Arial", sans-serif',
          scale: [
            { label: 'Heading XL', size: 48, weight: 300, lineHeight: 1.2 },
            { label: 'Heading L', size: 36, weight: 300, lineHeight: 1.2 },
            { label: 'Heading M', size: 24, weight: 400, lineHeight: 1.3 },
            { label: 'Body L', size: 18, weight: 400, lineHeight: 1.8 },
            { label: 'Body M', size: 16, weight: 400, lineHeight: 1.8 },
            { label: 'Body S', size: 14, weight: 400, lineHeight: 1.8 },
            { label: 'Caption', size: 12, weight: 400, lineHeight: 1.8 }
          ]
        },
        spacing: {
          values: [4, 8, 12, 16, 24, 32, 40, 48, 64, 80],
          scale: 'Generous whitespace with 40px minimum margins'
        },
        borderRadius: {
          values: [2, 0],
          primary: '0-2px (sharp edges)'
        },
        effects: {
          blur: 'none',
          saturation: '100%',
          glow: 'none',
          animation: 'Subtle and slow (300ms)'
        },
        accent: '#212121'
      },
      flat: {
        name: 'Flat Design',
        description: '现代扁平化',
        colors: [
          { name: 'Flat Blue', value: '#3498DB', category: 'primary' },
          { name: 'Flat Purple', value: '#9B59B6', category: 'accent' },
          { name: 'Flat Red', value: '#E74C3C', category: 'accent' },
          { name: 'Flat Orange', value: '#F39C12', category: 'accent' },
          { name: 'Flat Green', value: '#2ECC71', category: 'accent' },
          { name: 'Flat Turquoise', value: '#1ABC9C', category: 'accent' },
          { name: 'Text', value: '#2C3E50', category: 'text' },
          { name: 'Background', value: '#ECF0F1', category: 'background' }
        ],
        typography: {
          fontFamily: '"Lato", "Open Sans", sans-serif',
          scale: [
            { label: 'Heading XL', size: 48, weight: 700, lineHeight: 1.2 },
            { label: 'Heading L', size: 36, weight: 700, lineHeight: 1.2 },
            { label: 'Heading M', size: 24, weight: 600, lineHeight: 1.3 },
            { label: 'Body L', size: 18, weight: 400, lineHeight: 1.5 },
            { label: 'Body M', size: 16, weight: 400, lineHeight: 1.5 },
            { label: 'Body S', size: 14, weight: 400, lineHeight: 1.5 },
            { label: 'Caption', size: 12, weight: 400, lineHeight: 1.4 }
          ]
        },
        spacing: {
          values: [4, 8, 12, 16, 20, 24, 32, 40, 48, 56],
          scale: 'Consistent 4px grid system'
        },
        borderRadius: {
          values: [6, 8],
          primary: '6px (subtle rounds)'
        },
        effects: {
          blur: 'none',
          saturation: '100%',
          glow: 'none (no shadows)',
          animation: 'Instant state changes (100ms)'
        },
        accent: '#3498DB'
      },
      glassmorphism: {
        name: 'Glassmorphism',
        description: '新拟态玻璃',
        colors: [
          { name: 'Purple Start', value: '#667EEA', category: 'background' },
          { name: 'Purple Mid', value: '#764BA2', category: 'background' },
          { name: 'Pink End', value: '#F093FB', category: 'background' },
          { name: 'Glass Surface', value: 'rgba(255, 255, 255, 0.1)', category: 'surface' },
          { name: 'Glass Border', value: 'rgba(255, 255, 255, 0.2)', category: 'border' },
          { name: 'Text Primary', value: 'rgba(255, 255, 255, 0.95)', category: 'text' },
          { name: 'Text Secondary', value: 'rgba(255, 255, 255, 0.75)', category: 'text' },
          { name: 'Accent White', value: '#FFFFFF', category: 'accent' }
        ],
        typography: {
          fontFamily: '"Inter", "SF Pro Display", sans-serif',
          scale: [
            { label: 'Heading XL', size: 48, weight: 600, lineHeight: 1.2 },
            { label: 'Heading L', size: 36, weight: 600, lineHeight: 1.2 },
            { label: 'Heading M', size: 24, weight: 500, lineHeight: 1.3 },
            { label: 'Body L', size: 18, weight: 400, lineHeight: 1.5 },
            { label: 'Body M', size: 16, weight: 400, lineHeight: 1.5 },
            { label: 'Body S', size: 14, weight: 400, lineHeight: 1.5 },
            { label: 'Caption', size: 12, weight: 400, lineHeight: 1.4 }
          ]
        },
        spacing: {
          values: [4, 8, 12, 16, 20, 24, 32, 40, 48, 56],
          scale: 'Airy spacing with glass emphasis'
        },
        borderRadius: {
          values: [20, 16, 12],
          primary: '20px (soft rounded)'
        },
        effects: {
          blur: '40px',
          saturation: '180%',
          glow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          animation: 'Smooth glass transitions (300ms)'
        },
        accent: '#FFFFFF'
      },
      aurora: {
        name: 'Aurora',
        description: '极光梦幻',
        colors: [
          { name: 'Aurora Purple', value: '#6A11CB', category: 'primary' },
          { name: 'Aurora Blue', value: '#2575FC', category: 'primary' },
          { name: 'Aurora Cyan', value: '#25FCAA', category: 'accent' },
          { name: 'Dark Blue', value: '#203A43', category: 'background' },
          { name: 'Deep Dark', value: '#0F2027', category: 'background' },
          { name: 'Text Primary', value: 'rgba(255, 255, 255, 0.95)', category: 'text' },
          { name: 'Text Accent', value: 'rgba(180, 200, 255, 0.85)', category: 'text' },
          { name: 'Aurora Green', value: '#25FCAA', category: 'accent' }
        ],
        typography: {
          fontFamily: '"SF Pro Display", -apple-system, sans-serif',
          scale: [
            { label: 'Heading XL', size: 48, weight: 600, lineHeight: 1.2 },
            { label: 'Heading L', size: 36, weight: 600, lineHeight: 1.2 },
            { label: 'Heading M', size: 24, weight: 500, lineHeight: 1.3 },
            { label: 'Body L', size: 18, weight: 400, lineHeight: 1.5 },
            { label: 'Body M', size: 16, weight: 400, lineHeight: 1.5 },
            { label: 'Body S', size: 14, weight: 400, lineHeight: 1.5 },
            { label: 'Caption', size: 12, weight: 400, lineHeight: 1.4 }
          ]
        },
        spacing: {
          values: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64],
          scale: 'Flowing organic spacing'
        },
        borderRadius: {
          values: [16, 12, 10],
          primary: '16px (smooth curves)'
        },
        effects: {
          blur: '30px',
          saturation: '150%',
          glow: '0 0 40px rgba(106, 17, 203, 0.5)',
          animation: 'Flowing aurora waves (8s continuous)'
        },
        accent: '#25FCAA'
      }
    };
  }

  /**
   * Create an interactive color wheel visualization
   */
  createColorWheel(container, themeKey, options = {}) {
    const theme = this.themes[themeKey];
    if (!theme) throw new Error(`Theme "${themeKey}" not found`);

    const {
      width = 500,
      height = 500,
      interactive = true,
      showLabels = true,
      animationDuration = 2000
    } = options;

    const radius = Math.min(width, height) / 2 - 40;
    const svg = d3.select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie()
      .value(1)
      .sort(null);

    const arc = d3.arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius);

    const arcHover = d3.arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 1.15);

    const arcs = g.selectAll('.arc')
      .data(pie(theme.colors))
      .enter().append('g')
      .attr('class', 'arc');

    const paths = arcs.append('path')
      .attr('d', arc)
      .attr('fill', d => this.parseColor(d.data.value))
      .attr('stroke', themeKey === 'minimalism' ? '#212121' : 'rgba(255, 255, 255, 0.2)')
      .attr('stroke-width', themeKey === 'minimalism' ? 2 : 1);

    if (interactive) {
      paths.style('cursor', 'pointer')
        .on('mouseenter', function(event, d) {
          d3.select(this)
            .transition()
            .duration(200)
            .attr('d', arcHover);

          if (options.onColorHover) {
            options.onColorHover(d.data);
          }
        })
        .on('mouseleave', function() {
          d3.select(this)
            .transition()
            .duration(200)
            .attr('d', arc);
        })
        .on('click', function(event, d) {
          if (options.onColorClick) {
            options.onColorClick(d.data);
          }
        });
    }

    // Animate rotation
    if (animationDuration > 0) {
      g.transition()
        .duration(animationDuration)
        .attrTween('transform', () => {
          return d3.interpolateString(
            `translate(${width / 2}, ${height / 2}) rotate(0)`,
            `translate(${width / 2}, ${height / 2}) rotate(360)`
          );
        });
    }

    return { svg, theme };
  }

  /**
   * Create typography scale visualization
   */
  createTypographyScale(container, themeKey, options = {}) {
    const theme = this.themes[themeKey];
    if (!theme) throw new Error(`Theme "${themeKey}" not found`);

    const {
      width = 600,
      height = 400,
      interactive = true,
      showGrid = true
    } = options;

    const margin = { top: 20, right: 30, bottom: 60, left: 80 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const xScale = d3.scaleBand()
      .domain(theme.typography.scale.map(d => d.label))
      .range([0, innerWidth])
      .padding(0.3);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(theme.typography.scale, d => d.size)])
      .nice()
      .range([innerHeight, 0]);

    // Add grid
    if (showGrid) {
      g.append('g')
        .attr('class', 'grid')
        .call(d3.axisLeft(yScale)
          .tickSize(-innerWidth)
          .tickFormat(''))
        .selectAll('line')
        .attr('stroke', themeKey === 'minimalism' ? '#E0E0E0' : 'rgba(255, 255, 255, 0.1)');
    }

    // Create bars with gradient
    const gradient = svg.append('defs')
      .append('linearGradient')
      .attr('id', `gradient-${themeKey}`)
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', theme.accent)
      .attr('stop-opacity', 0.8);

    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', theme.accent)
      .attr('stop-opacity', 0.3);

    const bars = g.selectAll('.bar')
      .data(theme.typography.scale)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.label))
      .attr('width', xScale.bandwidth())
      .attr('y', innerHeight)
      .attr('height', 0)
      .attr('fill', `url(#gradient-${themeKey})`)
      .attr('rx', themeKey === 'minimalism' ? 0 : 4);

    bars.transition()
      .duration(1000)
      .delay((d, i) => i * 100)
      .attr('y', d => yScale(d.size))
      .attr('height', d => innerHeight - yScale(d.size));

    if (interactive) {
      bars.style('cursor', 'pointer')
        .on('mouseenter', function(event, d) {
          d3.select(this).attr('opacity', 0.7);
          if (options.onTypographyHover) {
            options.onTypographyHover(d);
          }
        })
        .on('mouseleave', function() {
          d3.select(this).attr('opacity', 1);
        });
    }

    // Add axes
    const textColor = themeKey === 'minimalism' ? '#212121' :
                      themeKey === 'flat' ? '#2C3E50' :
                      'rgba(255, 255, 255, 0.7)';

    g.append('g')
      .attr('transform', `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(xScale))
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end')
      .attr('fill', textColor);

    g.append('g')
      .call(d3.axisLeft(yScale))
      .selectAll('text')
      .attr('fill', textColor);

    return { svg, theme };
  }

  /**
   * Create spacing system geometric pattern
   */
  createSpacingPattern(container, themeKey, options = {}) {
    const theme = this.themes[themeKey];
    if (!theme) throw new Error(`Theme "${themeKey}" not found`);

    const {
      width = 500,
      height = 500,
      pattern = 'radial', // 'radial', 'grid', 'spiral'
      animate = true
    } = options;

    const svg = d3.select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    if (pattern === 'radial') {
      this.createRadialSpacingPattern(g, theme, width, height, animate);
    } else if (pattern === 'grid') {
      this.createGridSpacingPattern(g, theme, width, height, animate);
    } else if (pattern === 'spiral') {
      this.createSpiralSpacingPattern(g, theme, width, height, animate);
    }

    return { svg, theme };
  }

  /**
   * Helper: Create radial spacing pattern
   */
  createRadialSpacingPattern(g, theme, width, height, animate) {
    const maxSpacing = d3.max(theme.spacing.values);
    const scale = Math.min(width, height) / (maxSpacing * 2.5);

    theme.spacing.values.forEach((spacing, i) => {
      const size = spacing * scale;
      const angle = (i / theme.spacing.values.length) * Math.PI * 2;
      const distance = 80 + (i * 15);
      const x = Math.cos(angle) * distance - size / 2;
      const y = Math.sin(angle) * distance - size / 2;

      const rect = g.append('rect')
        .attr('x', x)
        .attr('y', y)
        .attr('width', animate ? 0 : size)
        .attr('height', animate ? 0 : size)
        .attr('fill', theme.accent)
        .attr('fill-opacity', 0.6)
        .attr('stroke', theme.name === 'Minimalism' ? '#212121' : 'rgba(255, 255, 255, 0.4)')
        .attr('stroke-width', theme.name === 'Minimalism' ? 2 : 1)
        .attr('rx', this.getBorderRadius(theme, size));

      if (animate) {
        rect.transition()
          .duration(800)
          .delay(i * 100)
          .attr('width', size)
          .attr('height', size);
      }

      g.append('text')
        .attr('x', x + size / 2)
        .attr('y', y + size / 2)
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('font-size', Math.max(10, size / 3.5) + 'px')
        .attr('font-weight', '600')
        .attr('fill', this.getTextColor(theme))
        .attr('opacity', animate ? 0 : 1)
        .text(spacing)
        .transition()
        .duration(500)
        .delay(animate ? i * 100 + 400 : 0)
        .attr('opacity', 1);
    });

    // Rotating animation
    if (animate) {
      function rotate() {
        g.transition()
          .duration(20000)
          .ease(d3.easeLinear)
          .attrTween('transform', function() {
            const current = d3.select(this).attr('transform');
            const match = current.match(/translate\(([^)]+)\)/);
            const translate = match ? match[0] : 'translate(0, 0)';
            return d3.interpolateString(
              `${translate} rotate(0)`,
              `${translate} rotate(360)`
            );
          })
          .on('end', rotate);
      }
      rotate();
    }
  }

  /**
   * Helper: Parse color values including rgba
   */
  parseColor(color) {
    if (color.startsWith('rgba')) {
      return color.replace(/[\d.]+\)$/, '0.8)');
    }
    return color;
  }

  /**
   * Helper: Get border radius based on theme
   */
  getBorderRadius(theme, size) {
    switch (theme.name) {
      case 'Minimalism':
        return 0;
      case 'Gen-Z':
        return size / 2;
      case 'Glassmorphism':
        return 12;
      case 'Aurora':
        return 8;
      default:
        return 4;
    }
  }

  /**
   * Helper: Get text color based on theme
   */
  getTextColor(theme) {
    switch (theme.name) {
      case 'Minimalism':
      case 'Flat Design':
        return '#FFFFFF';
      case 'Gen-Z':
      case 'Glassmorphism':
      case 'Aurora':
        return '#FFFFFF';
      default:
        return 'rgba(0, 0, 0, 0.8)';
    }
  }

  /**
   * Export theme data as JSON
   */
  exportTheme(themeKey) {
    return JSON.stringify(this.themes[themeKey], null, 2);
  }

  /**
   * Get all theme names
   */
  getThemeNames() {
    return Object.keys(this.themes);
  }

  /**
   * Get theme data
   */
  getTheme(themeKey) {
    return this.themes[themeKey];
  }
}

// Export for use in other modules
export default ThemeVisualizer;
