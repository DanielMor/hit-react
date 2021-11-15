# HumanIT React Exercice

The exercice is to build a PDP (Product Details Page) using React with Next.js. You should mount the page using the available components and create how many you want. You can also use features of Next.js to build the page.
For the data you should use the API at `/api/products/[id]`, at load you can use hardcoded id (e.g. `/api/products/123`). The follow images is a reference of that we want.

  ![Page](/public/reference-pdp.png)
  ![Recomendations](/public/reference-recomendations.png)

We want a 2 column layout with the image at left side and details at right side. At bottom we want a horizontal scrolling component with the product recomendations. The recomendations should only render on client-side.

Requirements:
 - Load data from the API `/api/products/[id]`;
 - Responsive Layout:
    - Desktop: Image and details side-by-side (2 columns);
    - Mobile: Details bellow of the image (1 column);
 - Horizontal scroll element with product recomendations;
 - Recomendations fetch and render only in client-side;

 repository: 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```