# Columbus Recruitment Task

Recruitment assignment for the Junior Frontend Developer role.

## Overview
The application is a product listing page built with Next.js and TypeScript.
The page includes:
* responsive product grid
* product images, descriptions and branding
* discount price calculation
* shopping cart state management
* simulated async add-to-cart request
* cart quantity badge in the header

Product data is fetched asynchronously from the provided REST API.

## Tech Stack
* Next.js (App Router)
* TypeScript
* React Context API
* CSS Modules

## Features
* asynchronous API fetching
* reusable UI components
* responsive layout
* loading state while adding products to cart
* semantic HTML structure
* typed API models based on the provided schema

## API
Data is fetched from the recruitment API using x-api-key authentication.
API testing and response inspection were done with Postman.

## Getting Started

Install dependencies:
```bash
npm install

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Environment Variables

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_API_URL=https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise

API_KEY=your_api_key
```