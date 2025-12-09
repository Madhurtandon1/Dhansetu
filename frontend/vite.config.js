// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),react(),
    VitePWA({
      registerType: "autoUpdate", // SW auto-updates in background
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "icons/pwa-192x192.png",
        "icons/pwa-512x512.png"
      ],
      manifest: {
        name: "Smart NBCFDC Loan Screening Portal",
        short_name: "NBCFDC Loans",
        description:
          "Progressive web app for smart, fair and data-driven NBCFDC loan screening.",
        theme_color: "#0b3b7c",
        background_color: "#f1f5f9",
        display: "standalone",
        start_url: "/",
        scope: "/",
        orientation: "portrait-primary",
        icons: [
          {
            src: "/icons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          // {
          //   src: "/icons/pwa-512x512-maskable.png",
          //   sizes: "512x512",
          //   type: "image/png",
          //   purpose: "maskable"
          // }
        ]
      },
      workbox: {
        // basic offline caching
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,json}"],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === self.location.origin,
            handler: "CacheFirst",
            options: {
              cacheName: "nbcfdc-static-cache",
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
              }
            }
          },
          {
            // API calls (you can adjust URL later when backend is final)
            urlPattern: ({ url }) =>
              url.pathname.startsWith("/api/") ||
              url.href.includes("your-backend-domain"),
            handler: "NetworkFirst",
            options: {
              cacheName: "nbcfdc-api-cache",
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 24 * 60 * 60 // 1 day
              }
            }
          }
        ]
      }
    })
  ]
});

