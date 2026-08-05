import { test, expect, type Page } from '@playwright/test';

test.describe('RJX portfolio — real user simulation', () => {
  async function skipBoot(page: Page) {
    await page.waitForSelector('text=guest@rjx', { timeout: 10000 }).catch(() => {});
    await page.mouse.click(400, 300);
    await expect(page.locator('h1')).toBeVisible({ timeout: 8000 });
  }

  test('terminal boot -> hero -> scroll -> sections', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto('/');
    await skipBoot(page);

    await expect(page.locator('h1')).toContainText('Zero friction');
    await expect(page.getByText('Solo Developer Studio')).toBeVisible();

    await page.mouse.wheel(0, 800);
    await page.waitForTimeout(400);
    await expect(page.locator('#capabilities')).toBeVisible();
    await expect(page.getByText('What I do best')).toBeVisible();

    await page.mouse.wheel(0, 1200);
    await page.waitForTimeout(400);
    await expect(page.locator('#works')).toBeVisible();
    await expect(page.getByText('Selected Work')).toBeVisible();
    await expect(page.locator('#works a')).toHaveCount(4);

    await page.mouse.wheel(0, 1500);
    await page.waitForTimeout(400);
    await expect(page.getByText('Have a project in mind?')).toBeVisible();

    expect(errors).toEqual([]);
  });

  test('work cards open the real project sites in a new tab', async ({ page }) => {
    await page.goto('/');
    await skipBoot(page);

    await page.locator('#works').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Amber Terminal → amber-terminal dev server
    const amber = page.locator('#works a', { hasText: 'Amber Terminal' });
    await expect(amber).toHaveAttribute('target', '_blank');
    await expect(amber).toHaveAttribute('rel', 'noreferrer');
    await expect(amber).toHaveAttribute('href', 'http://localhost:5174');

    // Aurum Noir → aurum-noir dev server
    const aurum = page.locator('#works a', { hasText: 'Aurum Noir' });
    await expect(aurum).toHaveAttribute('href', 'http://localhost:5175');

    // Meridian → meridian-kimi dev server
    const meridian = page.locator('#works a', { hasText: 'Meridian' });
    await expect(meridian).toHaveAttribute('href', 'http://localhost:5176');

    // UIMailBot → hosted Telegram bot
    const bot = page.locator('#works a', { hasText: 'UIMailBot' });
    await expect(bot).toHaveAttribute('href', 'https://t.me/uimailbot');
    await expect(bot).toHaveAttribute('target', '_blank');
  });

  test('theme + language toggles work', async ({ page }) => {
    await page.goto('/');
    await skipBoot(page);

    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');
    await page.getByRole('button', { name: /toggle theme/i }).click();
    await expect(html).toHaveAttribute('data-theme', 'light');
    await page.getByRole('button', { name: /toggle theme/i }).click();
    await expect(html).toHaveAttribute('data-theme', 'dark');

    await page.getByRole('button', { name: /switch to russian/i }).click();
    await expect(page.locator('h1')).toContainText('Один человек');
    await page.getByRole('button', { name: /switch to english/i }).click();
    await expect(page.locator('h1')).toContainText('Zero friction');
  });

  test('mobile: hamburger menu opens, nav works, no horizontal scroll', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 720 });
    await page.goto('/');
    await skipBoot(page);

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1
    );
    expect(overflow).toBe(true);

    await page.getByRole('button', { name: /open menu/i }).click();
    await expect(page.getByRole('dialog', { name: 'Mobile menu' })).toBeVisible();
    await page.getByRole('button', { name: 'Capabilities' }).click();
    await expect(page.locator('#capabilities')).toBeVisible();
  });

  test('keyboard navigation: tab reaches skip link, links focusable', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('text=guest@rjx', { timeout: 10000 }).catch(() => {});
    await page.keyboard.press('Enter');
    await expect(page.locator('h1')).toBeVisible({ timeout: 8000 });

    await page.keyboard.press('Tab');
    await expect(page.getByText('Skip to content')).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('#main')).toBeVisible();
  });
});
