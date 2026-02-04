# Ray.so Static Clone - Complete Implementation Plan

## Design System Extracted from Source

### Color System (from globals.css)

- **Background**: `hsl(0, 0%, 5%)`
- **Panel**: `hsl(0, 0%, 9.4%)`
- **Brand**: `#ff6363`
- **Gray Scale**: 12-step scale from gray-1 to gray-12
- **Purple**: `#9261f9` (for badges)
- **Badge Background**: `#2c1d4b`

### Typography

- **UI Font**: Inter, -apple-system, BlinkMacSystemFont
- **Code Font**: SF Mono, Monaco, Cascadia Code, Roboto Mono
- **Sizes**: 11px (meta), 13px (base), 15px (titles), 32px (page headers)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold)

### Spacing System (8px grid)

- **8px**: Base unit
- **12px**: Small gaps
- **16px**: Medium gaps, card padding
- **24px**: Large gaps, section padding
- **32px**: Extra large padding

### Border Radius

- **6px**: Small elements (buttons, inputs)
- **8px**: Medium elements (dropdowns, badges)
- **12px**: Cards, containers
- **18px**: Window frames

### Transitions

- **30ms**: Card hover states (exact from prompts.module.css)
- **100ms**: Focus states
- **200ms**: Standard interactions
- **300ms**: Collapsible/animated states

### Card Design (from prompts.module.css)

- **Default**: `background: rgba(255, 255, 255, 0.03)`, `box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05)`
- **Hover**: `background: rgba(44, 29, 75, 0.2)`, `box-shadow: inset 0 0 0 1px #2c1d4b`
- **Active**: `transform: scale(0.99)`
- **Transition**: `all 30ms ease`

### Grid System

- **Listing Pages**: `grid-template-columns: repeat(auto-fill, minmax(360px, 1fr))`
- **Gap**: `16px`

## Pages to Build

### 1. index.html - Code Screenshot Tool

**Purpose**: Create beautiful code screenshots
**Features**:

- Syntax highlighting (highlight.js)
- Language selection
- Theme toggle (light/dark)
- Background toggle
- Line numbers toggle
- Padding control
- Export to PNG (html2canvas)

**Layout**: Centered frame with bottom controls panel

### 2. icon.html - Icon Maker

**Purpose**: Create gradient icons with emoji
**Features**:

- Emoji input
- 6 gradient presets (purple, blue, pink, orange, green, red)
- Size selection (256/512/1024px)
- Border radius slider
- PNG export

**Layout**: Centered preview with side controls

### 3. prompts.html - AI Prompts Browser

**Purpose**: Browse and copy AI prompts
**Data Source**: prompts.ts (1374 lines, ~50 prompts)
**Features**:

- Grid of prompt cards
- Full prompt text visible in cards
- Click to copy
- Toast notification

**Card Structure**:

- Icon + Title
- Full prompt text in code-style block
- Creativity badge
- Date

### 4. presets.html - AI Presets Browser

**Purpose**: Browse AI preset configurations
**Data Source**: presets.ts (997 lines, ~30 presets)
**Features**:

- Grid of preset cards
- Name, description, instructions visible
- Click to copy
- Toast notification

**Card Structure**:

- Icon + Name
- Description
- Instructions in scrollable pre block
- Model + creativity badges

### 5. quicklinks.html - Quicklinks Browser

**Purpose**: Browse and launch quicklinks
**Data Source**: quicklinks.ts (1115 lines, 120+ links)
**Features**:

- Grid of link cards
- Click to open in new tab
- 11 categories

**Card Structure**:

- Icon/Emoji
- Name + Description
- Link URL

### 6. snippets.html - Text Snippets

**Purpose**: Browse and copy text snippets
**Data Source**: snippets.ts (1177 lines, 100+ snippets)
**Features**:

- Large centered text display
- Multiple categories (arrows, symbols, templates)
- Click to copy

**Card Structure**:

- Large symbol/text display
- Name + keyword
- Type badge

### 7. themes.html - Theme Browser

**Purpose**: Browse Raycast themes
**Features**:

- Theme cards with color palettes
- 8 color swatches per theme
- Click to copy colors
- Author information

**Card Structure**:

- Theme name + author
- 8 color swatches in grid

## Technical Requirements

### Dependencies

- **html2canvas**: v1.4.1 (PNG export)
- **highlight.js**: Latest (syntax highlighting)

### Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid support
- CSS Custom Properties support

### File Structure

```
static/
├── index.html          (code tool)
├── icon.html           (icon maker)
├── prompts.html        (prompts browser)
├── presets.html        (presets browser)
├── quicklinks.html     (quicklinks browser)
├── snippets.html       (snippets browser)
├── themes.html         (themes browser)
├── style.css           (shared styles)
├── nav.js              (navigation)
├── main.js             (code tool logic)
├── prompts-data.js     (prompts data)
├── presets-data.js     (presets data)
├── quicklinks-data.js  (quicklinks data)
├── snippets-data.js    (snippets data)
└── themes-data.js      (themes data)
```

## Implementation Checklist

- [x] Extract design system from source
- [x] Create complete style.css
- [ ] Rebuild index.html
- [ ] Rebuild icon.html
- [ ] Rebuild prompts.html
- [ ] Rebuild presets.html
- [ ] Rebuild quicklinks.html
- [ ] Rebuild snippets.html
- [ ] Rebuild themes.html
- [ ] Rebuild nav.js
- [ ] Rebuild main.js
- [ ] Expand prompts-data.js (need ~50 prompts)
- [ ] Expand presets-data.js (need ~30 presets)
- [ ] Keep quicklinks-data.js (120+ already done)
- [ ] Expand snippets-data.js (need ~100 snippets)
- [ ] Expand themes-data.js (need ~20 themes)
- [ ] Full code review
- [ ] Quality check
- [ ] Git commit

## Code Quality Standards

### HTML

- Semantic markup
- Proper accessibility (alt text, ARIA labels)
- Clean indentation (2 spaces)
- No inline styles (use classes)

### CSS

- BEM-like naming convention
- Consistent spacing
- Mobile-first responsive
- Performance optimized (avoid expensive properties)

### JavaScript

- ES6+ syntax
- Clean, readable code
- Error handling
- Performance optimized

### Data Files

- Consistent structure
- Real data from source files
- Proper escaping
- Complete information

## Success Criteria

1. **Visual Match**: Pages look identical to ray.so
2. **Functionality**: All features work correctly
3. **Performance**: Fast loading, smooth interactions
4. **Data Scale**: Matches real ray.so (100+ items per category)
5. **Code Quality**: Clean, maintainable, well-documented
6. **Git Status**: All changes committed, hooks passing
