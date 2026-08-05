import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

/**
 * Fails the production build when the project-card URLs were not replaced
 * with real domains. Enabled with `PROD_URLS_REQUIRED=1` (used on the VPS).
 * Values from .env are baked into the bundle at build time — a forgotten
 * rebuild after editing .env silently ships localhost links again.
 */
const prodUrlGuard = (): Plugin => {
  const env = loadEnv('production', process.cwd(), '');
  const URL_VARS = [
    'VITE_PROJECT_URL_AMBER',
    'VITE_PROJECT_URL_AURUM',
    'VITE_PROJECT_URL_MERIDIAN',
    'VITE_PROJECT_URL_UIMAILBOT',
  ];
  const LOCALHOST = /localhost|127\.0\.0\.1|\[::1\]/;
  return {
    name: 'prod-url-guard',
    buildStart() {
      if (env.PROD_URLS_REQUIRED !== '1') return;
      const problems = URL_VARS.filter(
        (k) => !env[k] || LOCALHOST.test(env[k])
      ).map((k) => `  ${k}=${env[k] ?? 'MISSING'}`);
      if (problems.length) {
        this.error(
          `[prod-url-guard] Build blocked: project URLs still localhost or missing.\n${problems.join('\n')}\n\nFix /root/sites/rjx-portfolio/.env (gitignored — edit it ON the server), then rebuild.`
        );
      }
      console.log('[prod-url-guard] Production URLs OK.');
    },
  };
};

export default defineConfig({
  plugins: [react(), prodUrlGuard()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Domains allowed to reach the dev/preview server (Vite Host check).
  // `.synergyflow.ru` matches rjx.synergyflow.ru and any future subdomain.
  server: {
    port: 5173,
    allowedHosts: ['.synergyflow.ru'],
  },
  preview: {
    allowedHosts: ['.synergyflow.ru'],
  },
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          state: ['zustand'],
        },
      },
    },
  },
});
