import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 45000,
  expect: { timeout: 12000 },
  use: {
    baseURL: 'http://localhost:5173',
    viewport: { width: 1280, height: 800 },
    actionTimeout: 8000,
    // Use the system Chromium when the Playwright browser bundle is not installed
    // (run `npx playwright install chromium` to use the bundled one instead).
    launchOptions: { executablePath: process.env.PW_CHROMIUM ?? '/usr/bin/chromium' },
  },
  workers: 1,
  webServer: {
    command: 'npm run dev -- --port 5173',
    port: 5173,
    reuseExistingServer: true,
    timeout: 120000,
  },
});
