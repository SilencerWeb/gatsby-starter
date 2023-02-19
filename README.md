# Gatsby Starter

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
  - [Run the website](#run-the-website)
  - [Build the website](#build-the-website)
  - [Run the built website](#run-the-built-website)
  - [Clean Gatsby cache](#clean-gatsby-cache)
- [Project Structure](#project-structure)

## Getting Started

1. Clone this repository or hit "Use this template" button

```bash
git clone git@github.com:SilencerWeb/gatsby-starter.git
```

2. Install dependencies

```bash
npm install
```

3. Fill environment variables

```bash
cp .env.example .env
```

## Usage

### Run the website

```bash
npm run start
```

### Build the website

```bash
npm run build
```

### Run the built website

```bash
npm run serve
```

### Clean Gatsby cache

```bash
npm run clean
```

## Project Structure

```text
├── src
│   ├── components
│   │  ├── pages — React components that are being used specifically on a certain page
│   │  └── shared — React components that are being used across the whole website
│   ├── hooks
│   ├── images
│   ├── pages
│   ├── styles
│   ├── templates
│   ├── utils
│   └── html.jsx — HTML template for all generated pages. Read more about it here — gatsbyjs.org/docs/custom-html
├── static
│   └── fonts
├── gatsby-browser.js — Usage of the Gatsby browser APIs. Read more about it [here](gatsbyjs.org/docs/browser-apis)
├── gatsby-config.js — Main configuration file for a Gatsby site. Read more about it [here](gatsbyjs.org/docs/gatsby-config)
├── gatsby-node.js — Usage of the Gatsby Node APIs. [Read more about it here](gatsbyjs.org/docs/node-apis)
└── gatsby-ssr.js — Usage of the Gatsby server-side rendering APIs. [Read more about it here](gatsbyjs.org/docs/ssr-apis)
```

## Component Folder Structure

### Each component includes

1. Main JavaScript File
2. Index File

### Each component optionally may include

1. Folder with images and icons
2. Folder with data

Also, each component may include another component that follows all above listed rules.

### Example structure

```bash
component
├── nested-component
│  ├── data
│  │  └── nested-component-lottie-data.json
│  ├── images
│  │  ├── nested-component-image.jpg
│  │  ├── nested-component-inline-svg.inline.svg
│  │  └── nested-component-url-svg.url.svg
│  ├── nested-component.js
│  └── index.js
├── data
│  └── component-lottie-data.json
├── images
│  ├── component-image.jpg
│  ├── component-inline-svg.inline.svg
│  └── component-url-svg.url.svg
├── component.js
└── index.js
```
