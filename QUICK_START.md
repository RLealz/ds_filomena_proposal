# Quick Start Guide - Filomena Proposal Website

## Download & Setup (5 minutes)

### Step 1: Download the Project
Download the entire `filomena_proposal` folder from the Manus interface.

### Step 2: Install Dependencies
```bash
cd filomena_proposal
pnpm install
```

### Step 3: Run Locally
```bash
pnpm run dev
```

Open your browser to: **http://localhost:5173**

## What's New

### Package Customizer Dashboard ✨
- Located between Timeline and FAQ sections
- Users can select/deselect individual services
- Real-time price calculation
- Shows setup cost (one-time) + monthly management fees
- Bilingual support (EN/PT)

### Example Services
- Landing Page: €750 (setup)
- AI Chatbot: €250 (setup)
- LinkedIn Optimization: €350 (setup)
- Social Posts: €450/month
- Community Management: €200/month
- Analytics: €150/month

## Git Workflow

```bash
# 1. Make your changes locally
# 2. Test with: pnpm run dev

# 3. Commit to git
git add .
git commit -m "Add package customizer dashboard"
git push origin main

# 4. Build for production
pnpm run build
```

## File Changes Summary

### New Files
- `client/src/components/PackageCustomizer.tsx` - Interactive package builder

### Modified Files
- `client/src/pages/Home.tsx` - Added PackageCustomizer component
- `client/src/index.css` - DS Seguros green color scheme

### No Breaking Changes
All existing features continue to work as before.

## Testing Checklist

- [ ] Run `pnpm run dev` successfully
- [ ] Website loads at localhost:5173
- [ ] Language toggle works (EN | PT)
- [ ] Package customizer appears on page
- [ ] Can click services to toggle them
- [ ] Prices update in real-time
- [ ] Mobile responsive (test on phone)
- [ ] All buttons are clickable

## Common Commands

```bash
# Development
pnpm run dev          # Start dev server
pnpm run build        # Build for production
pnpm run preview      # Preview production build
pnpm run check        # TypeScript check
pnpm run format       # Format code

# Git
git status            # Check changes
git add .             # Stage all changes
git commit -m "msg"   # Commit with message
git push              # Push to remote
```

## Need Help?

1. Check `SETUP_GUIDE.md` for detailed documentation
2. Review component code comments
3. Check console for error messages
4. Test in different browsers

## Next Steps

Once you have the code running locally:

1. **Test the Package Customizer**
   - Scroll to the customizer section
   - Click services to toggle them
   - Verify prices update correctly

2. **Customize for Your Needs**
   - Update service names/prices in `PackageCustomizer.tsx`
   - Change colors in `index.css`
   - Add your own content

3. **Deploy**
   - Build: `pnpm run build`
   - Deploy the `dist/` folder to your hosting

4. **Future Enhancements**
   - Add contact form
   - Implement chatbot (requires backend)
   - Add testimonials section

---

**Ready to go!** 🚀
