# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 landing page for "Digi" — microservice infrastructure for the modern web. Built with the T3 Stack (Next.js + TypeScript + Tailwind CSS), using React 19 and Next.js App Router.

The project includes custom terminal and code block components with syntax highlighting, designed to showcase technical content in an aesthetically consistent way.

## Development Commands

```bash
# Development
bun dev                  # Start dev server with Turbo mode
bun build                # Build for production
bun start                # Start production server
bun preview              # Build and start production server

# Type checking & Linting
bun typecheck            # Type check without emitting files
bun lint                 # Run ESLint
bun lint:fix             # Auto-fix ESLint issues
bun check                # Run both ESLint and type checking

# Formatting
bun format:check         # Check Prettier formatting
bun format:write         # Auto-fix Prettier formatting
```

## Architecture

### Environment Variables

- Managed via `@t3-oss/env-nextjs` with Zod validation in `src/env.js`
- Server vars go in the `server` schema, client vars (prefixed with `NEXT_PUBLIC_`) go in the `client` schema
- Both schemas and `runtimeEnv` mapping must be updated when adding new variables
- Set `SKIP_ENV_VALIDATION=1` to skip validation (useful for Docker builds)

### Path Aliases

- `~/*` maps to `./src/*` (configured in tsconfig.json)
- Use this for all imports: `import Navbar from "~/components/navbar"`

### Styling

- Tailwind CSS v4 with PostCSS
- Global styles in `src/styles/globals.css`
- Custom fonts: Cal Sans (variable `--font-calsans`) and Geist (imported but not yet applied)

### Custom Components

#### Terminal Window (`src/components/terminal.tsx`)

Displays terminal-style output with semantic line types:

- `TerminalWindow` — Full terminal UI with chrome bar, traffic lights, and animated line reveal
- Line types: `command`, `success`, `error`, `warning`, `info`, `dim`, `output`
- Auto-prefixes lines ($ for commands, ✓ for success, etc.)
- Supports animated line-by-line rendering
- Command lines auto-highlight the binary name in blue

#### Code Block (`src/components/terminal.tsx`)

Syntax-highlighted code display:

- `CodeBlock` — Code display with optional filename, language badge, line numbers, and copy button
- `InlineCode` — Small inline code snippets
- Token types: `keyword`, `string`, `number`, `function`, `comment`, `blue`, `plain`
- Lines are arrays of `CodeToken` objects
- Fully styled to match the Digi brand (dark theme with blue accents)

### Metadata & SEO

Comprehensive metadata is defined in `src/app/layout.tsx`:
- OpenGraph tags for social sharing
- Twitter card configuration
- Structured metadata with keywords for SEO
- Base URL: `https://digi.bnhm.dev`

## TypeScript Configuration

- Strict mode enabled with `noUncheckedIndexedAccess`
- ES2022 target with ESNext modules
- Type-checking enabled for JS files (`checkJs: true`)

## Code Style

- ESLint with Next.js config + TypeScript strict rules
- Prettier with Tailwind CSS plugin for class sorting
- Prefer `type` imports with inline style: `import { type Foo } from "..."`
- Unused vars prefixed with `_` are allowed
