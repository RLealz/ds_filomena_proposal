# Filomena Antão - DS Seguros Digital Services Proposal Website

## Project Overview

This is an interactive proposal website for Filomena Antão (DS Seguros agent) showcasing digital services for insurance agencies. The website features:

- **Bilingual Support**: English and Portuguese (European)
- **Interactive Package Customizer**: Real-time pricing based on selected services
- **Premium Design**: DS Seguros green (#5FBB46) brand colors
- **Responsive Layout**: Mobile-first design
- **Professional Components**: Pricing comparison, ROI calculator, timeline, FAQ, and more

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Routing**: Wouter

## Project Structure

```
filomena_proposal/
├── client/
│   ├── public/
│   │   └── images/          # Hero family image and assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── PackageCustomizer.tsx    # NEW: Interactive package builder
│   │   │   ├── PricingComparison.tsx
│   │   │   ├── MarketResearch.tsx
│   │   │   ├── ServicesBreakdown.tsx
│   │   │   ├── ROICalculator.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── LanguageToggle.tsx
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── contexts/
│   │   │   └── LanguageContext.tsx      # Language management (EN/PT)
│   │   ├── lib/
│   │   │   └── faqTranslations.ts       # All translations
│   │   ├── pages/
│   │   │   ├── Home.tsx                 # Main landing page
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css                    # Global styles + DS Seguros colors
│   └── index.html
├── server/
│   └── index.ts             # Express server (static deployment)
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites
- Node.js 18+ (or use nvm)
- pnpm (comes with project)

### Installation

1. **Clone/Download the project**
   ```bash
   cd filomena_proposal
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   pnpm run build
   ```

## Key Features Implemented

### 1. Package Customizer Dashboard (NEW)
**File**: `client/src/components/PackageCustomizer.tsx`

Interactive component allowing users to:
- Toggle individual services on/off with checkboxes
- See real-time price updates
- View separate setup costs (one-time) and monthly management fees
- See a summary of selected services
- Request custom quotes

**Services Available**:
- Landing Page (€750)
- AI Chatbot 24/7 (€250)
- LinkedIn Optimization (€350)
- Instagram Optimization (€0)
- Lead Automation Setup (€150)
- Monthly Social Posts (€450/month)
- Community Management (€200/month)
- Analytics Reports (€150/month)
- AI Content Strategy (€300/month)
- Priority Support (€200/month)

### 2. Bilingual Interface
**File**: `client/src/contexts/LanguageContext.tsx`

- Language toggle in header (EN | PT)
- All content translated to European Portuguese
- Persistent language selection

### 3. Premium Design
**Colors** (DS Seguros Brand):
- Primary: `#5FBB46` (DS Seguros Green)
- Background: `#f8f9f7` (Light Grey)
- Text: `#1a1a1a` (Dark)
- Secondary: `#5FBB46` (Green accents)

**Typography**:
- Headlines: Playfair Display (serif)
- Body: Lato (sans-serif)

### 4. Responsive Components
- Hero section with family image
- Interactive package selector
- Pricing comparison table
- Services breakdown with icons
- Market research benchmarking
- ROI calculator with sliders
- Implementation timeline
- FAQ accordion
- Call-to-action sections

## Development Workflow

### Adding New Content

1. **Update Translations**
   - Edit `client/src/lib/faqTranslations.ts` for new text
   - Use `useLanguage()` hook to access `t()` function

2. **Create New Components**
   - Place in `client/src/components/`
   - Use shadcn/ui components for consistency
   - Import `useLanguage` for bilingual support

3. **Modify Styles**
   - Edit `client/src/index.css` for global changes
   - Use Tailwind classes for component styles
   - Respect the DS Seguros color palette

### Example: Using Translations

```tsx
import { useLanguage } from "@/contexts/LanguageContext";

export function MyComponent() {
  const { language, t } = useLanguage();
  
  return (
    <div>
      <h1>{t("my_key.title")}</h1>
      {language === "en" ? "English text" : "Texto português"}
    </div>
  );
}
```

## Deployment

### Option 1: Manus Platform
1. Reconnect GitHub in Connectors settings
2. Use the Publish button in the Management UI
3. Website will be deployed automatically

### Option 2: Manual Deployment
1. Build the project: `pnpm run build`
2. Deploy the `dist/` folder to your hosting provider
3. Ensure server redirects all routes to `index.html` (SPA)

### Option 3: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm run build
CMD ["pnpm", "start"]
```

## Git Workflow

```bash
# Make your changes
git add .
git commit -m "Add feature description"
git push origin main
```

## Future Enhancements

### Planned Features
1. **AI Chatbot** (requires backend upgrade)
   - Real-time conversation interface
   - Powered by OpenRouter AI
   - Context-aware responses about services

2. **Contact Form Integration**
   - Capture lead information
   - Send notifications to Filomena
   - CRM integration

3. **Testimonials Section**
   - Client success stories
   - Case studies with metrics
   - Social proof elements

4. **WhatsApp Integration**
   - Floating WhatsApp button
   - Direct messaging capability

5. **Analytics Dashboard**
   - Track visitor behavior
   - Monitor conversion metrics
   - A/B testing capabilities

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
# Or use a different port
pnpm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Errors
```bash
# Check TypeScript
pnpm run check

# Format code
pnpm run format
```

## Environment Variables

Currently, the project doesn't require environment variables for basic functionality. When implementing the chatbot, you'll need:

```env
VITE_FRONTEND_FORGE_API_KEY=your_key_here
VITE_FRONTEND_FORGE_API_URL=your_url_here
```

## Performance Tips

1. **Images**: All images are optimized and stored in `client/public/images/`
2. **Code Splitting**: Vite handles automatic code splitting
3. **Caching**: Static assets have aggressive caching headers
4. **SEO**: Meta tags are configured in `client/index.html`

## Support & Contact

For questions or issues with the website:
- Check the FAQ section (built into the site)
- Review component documentation in code comments
- Test locally before deploying

## License

This project is proprietary to Filomena Antão / DS Seguros.

---

**Last Updated**: January 16, 2026
**Version**: 2.0 (with Package Customizer)
