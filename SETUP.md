# Setup Instructions

## Quick Start

1. **Install Node.js** (version 18+ recommended)
   - Download from [nodejs.org](https://nodejs.org/)

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to http://localhost:3000

## Project Migration Status

✅ **Completed:**
- Package.json with all dependencies
- Next.js 14 configuration
- Tailwind CSS setup with custom design system
- TypeScript configuration
- All Shadcn/UI components
- App Router structure
- Homepage (fully functional)
- Dashboard (fully functional)
- Innovation Vault (fully functional)
- Wallet Connect (fully functional)
- Navigation component

🚧 **To Complete:**
The following pages need the full component logic migrated from `src/pages/`:

1. **Idea Submission** (`app/idea-submission/page.tsx`)
   - Copy content from `src/pages/idea-submission.tsx`
   - Update imports to use new component paths

2. **Token Dashboard** (`app/token-dashboard/page.tsx`)
   - Copy content from `src/pages/token-dashboard.tsx`
   - Update imports to use new component paths

3. **Snapshot DAO** (`app/snapshot-dao/page.tsx`)
   - Copy content from `src/pages/snapshot-dao.tsx`
   - Update imports to use new component paths

4. **Join Us** (`app/join-us/page.tsx`)
   - Copy content from `src/pages/join-us.tsx`
   - Update imports to use new component paths

## Migration Steps for Remaining Pages

For each remaining page:

1. Open the original file in `src/pages/`
2. Copy the component content
3. Replace the placeholder in the corresponding `app/*/page.tsx` file
4. Update import paths:
   - `@/components/ui/*` (already correct)
   - `@/lib/utils` (already correct)

## File Structure Changes

**Old structure:**
```
src/
├── pages/           # Page components
├── components/      # React components
├── layout.tsx       # Root layout
├── page.tsx         # Homepage
└── globals.css      # Global styles
```

**New structure:**
```
app/                 # Next.js App Router
├── */page.tsx       # Individual pages
├── layout.tsx       # Root layout
├── page.tsx         # Homepage
└── globals.css      # Global styles

src/
├── components/      # React components (unchanged)
└── lib/            # Utility functions (unchanged)
```

## Development Notes

- All UI components are now properly configured
- Navigation works correctly between all pages
- Responsive design is maintained
- Original UI/UX design is preserved
- TypeScript types are properly configured

## Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

Create a `.env.local` file for any environment-specific variables:

```bash
# Example - add your own variables as needed
NEXT_PUBLIC_APP_URL=http://localhost:3000
```
