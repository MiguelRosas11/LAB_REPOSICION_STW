
# Reposition Laboratory – MiniMarket Web

This project was developed for the course **Tecnologías y Sistemas Web** and corresponds to the **Reposition Laboratory**.

The objective of this laboratory was to build a complete web application using **React, Vite, Next.js, CSS, Git, GitHub, and GitHub Pages**.

The project simulates an online store called **MiniMarket Web**, where users can browse products, manage a shopping cart, apply filters, and complete a simulated checkout process.

Unlike traditional separated applications, this project integrates both the **interactive store experience** and the **informational landing sections** into a single web platform.

---

## Project Description

MiniMarket Web is a fictional online store developed as a modern frontend web application.

The platform combines:

- An interactive shopping experience built with **React + Vite**
- Informational and business-oriented sections inspired by **Next.js-style landing pages**
- Persistent shopping cart functionality
- Product filtering and search
- Simulated checkout system

The application focuses on creating a clean, responsive, and user-friendly shopping experience.

---

## Main Features

The application allows users to:

- Browse a catalog of products
- Search products by name
- Filter products by category
- Filter products by product tag
- Sort products by price
- Add products to the shopping cart
- Increase or decrease quantities
- Remove products from the cart
- Empty the cart completely
- View product subtotals
- View the total purchase amount
- Complete a simulated checkout form
- Receive a purchase summary
- Maintain cart data after refreshing the page using localStorage

---

## Product Catalog

The store includes a catalog with multiple products distributed across different categories.

Each product contains:

- ID
- Name
- Category
- Price
- Image
- Description
- Available stock
- Optional tag:
  - `nuevo`
  - `oferta`
  - `popular`

Categories implemented:

- Tecnología
- Hogar
- Ropa
- Accesorios
- Papelería
- Deportes

---

## Shopping Cart System

The shopping cart system includes:

- Product addition
- Product removal
- Quantity increase
- Quantity decrease
- Cart clearing
- Product subtotal calculation
- Total price calculation
- Stock validation
- Persistent storage using localStorage

The cart remains available even after reloading the application.

---

## Filters and Search System

The application includes multiple catalog exploration tools:

- Search by product name
- Category filtering
- Tag filtering
- Sort products:
  - Lowest to highest price
  - Highest to lowest price

These features improve navigation and user experience inside the store.

---

## Checkout Simulation

The checkout system simulates an online purchase process.

Required fields:

- Full name
- Email address
- Address
- Payment method

Payment methods available:

- Tarjeta
- Transferencia
- Contra entrega

The form validates:

- Empty fields
- Basic email formatting
- Empty cart submissions

After successful validation, the application displays a purchase summary.

---

## Informational Sections

The application also includes informational sections inspired by a landing page structure.

These sections explain:

- What MiniMarket Web is
- What types of products are sold
- Main functionalities of the platform
- Store categories
- Purpose of the project

The website includes:

- Navigation bar
- Footer
- Informational cards
- Responsive sections
- Navigation links between sections

---

## Author

Miguel Rosas - 241274

## Video

https://www.youtube.com/watch?v=9plMbnE03dw
