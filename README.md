# Krishian Website

A modern, responsive React + TailwindCSS website for Krishian - an agri-tech platform empowering farmers and reducing food waste.

## Features

- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Modern UI**: Clean, professional design with custom color scheme
- **Smooth Animations**: Hover effects and transitions
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Performance**: Optimized images and efficient CSS

## Color Palette

- Primary Green: `#8CC63F`
- Dark Green: `#2E5A27`
- White: `#FFFFFF`
- Gray: Various shades for text and backgrounds

## Sections

1. **Navbar**: Sticky navigation with logo and menu links
2. **Hero Section**: Full-width background with compelling headline and CTA
3. **Stats Section**: Three key metrics in responsive cards
4. **Core Values**: Three value propositions with icons
5. **Footer**: Company branding and copyright information

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Project Structure

```
krishian-website/
├── public/
│   ├── assets/
│   │   └── logo.png
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Customization

- **Logo**: Replace `public/assets/logo.png` with your actual logo
- **Colors**: Update colors in `tailwind.config.js` and `src/index.css`
- **Content**: Modify text content in `src/App.js`
- **Images**: Update background images in the Hero section

## Technologies Used

- React 18
- TailwindCSS 3.3
- PostCSS
- Autoprefixer
- Google Fonts (Inter)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
