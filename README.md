# Emerson Veras — interactive portfolio

A frontend-only portfolio built with React, TypeScript, and Vite. Career information is maintained in `src/data.ts`; the illustrated scenes are original SVG and CSS.

## Run locally

```sh
npm install
npm run dev
```

Run `npm run build` to type-check and create the static site in `dist/`. Run `npm run preview` to preview that build. The generated files can be deployed to any static host.

## GitHub Pages

In the repository's **Settings → Pages**, select **GitHub Actions** as the deployment source. Push to `master` to build and deploy the site to `https://emersonveras.github.io/portfolio/`. The workflow can also be run manually from the Actions tab. If the repository is renamed, update the build's `--base` path in `.github/workflows/pages.yml`.

## Controls

Use the arrow keys or A/D to walk, and press E near a stop to open its story. The on-screen arrows can be held or clicked, and the Explore button opens the nearby story in a card without leaving the game. Close the card with the close button or Escape to continue exploring. Experience buttons below the game also let visitors jump directly to any chapter without using the game.

The original CV is not included in the build. Contact information and a CV download should only be added after confirming which details are intended for public display.
