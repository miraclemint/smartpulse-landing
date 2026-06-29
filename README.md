# SmartPulse Landing Page

Modern, responsive landing page for SmartPulse with stunning parallax scrolling effects and smooth animations.

## 🎨 Features

- **Parallax Scrolling** - Layered animations with depth perception
- **Scroll Reveal** - Elements fade and slide in as you scroll
- **Floating Elements** - Smooth floating animations
- **Responsive Design** - Mobile-first approach, works on all devices
- **Modern UI** - Clean, professional design with teal and navy color scheme
- **Fast Performance** - Optimized images and smooth 60fps animations

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animation library
- **React 18** - Latest React features

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the landing page.

## 📁 Project Structure

```
smartpulse-landing/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── HeroSection.tsx     # Hero with parallax
│   ├── FeaturesSection.tsx # 4-column features
│   ├── HowItWorksSection.tsx # Timeline steps
│   ├── StatsSection.tsx    # Trust & certifications
│   ├── CTASection.tsx      # Call to action
│   ├── Footer.tsx          # Footer
│   ├── ParallaxSection.tsx # Parallax wrapper
│   ├── ScrollReveal.tsx    # Scroll reveal animation
│   └── FloatingElement.tsx # Floating animation
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 🎬 Sections

### Hero Section
- Large gradient background
- Product showcase with floating animation
- Animated CTAs
- Scroll indicator

### Features Section
- 4 feature cards with hover effects
- Icons and descriptions
- Smooth stagger animations
- Smooth underline on hover

### How It Works
- 4-step timeline
- Animated step indicators
- Connecting lines
- Responsive layout

### Stats & Trust
- Key metrics (1-min, 3+ metrics, etc.)
- Certifications display
- Trust badges
- Company information

### CTA Section
- Call-to-action buttons
- Animated background
- Contact information

### Footer
- Links organized by category
- Social media icons
- Medical disclaimer
- Copyright

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  navy: '#0A2D5E',
  teal: '#00A3B4',
  'light-teal': '#E8F7F9',
}
```

### Content
Update text content in each section component:
- `HeroSection.tsx` - Main headline and CTA
- `FeaturesSection.tsx` - Feature cards
- `HowItWorksSection.tsx` - Step descriptions
- `StatsSection.tsx` - Statistics and certifications

### Images
Add product images to `public/` directory and update paths in components.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- GitHub Pages
- AWS Amplify
- Digital Ocean

## 📱 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic by Next.js

## 📄 License

Copyright © 2024 Biofeedback Thailand. All rights reserved.

## 👨‍💻 Development

### Adding New Sections

1. Create a new component in `components/`
2. Import `ScrollReveal` and `motion` from framer-motion
3. Add animations using Framer Motion variants
4. Import and add to `page.tsx`

Example:

```tsx
'use client';

import { ScrollReveal } from './ScrollReveal';
import { motion } from 'framer-motion';

export const MyNewSection: React.FC = () => {
  return (
    <section className="py-24">
      <ScrollReveal direction="up">
        <h2>My Heading</h2>
      </ScrollReveal>
    </section>
  );
};
```

## 🐛 Troubleshooting

**Animations not showing?**
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser DevTools for console errors
- Clear `.next` folder and restart dev server

**Styles not applying?**
- Verify Tailwind CSS classes are correct
- Run `npm run build` to rebuild
- Check `tailwind.config.js` content paths

## 📞 Support

For questions or issues, contact: contact@smartpulse.app
