# React A11y Test

A React-based Single Page Application (SPA) built with the GOV.UK Design System to demonstrate accessibility and performance best practices.

## 🎯 Purpose

This proof of concept explores how accessible and performant a React SPA can be when built with the GOV.UK Design System components. It serves as a testing ground for:

- **Accessibility**: WCAG 2.1 AA compliance, screen reader support, keyboard navigation
- **Performance**: Bundle optimization, lazy loading, memoization, virtual scrolling
- **Developer Experience**: TypeScript, modern tooling, component reusability

## 🚀 Features

### Accessibility
- ✅ WCAG 2.1 AA compliant components
- ✅ Screen reader optimized
- ✅ Full keyboard navigation support
- ✅ Focus management and ARIA labels
- ✅ High contrast and color accessibility
- ✅ Semantic HTML structure

### Performance
- ⚡ Vite for fast development and optimized builds
- ⚡ Code splitting and lazy loading
- ⚡ React.memo, useMemo, and useCallback optimizations
- ⚡ Virtual scrolling for large datasets
- ⚡ Bundle analysis and optimization
- ⚡ Service worker ready

### Components
- 📝 Comprehensive form examples with validation
- 🎨 GOV.UK Design System component gallery
- 📊 Performance testing and metrics
- 🧭 Accessible navigation and routing

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **GOV.UK Frontend** for design system
- **GOV.UK React** for React components
- **React Router** for navigation
- **ESLint** for code quality

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-a11y-test
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:coverage` - Run tests with coverage

## 📱 Pages

### Home
Overview of the application with key features and performance metrics.

### Forms
Comprehensive form examples demonstrating:
- Input validation and error handling
- Accessible form controls
- Error summaries with field linking
- Fieldset and legend usage
- Required field indicators

### Components
Interactive gallery showcasing:
- Buttons, links, and interactive elements
- Panels, cards, and content components
- Tables with proper accessibility
- Accordions and tabs
- Navigation components

### Performance
Performance testing and optimization examples:
- Real-time performance metrics
- Virtual scrolling demonstration
- Memoization examples
- Bundle analysis results

## ♿ Accessibility Features

### Keyboard Navigation
- Tab to navigate between interactive elements
- Enter/Space to activate buttons and links
- Arrow keys for tabs and accordion navigation
- Escape to close modals and details

### Screen Reader Support
- Semantic HTML structure with proper headings
- ARIA labels and descriptions
- Live regions for dynamic content updates
- Proper form labels and error associations

### Visual Design
- High contrast ratios meeting WCAG standards
- Clear focus indicators
- Consistent spacing and typography
- Responsive design for all screen sizes

## ⚡ Performance Optimizations

### Bundle Optimization
- Code splitting at route and component level
- Vendor chunk separation
- Tree shaking for unused code elimination
- Gzip compression reducing bundle size by ~70%

### Runtime Performance
- React.memo for component memoization
- useMemo for expensive calculations
- useCallback for stable function references
- Virtual scrolling for large datasets

### Loading Performance
- Critical CSS inlined
- Non-critical CSS loaded asynchronously
- Image optimization and lazy loading
- Service worker ready for caching

## 🧪 Testing

The application includes comprehensive testing setup:

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage
```

## 📊 Performance Metrics

Current performance targets:
- **Lighthouse Score**: 90+ (Accessibility)
- **Bundle Size**: <250KB (gzipped)
- **Load Time**: <1s (3G connection)
- **Memory Usage**: <30MB
- **Render Time**: <50ms

## 🔧 Development

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks (optional)

### Component Structure
```
src/
├── components/          # Reusable components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── types/              # TypeScript type definitions
```

## 📚 Resources

- [GOV.UK Design System](https://design-system.service.gov.uk/)
- [GOV.UK React Components](https://github.com/govuk-react/govuk-react)
- [React Accessibility](https://reactjs.org/docs/accessibility.html)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Vitals](https://web.dev/vitals/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- GOV.UK Design System team for the excellent design system
- React team for the powerful framework
- Accessibility community for best practices and guidelines
