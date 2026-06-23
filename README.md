# Angular Enterprise Starter

Production-ready Angular + TypeScript starter built with standalone components, featuring a scalable feature-based architecture, testing setup, path aliases, and modern AI-assisted development conventions.

### Status

`✅ Actively maintained`

This repository is continuously updated to align with modern Angular, TypeScript, Tailwind CSS, and frontend engineering best practices.

---

## Why This Starter Template?

Most Angular starters stop at project creation.

Modern AI coding tools can scaffold applications quickly, but consistency in architecture, tooling, and development conventions remains important for long-term maintainability.

This starter provides a production-ready foundation with a proven project structure, established tooling, and AI-assisted development conventions, helping teams start faster while maintaining consistency across projects.

---

## Features

* Angular Standalone Architecture
* TypeScript
* Tailwind CSS
* Feature-based architecture
* Path aliases configuration
* Route guards
* HTTP interceptors
* Global state foundation
* Testing setup
* Environment configurations
* AI-assisted development conventions
* Scalable project structure

---

## Project Structure

```text
src/
├── app/
│   ├── core/
│   │   ├── api/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── models/
│   │   ├── services/
│   │   └── state/
│   │
│   ├── shared/
│   │   ├── components/
│   │   ├── directives/
│   │   ├── pipes/
│   │   └── utils/
│   │
│   ├── layouts/
│   │   ├── auth-layout/
│   │   └── main-layout/
│   │
│   ├── pages/
│   │   └── home/
│   │
│   ├── features/
│   │   └── auth/
│   │       ├── components/
│   │       ├── models/
│   │       ├── pages/
│   │       ├── services/
│   │       └── state/
│   │
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── app.ts
│   └── app.html
│
├── styles/
│   └── globals.css
│
├── index.html
└── main.ts
```

### Architecture Overview

- **core/** → Application-wide infrastructure including singleton services, guards, interceptors, API utilities, shared models, and global state management. This layer contains cross-cutting concerns used across multiple features.

- **shared/** → Reusable, presentation-only building blocks such as UI components, directives, pipes, and utility functions. Must contain no business logic and remain framework-agnostic where possible.

- **layouts/** → Application shell structures that define page composition (e.g., main layout, auth layout, admin layout). Responsible for UI framing, not business logic.

- **pages/** → Top-level route pages that are not tied to a specific business domain. Typically public or static routes such as home, about, or contact pages.

- **features/** → Self-contained business domains organized by bounded context (e.g., auth, dashboard, settings). Each feature encapsulates its own pages, components, services, state, models, and routing, and is typically lazy-loaded.

- **assets/** → Static resources such as images, fonts, icons, translations, and mock data. These are not processed as application code.

- **styles/** → Global styling entry point including Tailwind imports, design tokens, theme definitions, and application-wide CSS configuration.

- **app.routes.ts** → Root routing configuration responsible for composing pages, features, and lazy-loaded routes.

- **app.config.ts** Application bootstrap configuration including providers such as routing, HTTP client, interceptors, and global services.

- **app.ts** → Root standalone application component acting as the entry point shell for the Angular application.

---

Each feature is self-contained, owning its pages, components, services, state, models, and routing. This ensures strong domain isolation, scalability, and maintainability aligned with modern Angular enterprise architecture patterns.

---

## Quick Start

### Clone Repository

```bash
git clone https://github.com/LeonardOgendo/angular-enterprise-starter.git
cd angular-enterprise-starter
```

### Install Dependencies & Run

```bash
npm install
ng serve
```

### Folder Notes

Certain folders contain placeholder `README.md` files to ensure Git preserves empty directories and to provide lightweight architectural guidance.

These files are optional and can be safely removed depending on project needs.

---

*Happy Coding!*
