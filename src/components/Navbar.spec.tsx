import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders the promo banner', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const banner = screen.getByTestId('promo-banner');
    expect(banner.textContent?.replace(/\s+/g, ' ').trim()).toBe(
      'Free shipping on all orders over $50! Shop now and save.'
    );
  });
});
