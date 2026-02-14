# Homelab Dashboard

A lightweight, customizable dashboard for your homelab services, built with [Vite](https://vitejs.dev/) and [Pug](https://pugjs.org/).

## Features

- **Fast:** Powered by Vite for instant server start and hot module replacement.
- **Dynamic Configuration:** Define your services in a local `apps.json` file without modifying the source code.
- **Templating:** Uses Pug (formerly Jade) for clean, readable HTML templates.

## Prerequisites

- Node.js (LTS version recommended)
- npm (or yarn/pnpm)

## Installation

1.  Install the dependencies:

    ```bash
    npm install
    ```

## Configuration

This dashboard reads data from an `apps.json` file located in the project root.

1.  Create a file named `apps.json` in the root directory (next to `vite.config.js`).
2.  Define your applications in a JSON array. The structure depends on your Pug templates, but it typically looks like this:

    ```json
    [
      {
        "name": "Service Name",
        "url": "http://192.168.1.100:8080",
        "icon": "icon-name",
        "description": "Optional description"
      }
    ]
    ```

    *Note: If the file is missing or invalid, the dashboard will load with an empty list of apps.*
    
3. Add app icons to `public/icons`. The build configuration is already set to pull icons from this directory.

## Usage

### Development

Start the development server:

```bash
npm run dev
```

### Production Build

Build the application for production:

```bash
npm run build
```

### Preview

Preview the production build locally. This is configured to run on port `10000`:

```bash
npm run preview
```

## Docker
You can also run the dashboard using Docker.

### Using Docker Compose
Ensure you have Docker and Docker Compose installed.

The dashboard will be available at `http://localhost:10000`

Note: The `apps.json` configuration is baked into the application at build time. If you modify `apps.json`, you must rebuild the container.

### Manual Build
```bash 
docker build -t homelab-dashboard . 
docker run -p 10000:10000 homelab-dashboard
```
