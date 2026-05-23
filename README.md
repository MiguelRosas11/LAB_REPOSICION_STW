# MiniMarket Web

MiniMarket Web is a university Web Technologies project built with two separate
applications in one repository:

- `main-store`: Vite + React store application.
- `landing-next`: Next.js landing page.

The project uses React, Vite, Next.js, CSS, Git, GitHub, and GitHub Pages.

## Project Description

MiniMarket Web is a fictional online store. Users can explore products, filter
the catalog, manage a shopping cart, and complete a checkout form.

The landing page presents the store, its categories, and a link to the deployed
Vite store.

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

### Main Store

```bash
cd main-store
npm install
npm run dev
```

### Landing Page

```bash
cd landing-next
npm install
npm run dev
```

## Build

### Main Store

```bash
cd main-store
npm run build
```

### Landing Page

```bash
cd landing-next
npm run build
```

## Deploy Main Store To GitHub Pages

The Vite store is configured for the repository path
`/LAB_REPOSICION_STW/`.

```bash
cd main-store
npm run deploy:pages
```

After running the deployment command, configure GitHub Pages to publish from the
`gh-pages` branch.

If the repository name changes, update:

- `main-store/package.json`: `build:pages`
- `landing-next/.env.example`
- `landing-next/lib/site.js`

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
