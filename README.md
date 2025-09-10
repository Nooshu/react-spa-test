# React A11y Test

A React-based Single Page Application (SPA) built with GOV.UK and MoJ Design Systems to demonstrate accessibility and performance best practices.

## 🎯 Purpose

This proof of concept explores how accessible and performant a React SPA can be when built with GOV.UK and MoJ Design System components. It serves as a testing ground for:

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
- ⚡ Real-time performance metrics with Web Vitals

### Components
- 📝 Comprehensive form examples with validation
- 🎨 GOV.UK Design System component gallery
- 🏛️ MoJ Design System component showcase
- 📊 Performance testing and metrics
- 🧭 Accessible navigation and routing

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **GOV.UK Frontend v5.11.2** for design system
- **MoJ Frontend v5.1.5** for Ministry of Justice components
- **React Router** for navigation
- **React Hook Form** with Zod validation
- **Web Vitals** for performance monitoring
- **Playwright** for accessibility testing

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
- `npm run lint:fix` - Fix ESLint issues
- `npm run test` - Run Vitest tests
- `npm run test:coverage` - Run tests with coverage
- `npm run test:ui` - Run tests with UI
- `npm run analyze` - Analyze bundle size
- `npm run a11y` - Run accessibility tests
- `npm run lighthouse` - Run Lighthouse performance audit

## 📱 Pages

### Home
Overview of the application with key features and performance metrics.

### Forms
Comprehensive form examples demonstrating:
- Input validation and error handling with Zod
- Accessible form controls
- Error summaries with field linking
- Fieldset and legend usage
- Required field indicators

### Components
Interactive gallery showcasing:
- Buttons, links, and interactive elements
- Panels, cards, and content components
- Tables with proper accessibility
- Accordions and tabs with keyboard navigation
- Navigation components

### Performance
Performance testing and optimization examples:
- Real-time performance metrics with Web Vitals
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
- Manual chunk configuration for optimal caching

### Runtime Performance
- React.memo for component memoization
- useMemo for expensive calculations
- useCallback for stable function references
- Virtual scrolling for large datasets

### Loading Performance
- Lazy loading of route components
- Optimized CSS loading
- Web Vitals monitoring
- Performance metrics dashboard

## 🧪 Testing

The application includes comprehensive testing setup:

```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui

# Run accessibility tests
npm run a11y

# Run Lighthouse audit
npm run lighthouse
```

### Test Structure
- **Unit Tests**: Vitest with React Testing Library
- **Accessibility Tests**: Playwright with accessibility assertions
- **Performance Tests**: Playwright with performance monitoring
- **E2E Tests**: Playwright for full user journeys

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
- Prettier for code formatting (recommended)

### Component Structure
```
src/
├── components/          # Reusable components
│   ├── Button.tsx      # Accessible button component
│   ├── Input.tsx       # Form input component
│   ├── Accordion.tsx   # Accessible accordion
│   ├── Tabs.tsx        # Keyboard-navigable tabs
│   └── ...
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Forms.tsx
│   ├── Components.tsx
│   ├── MojComponents.tsx
│   └── Performance.tsx
├── styles/             # SCSS styles
├── test/               # Test utilities
└── types/              # TypeScript type definitions
```

## 🎨 Design System Integration

This project integrates both GOV.UK Frontend and MoJ Frontend design systems:

### GOV.UK Frontend v5.10.2
- **Base Components**: Button, Input, Select, Textarea, etc.
- **Layout Components**: Header, Footer, Layout, Grid
- **Navigation**: Breadcrumbs, Pagination, Tabs
- **Feedback**: Alert, Error Summary, Warning Text
- **Forms**: Checkboxes, Radios, Date Input, File Upload

### MoJ Frontend v5.1.5
- **MoJ Card**: Enhanced card components with metadata
- **MoJ Banner**: Service-specific banners with dismissible options
- **MoJ Search**: Advanced search functionality
- **MoJ Side Navigation**: Hierarchical navigation structure
- **MoJ Multi-file Upload**: Drag-and-drop file upload with validation

### Integration Approach
- **React Wrappers**: Custom React components that encapsulate MoJ HTML/CSS
- **JavaScript Initialization**: Automatic initialization of MoJ interactive components
- **Type Safety**: TypeScript definitions for all components
- **Accessibility**: WCAG 2.1 AA compliance maintained across both systems
- **Performance**: Optimized bundle size with tree shaking

## 📚 Resources

- [GOV.UK Design System](https://design-system.service.gov.uk/)
- [GOV.UK Frontend v5.11.2](https://github.com/alphagov/govuk-frontend/releases/tag/v5.11.2)
- [MoJ Frontend v5.1.5](https://github.com/ministryofjustice/moj-frontend)
- [React Accessibility](https://reactjs.org/docs/accessibility.html)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Vitals](https://web.dev/vitals/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Ensure accessibility standards are met
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- GOV.UK Design System team for the excellent design system
- Ministry of Justice for MoJ Frontend components
- React team for the powerful framework
- Accessibility community for best practices and guidelines
