# Krishian Website Design Specification

## Design System

### Color Palette
- **Primary Green**: `#0B6E4F` - Deep, professional green for primary actions
- **Accent Orange**: `#F6A500` - Warm orange for highlights and CTAs
- **Dark**: `#0F1724` - Near-black for text and dark sections
- **Muted Gray**: `#6B7280` - For secondary text and subtle elements
- **Surface White**: `#FFFFFF` - Clean white for backgrounds and cards

### Typography
- **Font Family**: Inter (system fallback)
- **Scale**:
  - H1: 3rem (48px) - Hero headlines
  - H2: 2.125rem (34px) - Section headers
  - H3: 1.5rem (24px) - Subsection headers
  - Body: 1rem (16px) - Regular text
  - Small: 0.875rem (14px) - Captions and labels

### Spacing
- **Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
- **Card Padding**: 32px (2rem)
- **Section Padding**: 96px (6rem) vertical

### Border Radius
- **Cards**: 8px (0.5rem)
- **Pills**: 9999px (fully rounded)
- **Buttons**: 8px (0.5rem)

### Shadows
- **Soft**: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
- **Card**: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- **Glow**: `0 0 20px rgba(11, 110, 79, 0.3)`

## Animation Tokens

### Durations
- **Fast**: 0.2s
- **Normal**: 0.3s
- **Slow**: 0.6s

### Easing
- **Default**: `ease-out`
- **Smooth**: `cubic-bezier(0.23, 1, 0.320, 1)`

### Animations
- **Fade In**: `fadeIn 0.6s ease-out`
- **Slide Up**: `slideUp 0.6s ease-out`
- **Slide Left**: `slideLeft 0.6s ease-out`
- **Slide Right**: `slideRight 0.6s ease-out`
- **Scale In**: `scaleIn 0.6s ease-out`
- **Float**: `float 6s ease-in-out infinite`
- **Pulse Glow**: `pulseGlow 2s ease-in-out infinite`

## Component Guidelines

### Buttons
- **Primary**: Green gradient with white text, hover scale 1.05
- **Secondary**: White background with green border
- **Accent**: Orange background with white text
- **Outline**: Transparent with colored border

### Cards
- **Background**: White with subtle shadow
- **Hover**: Lift effect (-translate-y-2) with glow shadow
- **Border**: Light gray, changes to green on hover

### Sections
- **Background**: Alternating white and light gray gradients
- **Padding**: 96px vertical, responsive
- **Max Width**: 1280px (7xl)

## Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Accessibility Features
- **Focus States**: Visible focus rings on all interactive elements
- **Color Contrast**: WCAG AA compliant
- **Motion**: Respects `prefers-reduced-motion`
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Text**: All images have descriptive alt text

## Performance Optimizations
- **Images**: Responsive with lazy loading
- **Animations**: GPU-accelerated transforms
- **Code Splitting**: Component-based architecture
- **Bundle Size**: Optimized imports and tree shaking

