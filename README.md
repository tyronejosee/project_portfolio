# Project Portfolio

<p align="center">
  <a href="https://github.com/tyronejosee/project_porfolio#gh-light-mode-only" target="_blank">
    <img src="./static/img/logo_light.svg" alt="logo-light" width="80">
  </a>
  <a href="https://github.com/tyronejosee/project_porfolio#gh-dark-mode-only" target="_blank">
    <img src="./static/img/logo_dark.svg" alt="logo-dark" width="80">
  </a>
</p>
<p align="center">
Personal portfolio created with React, Vite, TypeScript, and Tailwind CSS.
<p>
<p align="center">
  <a href="#"><strong>Pending Deploy ➡️</strong></a>
</p>
<p align="center">
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-5.2.2-007ACC" alt="typescript-version">
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/react-18.2.0-61DAFB" alt="react-version">
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/tailwindcss-3.4.3-38B2AC" alt="tailwindcss-version">
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/vitejs-5.2.0-8A2BE2" alt="vitejs-version">
  </a>
</p>

## Github Pages Config

```yml

name: Deploy static content to Pages

on:
  push:
    branches: ["main"]

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./dist"
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

```
