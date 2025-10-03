# Workspace Overview

This repository contains two small/demo projects. Below is a brief, surface-level introduction to each so you can quickly see what they are and where to look.

## 1) blog
A small demo blog project composed of a frontend and a minimal backend.

- What it is: A simple blog application for demonstrating a Next.js-based frontend alongside a lightweight Node.js backend that stores posts in a JSON file.
- What it does: Shows blog posts, individual post pages, and includes simple admin pages (login, new post, edit) for managing content.
- Where to look:
  - `blog/frontend/` — Next.js frontend app (UI, pages, public assets, and app routes live under `src/app`).
  - `blog/backend/` — Minimal Node.js backend (server entry: `index.js`, posts storage: `posts.json`).
- Quick run (high-level):
  - Start the backend: open a terminal in `blog/backend`, install dependencies with `npm install` (if needed) and run the start script (e.g., `npm start` or `node index.js`).
  - Start the frontend: open a terminal in `blog/frontend`, install dependencies with `npm install` and run the Next.js dev server (e.g., `npm run dev`).

## 2) clone
A static HTML/CSS site (a visual/template clone) for demonstration or prototyping.

- What it is: A static landing page / template composed of an `index.html` file and static assets (CSS, images, fonts) under `public/assets`.
- What it does: Provides a static UI/layout using common CSS assets (Bootstrap, FontAwesome, custom styles) that can be used as a starting point for a simple website.
- Where to look:
  - `clone/index.html` — main static HTML file to open in a browser.
  - `clone/public/assets/` — stylesheets and other static assets used by the page.
- Quick run (high-level):
  - Preview by opening `clone/index.html` in a browser, or serve the folder with any static server (for example, `npx serve` or a simple Python/Node static server).
