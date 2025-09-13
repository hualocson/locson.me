# Loc Son's Personal Website

A modern, minimal personal website built with Next.js, featuring dynamic art backgrounds, MDX blog support, and a clean design system.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Dynamic Art Backgrounds**: Interactive visual elements using PIXI.js
- **MDX Blog Support**: Write blog posts in MDX with custom components
- **Dark/Light Theme**: System preference detection with manual toggle
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Proper meta tags and structured data
- **Performance Focused**: Optimized images and code splitting
- **Custom Typography**: Inter and Roboto Condensed fonts
- **Magic Links**: Custom MDX plugin for enhanced link formatting

## 🚀 Tech Stack

### Core

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework

### Content & Styling

- **MDX** - Markdown with JSX components
- **mdx-bundler** - MDX compilation and bundling
- **remark-gfm** - GitHub Flavored Markdown support
- **next-themes** - Theme management
- **Lucide React** - Icon library

### Interactive Elements

- **PIXI.js** - 2D WebGL renderer for art backgrounds
- **simplex-noise** - Procedural noise generation
- **class-variance-authority** - Component variant management

### Development

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── posts/            # Blog posts
│   └── tailwind.config.ts # Tailwind configuration
├── components/            # React components
│   ├── markdown/         # MDX components
│   ├── ArtBackground.tsx # Dynamic art background
│   ├── ArtDots.tsx       # Dots animation
│   ├── ArtPlum.tsx       # Plum animation
│   ├── Footer.tsx        # Site footer
│   ├── Header.tsx        # Site header
│   ├── Navbar.tsx        # Navigation bar
│   └── ThemeProvider.tsx # Theme context
├── content/              # MDX content
│   └── index.mdx         # Home page content
├── lib/                  # Utility functions
│   ├── mdx.ts           # MDX compilation
│   ├── pre-process-mdx.ts # MDX preprocessing
│   └── utils.ts         # Utility functions
└── types/               # TypeScript type definitions
    └── index.d.ts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/hualocson/locson.me.git
cd locson.me
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Writing Content

### Blog Posts

Create new blog posts by adding `.mdx` files to the `src/content/` directory:

```mdx
---
title: "My Blog Post"
description: "A brief description"
date: "2024-01-01"
---

# My Blog Post

Write your content here using Markdown and JSX components.
```

### Home Page Content

Edit `src/content/index.mdx` to update the home page content.

### Custom MDX Components

Add custom components in `src/components/markdown/` to use in your MDX files.

## 🎨 Customization

### Themes

The site supports light and dark themes. Theme configuration is in `src/components/ThemeProvider.tsx`.

### Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `src/app/tailwind.config.ts`
- Component styles: Inline with Tailwind classes

### Art Backgrounds

Customize the art backgrounds in:

- `src/components/ArtBackground.tsx` - Background selector
- `src/components/ArtDots.tsx` - Dots animation
- `src/components/ArtPlum.tsx` - Plum animation

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Add your environment variables here
```

### Next.js Configuration

Modify `next.config.ts` for Next.js-specific settings.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [MDX](https://mdxjs.com/) for the markdown + JSX experience
- [PIXI.js](https://pixijs.com/) for the interactive graphics
- [Lucide](https://lucide.dev/) for the beautiful icons

---

Built with ❤️ by [Loc Son](https://github.com/hualocson)
