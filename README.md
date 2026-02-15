# Homelab Dashboard

A lightweight, customizable dashboard for your homelab services, built with [Vite](https://vitejs.dev/) and [Pug](https://pugjs.org/).

## Features

- **Fast:** Powered by Vite for instant server start and hot module replacement.
- **Dynamic Configuration:** Define your services in a local `apps.json` file without modifying the source code.
- **Templating:** Uses Pug (formerly Jade) for clean, readable HTML templates.

![dashboard](https://github.com/teklynk/homelab-dashboard/blob/main/Screenshot%20from%202026-02-14%2019-07-46.jpg?raw=true)

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

### Manual Build
```bash 
docker build -t homelab-dashboard . 
docker run -p 10000:10000 homelab-dashboard
```

### Using Docker Compose
Ensure you have Docker Compose installed.

The dashboard will be available at `http://localhost:10000`

The `docker-compose.yml` is configured to mount your local `dist` folder into the container. This allows you to build locally and serve the files via Docker.

If you make changes to `apps.json` or the source code, you must rebuild the container to update the internal `dist` folder:
1. Run `npm run build` on your host machine to generate the static files.
2. Start the container: `docker-compose up -d`.

```bash
docker-compose up -d --build
```
Or, run this one-liner to build and spin up the container.
```bash
npm run build && docker-compose down && docker-compose up -d --build
```

*Note: If you see an empty page or errors, ensure you have run `npm run build` locally so the `dist` folder is populated.*