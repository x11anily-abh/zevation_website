# Zevation Website Documentation

This is the official website for Zevation, built with Next.js 14, TypeScript, and Tailwind CSS.

## Project Structure

```
zevation_website/
├── src/                      # Source code directory
│   ├── app/                  # Next.js app directory (App Router)
│   │   ├── layout.tsx       # Root layout component
│   │   ├── page.tsx         # Home page component
│   │   ├── globals.css      # Global styles
│   │   └── favicon.ico      # Website favicon
│   └── config/              # Configuration files
│       └── constants.ts     # Site-wide constants and configuration
│
├── public/                   # Static files
│   ├── images/              # Image assets
│   │   ├── social/         # Social media and preview images
│   │   └── Zevation_transparent_background.png  # Logo
│   ├── sitemap.xml         # XML sitemap for SEO
│   ├── sitemap.txt         # Text sitemap for SEO
│   ├── robots.txt          # Robots file for search engines
│   └── CNAME               # Custom domain configuration
│
├── .github/                 # GitHub configuration
│   └── workflows/          # GitHub Actions workflows
│       └── deploy.yml      # Deployment workflow
│
├── next.config.prod.js     # Production Next.js configuration
├── next.config.dev.js      # Development Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts
```

## Key Files and Their Purposes

### Source Files (`src/`)

#### App Directory (`src/app/`)
- `layout.tsx`: Root layout component that includes:
  - Metadata configuration
  - SEO optimization
  - Structured data (JSON-LD)
  - Font configuration (Rajdhani)
  - Global layout structure

- `page.tsx`: Home page component containing:
  - Hero section
  - Focus areas section
  - Contact section
  - Responsive design

- `globals.css`: Global styles including:
  - Tailwind CSS imports
  - Custom CSS variables
  - Base styles

#### Config Directory (`src/config/`)
- `constants.ts`: Site-wide constants including:
  - Site configuration
  - Navigation links
  - Image paths
  - Contact information

### Public Files (`public/`)

#### Images (`public/images/`)
- `social/`: Social media and preview images
  - `social-preview.png`: Main preview image for social sharing
- `Zevation_transparent_background.png`: Company logo

#### SEO Files
- `sitemap.xml`: XML sitemap for search engines
- `sitemap.txt`: Text sitemap for search engines
- `robots.txt`: Search engine crawling rules
- `CNAME`: Custom domain configuration for GitHub Pages

### Configuration Files

#### Next.js Configuration
- `next.config.prod.js`: Production settings including:
  - Static export configuration
  - Image optimization
  - Cache control headers

- `next.config.dev.js`: Development settings including:
  - Hot reloading
  - Development-specific optimizations

#### Style Configuration
- `tailwind.config.js`: Tailwind CSS configuration including:
  - Custom colors
  - Font family settings
  - Responsive breakpoints

#### TypeScript Configuration
- `tsconfig.json`: TypeScript settings including:
  - Path aliases
  - Compiler options
  - Type checking rules

## Development

### Prerequisites
- Node.js 20.x
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Static Export
```bash
npm run dev:static
```

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process is handled by the GitHub Actions workflow in `.github/workflows/deploy.yml`.

## SEO and Metadata

The website includes comprehensive SEO optimization:
- Structured data (JSON-LD)
- Meta tags
- Open Graph tags
- Twitter cards
- Sitemaps
- Robots.txt

## Custom Domain

The website is configured to use the custom domain `zevation.ai`. The configuration is handled by:
- `public/CNAME` file
- DNS settings
- GitHub Pages configuration
