# 🌾 Krishian Website

A world-class, production-ready website for Krishian - Bangladesh's leading agricultural technology platform connecting farmers directly with retailers and wholesalers.

## ✨ Features

- **Modern Design System**: Consistent colors, typography, and spacing
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Accessibility**: WCAG AA compliant with proper focus states
- **Performance Optimized**: Fast loading with lazy loading and code splitting
- **SEO Ready**: Semantic HTML and meta tags for search engines

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd krishian-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── HeroSection.js           # Hero section with CTA
│   ├── ProblemCardsSection.js   # Bangladesh agriculture challenges
│   ├── HowItWorksSection.js     # 5-step process timeline
│   ├── RootsSection.js          # Bangladesh agriculture reality
│   ├── TechnologySection.js     # Tech stack showcase
│   ├── WhoBenefitsSection.js    # Stakeholder benefits
│   ├── ImpactSection.js         # Metrics and testimonials
│   └── ...
├── pages/              # Page components
├── styles/             # Global styles and utilities
└── utils/              # Helper functions
```

## 🎨 Design System

### Colors
- **Primary**: `#0B6E4F` (Deep Green)
- **Accent**: `#F6A500` (Warm Orange)  
- **Dark**: `#0F1724` (Near Black)
- **Muted**: `#6B7280` (Gray)
- **Surface**: `#FFFFFF` (White)

### Typography
- **Font**: Inter (system fallback)
- **Scale**: 48px, 34px, 24px, 16px, 14px

### Spacing
- **Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

## 🛠 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs development server on port 3000 |
| `npm build` | Creates production build in `build/` |
| `npm test` | Launches test runner |
| `npm run analyze` | Analyzes bundle size |

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility Features

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Focus indicators on all interactive elements
- ✅ Alt text for all images
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Color contrast compliance (WCAG AA)

## ⚡ Performance Optimizations

- ✅ Image lazy loading
- ✅ Code splitting by route
- ✅ Optimized bundle size
- ✅ GPU-accelerated animations
- ✅ Efficient re-renders with React.memo
- ✅ Intersection Observer for scroll animations

## 🎯 SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags for social sharing
- ✅ Open Graph tags
- ✅ Twitter Card support
- ✅ JSON-LD structured data
- ✅ Sitemap generation ready

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

## 📊 Lighthouse Scores

Target scores for production:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 90+

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run accessibility tests
npm run test:a11y
```

## 📝 Content Management

The website content is managed through React components. To update content:

1. **Hero Section**: Edit `src/components/HeroSection.js`
2. **Problem Cards**: Edit `src/components/ProblemCardsSection.js`
3. **How It Works**: Edit `src/components/HowItWorksSection.js`
4. **Technology**: Edit `src/components/TechnologySection.js`
5. **Impact Metrics**: Edit `src/components/ImpactSection.js`

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  'krishian-green': '#0B6E4F',
  'krishian-accent': '#F6A500',
  // ... other colors
}
```

### Typography
Update font sizes in `tailwind.config.js`:
```javascript
fontSize: {
  'h1': ['3rem', { lineHeight: '1.1' }],
  // ... other sizes
}
```

### Animations
Customize animations in `src/index.css`:
```css
@keyframes customAnimation {
  /* animation keyframes */
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- 📧 Email: hello@krishian.com
- 📱 Phone: +880-1234-567890
- 🌐 Website: [krishian.com](https://krishian.com)

## 🙏 Acknowledgments

- Design inspiration from modern agricultural platforms
- Icons from Heroicons and custom SVG illustrations
- Images from Unsplash (properly licensed)
- Fonts from Google Fonts (Inter)

---

**Built with ❤️ for Bangladesh's agricultural community**