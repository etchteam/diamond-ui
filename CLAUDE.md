# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Diamond UI is a lightweight design system built with Lit web components, design tokens, and CSS. Components use minimal JavaScript and follow the "CSS web components" methodology (see [https://etch.co/blog/css-web-components](https://etch.co/blog/css-web-components)). The library is framework-agnostic and can be installed in any web project.

**Component naming convention**: All components are prefixed with `dmd-` (abbreviated from "diamond"). For example: `dmd-grid`, `dmd-card`, `dmd-button`.

## Development Commands

### Running the project
```bash
npm start              # Start Vite dev server
npm run storybook      # Start Storybook on port 6006
```

### Building
```bash
npm run build                # Build components and styles with Rollup
npm run build-storybook      # Build Storybook static site
```

### Code quality
```bash
npm run lint:css         # Lint CSS files with Stylelint
npm run lint:js          # Lint JS with eslint
```

Note: There are no test scripts configured yet (`npm test` will fail).

## Architecture

### Component Categories

Components are organized into four categories under `components/`:

1. **canvas/** - Layout containers (e.g., `Card`, `Section`)
2. **composition/** - Layout and structural components (e.g., `Grid`, `FormGroup`, `Dialog`, `Hidden`)
3. **content/** - Content display components (e.g., `Icon`, `Text`, `List`, `LoadingButton`)
4. **control/** - Interactive form components (e.g., `Button`, `Input`, `RadioCheckbox`, `Link`)

### Component Types

Diamond UI uses two component approaches:

1. **Lit Components** - JavaScript web components built with Lit
  - Located in `.ts` files
  - Use `@customElement` decorator
  - Extend `LitElement`
  - Example: `Icon`, `LoadingButton`

2. **CSS Web Components** - Pure CSS components with only TypeScript interfaces
  - Have a `.ts` file that ONLY exports TypeScript types/interfaces (no implementation)
  - All styling and behaviour in corresponding `.css` file
  - Example: `Card`, `Button`, `Grid`

### Component Structure Pattern

Each component follows this structure:

```text
components/[category]/[ComponentName]/
├── ComponentName.ts         # Lit component OR type definitions only
├── ComponentName.css        # Component styles (always present)
└── ComponentName.stories.ts # Storybook stories
```

**Key files:**
- `ComponentName.ts` exports an interface `[ComponentName]Attributes` defining the component's props
- All components declare global types for both vanilla HTML and React JSX usage
- React type declarations use `JSXCustomElement<T>` helper type from `types/jsx-custom-element.ts`

Example interface pattern:
```typescript
export interface CardAttributes {
  border?: string | boolean;
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
}

declare global {
  interface HTMLElementTagNameMap {
    'dmd-card': CardAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dmd-card': JSXCustomElement<CardAttributes>;
    }
  }
}
```

### Design Tokens

All design tokens are defined as CSS custom properties in `styles/tokens/`:
- `border.css` - Border styles
- `button.css` - Button-specific tokens
- `color.css` - Color palette
- `font.css` - Typography
- `icon.css` - Icon sizing
- `input.css` - Form input styles
- `radius.css` - Border radius values
- `shadow.css` - Box shadows
- `spacing.css` - Spacing scale
- `theme.css` - Theme variables
- `transition.css` - Animation timings
- `wrap.css` - Container widths

Tokens can be overridden by defining CSS custom properties on `:root`.

### Build Tool

Rollup is configured to output three bundles:
1. **JavaScript components** - All `.ts` files from `components/` (excluding `.stories.ts`)
2. **Type definitions** - Generated `.d.ts` files
3. **Styles** - `diamond-ui.css` bundle that includes all component styles via PostCSS glob imports

The build:
- Uses `@rollup/plugin-typescript` for TypeScript compilation
- Uses `rollup-plugin-postcss` with `postcss-import-ext-glob` to bundle CSS
- Maintains directory structure in `dist/`
- Copies individual token files to `dist/styles/` for granular imports

### Shared Utilities

Reusable code in `lib/`:
- `pulse.ts` - Lit CSS for loading/skeleton animations
- `breakpoints.ts` - Responsive breakpoint definitions
- `css-map.ts` - Utility for mapping props to CSS classes

### Interactive Elements Pattern

When custom elements need to be interactive (clickable/tappable), wrap them in semantic HTML elements (`<a>`, `<button>`, or `<label>`).

The base CSS (`styles/base/interactive.css`) hides the styling of these wrappers when they contain:
- `dmd-card` components
- Elements with `data-interactive` attribute

This preserves accessibility while allowing visual customization.

### Theming

Diamond supports custom theming via CSS custom properties. No production themes are included by default. Theme styles are defined in `styles/themes.css`.

Theme variables follow the pattern `--dmd-theme-[property]` and can be scoped to specific components or containers.
