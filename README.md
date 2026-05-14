# MeeruAI Website - Homepage Code

## Overview
This is the homepage code for the MeeruAI website built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## Prerequisites

Before running this project, make sure you have:

- **Node.js** version 18.17 or higher (recommended: 20.x LTS)
- **npm** (comes with Node.js) or **yarn**

To check if you have Node.js installed:
```bash
node -v
```

To check npm:
```bash
npm -v
```

## Installation

### Step 1: Extract the files
Unzip `homepage-code.zip` to your desired folder.

### Step 2: Install dependencies
Open a terminal/command prompt in the project folder and run:

```bash
npm install
```

This will install all required packages including:
- Next.js 15.1.0
- React 19
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- PostCSS
- And other dev dependencies

**Note:** If you see a `package-lock.json` file, the install will use exact versions to ensure consistency.

## Running the Development Server

To start the local development server:

```bash
npm run dev
```

This will start the server at `http://localhost:3000`

Open your browser and navigate to:
```
http://localhost:3000
```

The development server features:
- **Hot Reload**: Changes to code automatically refresh the browser
- **Fast Refresh**: React components update without losing state
- **Error Overlay**: Build errors show directly in the browser

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This will:
- Compile TypeScript
- Optimize and bundle all assets
- Generate static HTML files
- Output to the `.next/` folder

To start the production server locally:
```bash
npm start
```

## Project Structure

```
meeru-site/
├── app/
│   ├── components/
│   │   └── Navbar.tsx          # Navigation bar component
│   ├── sections/
│   │   ├── HeroSection.tsx     # Hero/landing section
│   │   ├── OpportunitySection.tsx  # "The Opportunity" section
│   │   ├── ArchitectureSection.tsx # Architecture diagram section
│   │   ├── CapabilitiesSection.tsx # Capabilities/features section
│   │   ├── ProductsSection.tsx     # Products overview
│   │   ├── DifferenceSection.tsx   # "How We're Different"
│   │   ├── MeeruFitsSection.tsx    # "Where MeeruAI Fits"
│   │   ├── ProofPointsSection.tsx  # Proof points/testimonials
│   │   └── CTAFooterSection.tsx    # CTA + Footer
│   ├── globals.css             # Global CSS styles
│   ├── layout.tsx              # Root layout (wraps all pages)
│   └── page.tsx                # Main homepage (assembles all sections)
├── public/                     # Static assets (images, logos, etc.)
├── tailwind.config.js          # Tailwind CSS configuration
├── package.json                # Dependencies and scripts
└── next.config.js              # Next.js configuration
```

## Key Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 15.1.0 | React framework with App Router |
| React | 19.0.0 | UI library |
| TypeScript | 5.x | Type-safe JavaScript |
| Tailwind CSS | 3.4.x | Utility-first CSS framework |
| PostCSS | 8.x | CSS processing |
| Lucide React | 0.468.0 | Icon library |

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm start` | Start production server (run after build) |
| `npm run lint` | Run ESLint for code quality |

## Customization

### Changing Colors
Colors are defined in `tailwind.config.js`:
```javascript
colors: {
  'meeru-orange': '#E8683A',
  'meeru-dark': '#1a1a1a',
  // ... more colors
}
```

### Adding New Sections
1. Create a new `.tsx` file in `app/sections/`
2. Import and add it to `app/page.tsx`

### Updating Content
Each section is a self-contained component. Simply edit the text/content within the respective section file.

## Troubleshooting

### Port already in use
If port 3000 is busy, Next.js will automatically try the next available port (3001, 3002, etc.). Check the terminal output for the actual URL.

### npm install fails
- Ensure you're using Node.js 18.17+
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again

### Build errors
- Check the terminal for specific error messages
- Ensure all imports are correct and files exist
- Make sure all dependencies are installed

## Notes for Client Review

- This code represents the **homepage only**
- All sections are responsive and work on mobile, tablet, and desktop
- The site uses modern React patterns (Server Components by default, Client Components where needed)
- Animations and interactions are implemented with CSS transitions and React state
- The code is production-ready and follows Next.js best practices

---

**Questions or issues?** Feel free to reach out for clarification on any part of the codebase.
