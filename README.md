# Prince Owusu — Portfolio

A responsive React + TypeScript portfolio built with Vite, Framer Motion and Lucide icons. The layout retains the original editorial visual direction and includes a mobile refinement pass for narrow phones, tablets and desktop screens.

## Requirements
- Node.js 20 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## GitHub setup
Create a repository named `prince-owusu-portfolio` under your GitHub account, then run these commands from this project folder:

```bash
git init
git add .
git commit -m "Build responsive Prince Owusu portfolio"
git branch -M main
git remote add origin https://github.com/KaySea08/prince-owusu-portfolio.git
git push -u origin main
```

If you already created the repository with a different name, replace the remote URL with that repository's HTTPS URL. Do not commit `.env` files, credentials, API tokens or private keys. This portfolio currently requires no environment variables or private API credentials.

## Netlify deployment
1. Sign in to Netlify and choose **Add new project** / **Import an existing project**.
2. Choose GitHub and authorize Netlify to access the portfolio repository.
3. Select `KaySea08/prince-owusu-portfolio` (or the repository name you created).
4. Netlify reads `netlify.toml`; verify the build command is `npm run build` and publish directory is `dist`.
5. Deploy the site. Netlify will provide a public URL that anyone can open in a browser; visitors do not need Netlify accounts.
6. Once the repository is linked, pushes to `main` trigger a new deployment automatically.

## Project maintenance
- Update portfolio content and project details in `src/App.tsx`.
- Update global styling and responsive breakpoints in `src/styles.css`.
- Update SEO metadata in `index.html`.
- `netlify.toml` configures the production build and SPA fallback.
- `.github/workflows/ci.yml` runs the TypeScript/Vite production build on pushes and pull requests to `main`.
- `.gitignore` excludes dependencies, build output, local editor files and environment secrets.

LinkedIn is intentionally omitted because no profile URL was supplied. Contact options include email, a displayed phone number (`+233 54 342 4208`) and a WhatsApp link using the same number. The phone number is displayed as text and is not configured as a click-to-call link.
