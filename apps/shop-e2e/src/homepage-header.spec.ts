import { expect, test } from '@playwright/test';
import { setupApiMocks } from './fixtures/api-mocks';

test.beforeEach(async ({ page }) => {
  await setupApiMocks(page);
});

test('shows the desktop header and promo banner', async ({ page }) => {
  await page.setViewportSize({ width: 1612, height: 240 });
  await page.goto('/');

  const header = page.locator('header');
  await expect(header.getByTestId('navbar-title')).toHaveText('PolyShopping');
  await expect(
    header.getByRole('link', { name: 'Home', exact: true })
  ).toBeVisible();
  await expect(
    header.getByRole('link', { name: 'Shop', exact: true })
  ).toBeVisible();
  await expect(
    header.getByRole('link', { name: 'Categories', exact: true })
  ).toBeVisible();
  await expect(
    header.getByRole('link', { name: 'Deals', exact: true })
  ).toBeVisible();
  await expect(header.getByPlaceholder('Search products...')).toBeVisible();
  await expect(header.getByText('3')).toBeVisible();

  const promoBanner = header.getByTestId('promo-banner');
  await expect(promoBanner).toBeVisible();
  await expect(promoBanner).toHaveText(
    'Free shipping on all orders over $50! Shop now and save.'
  );
});
