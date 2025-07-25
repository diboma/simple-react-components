# Simple React Components & Boilerplate

<a href="https://diboma.github.io/simple-react-components" target="__blank">See components preview on GitHub Pages</a>

## 🎯 What's Inside

This repository provides **two main features**:

1. **📦 React Component Library** - A collection of simple, reusable React components
2. **🚀 Multi-Framework Boilerplate** - A complete React setup that dynamically switches between Bootstrap, Tailwind CSS, and vanilla CSS

## 🧪 Component Preview with Ladle + CSS Variants

The component library uses [Ladle](https://ladle.dev/) for local previewing and documenting UI components. It supports three style variants: **Bootstrap**, **Tailwind**, and **vanilla CSS**.

## Credits

Some components in this library are inspired by or adapted from [Flowbite](https://flowbite.com/), an open-source UI component library built with Tailwind CSS. We acknowledge and appreciate the work of the Flowbite team and contributors.

## 🚀 React App Development

The boilerplate includes a complete React application that dynamically loads the appropriate styling framework based on your configuration. Perfect for:

- **Prototyping** with different CSS frameworks
- **Component testing** across multiple design systems  
- **Learning** how different frameworks approach styling
- **Starting new projects** with your preferred stack

### 📦 Installation

Before running anything:

```bash
npm install
```

### 🎛️ Choose Variant

In your `.env` file, uncomment one style variant:

```dotenv
# VITE_VARIANT_MAPPING=bootstrap
VITE_VARIANT_MAPPING=tailwind
# VITE_VARIANT_MAPPING=vanilla
```

> Only **one** line should be active (uncommented). The other variants must remain commented out.
> 
> **For vanilla variant**: 
> 
> - Add your own class names when using the components
> - Put your CSS in `src/assets/styles/vanilla.css`

---

### 🖌️ Tailwind Theme Customization

If you're using the **Tailwind** variant, you can customize colors, typography, and component styles in:

```
./tailwind.theme.js
```

This file defines:

- Theme colors (e.g. `primary`, `danger`, `success`)
- Optional hover variants (e.g. `primaryHover`)
- Typography settings (e.g. font families)
- Default button styling presets

These values are automatically integrated via `tailwind.config.js` and can be used across components with utility classes like `bg-primary` and `hover:bg-primary-hover`.

---

### 🧪 Component Development (Ladle)

Start the component preview server with:

```bash
npm run ladle
```

This command:

- Cleans previously generated styles
- Builds the correct variant's CSS
- Starts Ladle at [http://localhost:8000](http://localhost:8000)

### 🚀 React App Development

Start the React development server with:

```bash
npm run dev
```

This starts your React app at [http://localhost:5173](http://localhost:5173) with the selected CSS framework.

---

### 📦 Build Commands

**Build component previews:**

```bash
npm run ladle:build
```

**Build React app:**

```bash
npm run build
```

---

### 🏗️ Project Structure

```
src/
├── assets/
│   ├── scripts/          # Framework-specific JS
│   └── styles/           # CSS files for each variant
├── components/           # Reusable React components
├── lib/                  # variants and utilities
├── stories/              # Ladle stories for components
├── App-bootstrap.tsx     # Bootstrap-styled app
├── App-tailwind.tsx      # Tailwind-styled app
├── App-vanilla.tsx       # Vanilla CSS app
└── main.tsx              # Dynamic entry point
```

The setup automatically loads the correct App component and styles based on your `.env` configuration.

## 🛑 No Pull Requests, Please

Thanks for checking out this project! It's built as a fun and flexible React playground and isn't currently accepting external contributions.

Feel free to fork it, remix it, build cool stuff with it — just know that any pull requests will be kindly ignored.
