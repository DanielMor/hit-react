# HumanIT React Exercise

The exercise is to build a PDP (Product Details Page) using React with Next.js. You should mount the page using the available components and create how many you want. You can also use features of Next.js to build the page.
For the data you should use the API at `/api/products/[id]`, at load you can use hardcoded id (e.g. `/api/products/123`). The following images are a reference of what we want.

  ![Page](/public/reference-pdp.png)
  ![Recomendations](/public/reference-recomendations-scroll.png)

We want a 2 column layout with the image at left side and details at right side. At bottom we want a horizontal scrolling component with the product recommendations. The recommendations should only render on client-side.

Requirements:
 - Load data from the API `/api/products/[id]`;
 - Responsive Layout:
    - Desktop: Image and details side-by-side (2 columns);
    - Mobile: Details bellow of the image (1 column);
 - Horizontal scroll element with product recommendations;
 - Recommendations fetch and render only in client-side;

Clone the repository (https://github.com/DanielMor/hit-react) and push a solution to a new repository in your github account.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```