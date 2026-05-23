# MiniMarket Web

MiniMarket Web is a Web Technologies laboratory project. It contains two
connected frontend applications and one GitHub Pages build.

## Project Structure

```text
LAB_REPOSICION_STW/
|-- apps/
|   |-- landing-next/      # Next.js landing page source
|   `-- main-store/        # Vite + React store source
|-- docs/                  # generated GitHub Pages site
|-- scripts/               # development and deployment helpers
|-- package.json           # root commands
`-- README.md
```

`apps/` contains source code. `docs/` contains generated static files for GitHub
Pages.

## Applications

### Landing Page

- Built with Next.js.
- Main entry page.
- Includes home, about, and categories routes.
- Links to the store at `/store/`.

### Store

- Built with Vite + React.
- Includes products, filters, cart, checkout, and purchase summary.
- Uses `localStorage` to persist cart data.
- Links back to the landing page.

## Run Locally

From repository root:

```bash
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:3000/
```

The store runs in background on port `5173`.

## Build

Build combined site into `public-site/`:

```bash
npm run build
```

Build and copy static files to `docs/` for GitHub Pages from `main`:

```bash
npm run build:main-pages
```

## GitHub Pages

Use this configuration:

```text
Source: Deploy from a branch
Branch: main
Folder: / docs
```

Main URL:

```text
https://miguelrosas11.github.io/LAB_REPOSICION_STW/
```

Store URL:

```text
https://miguelrosas11.github.io/LAB_REPOSICION_STW/store/
```

## Technologies

- React
- Vite
- Next.js
- CSS
- Git
- GitHub
- GitHub Pages

## Author

Miguel Rosas - 241274

## Video

https://www.youtube.com/watch?v=9plMbnE03dw
