# MiniMarket Web

MiniMarket Web is a university Web Technologies project built with two connected
applications in one repository:

- `main-store`: Vite + React store application.
- `landing-next`: Next.js landing page.

The project uses React, Vite, Next.js, CSS, Git, GitHub, and GitHub Pages.

## Project Description

MiniMarket Web is a fictional online store. Users can explore products, filter
the catalog, manage a shopping cart, and complete a checkout form.

The landing page is the main entry point. It links to the Vite store, which is
published under `/store/`. The store also links back to the landing page.

## Features

### Main Store

- 12 products with name, category, price, image, description, stock, and optional
  tag.
- Search by product name.
- Filter by category.
- Filter by tag.
- Sort by price.
- Add, remove, increase, and decrease cart items.
- Empty cart button.
- Product subtotals and total price.
- Checkout form with validation.
- Purchase summary after checkout.
- Cart persistence with `localStorage`.

### Landing Page

- Home page.
- About page.
- Categories page.
- Shared navbar.
- Footer.
- Link to the deployed store.
- Responsive layout with plain CSS.

## Technologies Used

- React
- Vite
- Next.js
- JavaScript
- CSS
- Git
- GitHub
- GitHub Pages

## Project Structure

```text
LAB_REPOSICION_STW/
|-- main-store/
|   |-- src/
|   |-- public/
|   |-- package.json
|   `-- vite.config.js
|-- landing-next/
|   |-- app/
|   |-- components/
|   |-- lib/
|   |-- package.json
|   `-- next.config.mjs
`-- README.md
```

## Run Locally

Run both apps together from the repository root:

```bash
npm install
npm run dev
```

Local URLs:

- Landing page: `http://127.0.0.1:3000/`
- Store: `http://127.0.0.1:5173/`

You can also run each app separately.

### Main Store Only

```bash
cd main-store
npm install
npm run dev
```

### Landing Page Only

```bash
cd landing-next
npm install
npm run dev
```

## Build

### Combined GitHub Pages Build

```bash
npm run build
```

This creates one static site in `public-site/`:

- Landing page at `/LAB_REPOSICION_STW/`
- Store at `/LAB_REPOSICION_STW/store/`

### Main Store Only

```bash
cd main-store
npm run build
```

### Landing Page Only

```bash
cd landing-next
npm run build
```

## Deploy To GitHub Pages

The root deployment publishes one combined static site. The landing page is the
main page, and the store is available from the landing navigation.

```bash
npm run deploy:pages
```

After running the deployment command, configure GitHub Pages to publish from the
`gh-pages` branch.

If the repository name changes, update:

- `scripts/build-pages.mjs` if output paths change
- `main-store/package.json`: `build:pages`
- `landing-next/.env.example`
- `landing-next/lib/site.js`
- `landing-next/next.config.mjs`: `basePath` and `assetPrefix`
- `main-store/src/App.jsx`: production landing URL

## Landing Store URL

The landing page reads the store URL from `NEXT_PUBLIC_STORE_URL`.

Example:

```bash
NEXT_PUBLIC_STORE_URL=https://YOUR_GITHUB_USERNAME.github.io/LAB_REPOSICION_STW/ npm run build
```

PowerShell:

```powershell
$env:NEXT_PUBLIC_STORE_URL='https://YOUR_GITHUB_USERNAME.github.io/LAB_REPOSICION_STW/'
npm run build
```

## Author

Created for the Web Technologies course.
