# Mikiyas Ayele — Terminal Portfolio

A responsive personal portfolio built with React, Vite, Framer Motion and Lucide icons. It uses a dark terminal-inspired visual system with an interactive command prompt.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production-ready site is generated in `dist/`.

## Personalize before publishing

Open `src/App.jsx` and update the `profile` object near the top:

- `email`: replace `YOUR_EMAIL@example.com` with your real email.
- `github`: confirm your GitHub profile URL.
- `linkedin`: replace with your LinkedIn profile URL.
- `telegram`: add your Telegram username if you want to use it.

Review project descriptions and links before publishing. The Admas and Efoyta links are included from the project context; remove or replace any link you do not want public.

## Deploy

- **Vercel:** Import the Git repository. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
- **Netlify:** Build command: `npm run build`. Publish directory: `dist`.

No backend or environment variables are required for this portfolio.
