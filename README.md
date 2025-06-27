<div align="center">
  <a href="https://github.com/tyronejosee/project_porfolio#gh-light-mode-only" target="_blank">
    <img src="./public/logo.svg" alt="logo-light" width="80">
  </a>
  <a href="https://github.com/tyronejosee/project_porfolio#gh-dark-mode-only" target="_blank">
    <img src="./public/logo.svg" alt="logo-dark" width="80">
  </a>
</div>
<div align="center">
  <h1><strong>Portfolio</strong></h1>
  <a href="#"><strong>Deploy on Vercel</strong></a>
</div>
<p align="center">
  Project portfolio built with Next.js and Tailwind CSS.
<p>

<p align="center">
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-5.7.3-007ACC" alt="typescript-version">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/nextjs-15.3.4-000000" alt="nextjs-version">
  </a>
</p>

## 💻 General

### 🗃️ Repository

Clone the repository.

```bash
git clone git@github.com:tyronejosee/project_portfolio.git
```

## ✅ Requirements

- [Node.js](https://nodejs.org/) >= 16.8.0
- [PNPM](https://pnpm.io/installation) >= 7.0

## ⚙️ Installation

To get started, make sure you have [PNPM](https://pnpm.io/installation) installed on your system. Then, follow these steps:

Install the dependencies:

```bash
pnpm install
```

### Available Scripts

Start the development server at `http://localhost:3000/`

```bash
pnpm dev
```

Build the application for production.

```bash
pnpm build
```

Start the server in production mode.

```bash
pnpm start
```

Run the linter to check the code quality.

```bash
pnpm lint
```

### 📂 App Router Setup

This project uses the **App Router** from Next.js to handle routing. Page files (`page.tsx`) are placed inside folders within the `app/` directory. Example:

```bash
src/
├── app/
│   ├── page.tsx
│   └── example/
│       └── page.tsx
```

You can create new routes simply by adding folders inside `src/app/` and adding `page.tsx` files for the views.

You can deploy this application on platforms like [Vercel](https://vercel.com/) (the recommended one for Next.js), [Netlify](https://www.netlify.com/), or any other service that supports Node.js.

### 🌱 Contribute

If you would like to contribute to the project:

1. Fork the repository.
2. Create a branch with the name of your feature: `git checkout -b feature/new-feature`.
3. Make your changes and commit: `git commit -m 'feat: added new feature'`.
4. Push your changes: `git push origin feature/new-feature`.
5. Open a Pull Request and submit your changes to the `develop` branch.

The front-end of the application was created with [Next.js](https://nextjs.org/) using the App Router introduced in Next.js 13 and the package manager [PNPM](https://pnpm.io/).

### ⚖️ License

This project is under the [MIT Licence](https://github.com/tyronejosee/project_portfolio/blob/main/LICENSE).

Enjoy! 🎉
