import { defineConfig } from 'vite'
import { resolve } from 'path'
import vitePluginPugI18n from 'vite-plugin-pug-i18n'
import fs from 'fs'

const appsFilePath = resolve(__dirname, 'apps.json');
let appsData = [];

try {
    const jsonData = fs.readFileSync(appsFilePath, 'utf-8');
    appsData = JSON.parse(jsonData);
} catch (error) {
    // This message would appear in your Vite terminal if an error occurs
    console.error(`Error reading or parsing ${appsFilePath}. Defaulting to empty apps list.`, error);
}

export default defineConfig({
    resolve: {
        alias: {
            '~': resolve(__dirname, './node_modules'),
            '@': resolve(__dirname, './src'),
        }
    },
    preview: {
        host: "0.0.0.0",
        port: 10000
    },
    plugins: [
        vitePluginPugI18n({
            pages: {
                baseDir: resolve(__dirname, 'src/pages')
            },
            locals: {
                "apps": appsData
            },
            options: {
                "pretty": process.env.NODE_ENV === "development"
            },
        })
    ],
    build: {
        rollupOptions: {
            output: {
                chunkFileNames: 'assets/main-[hash].js'
            }
        }
    }
})