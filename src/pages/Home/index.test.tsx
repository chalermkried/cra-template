import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from '.';

test('renders about link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const linkElement = screen.getByRole('link', { name: /\[go to about]/i });

  expect(linkElement).toBeInTheDocument();
});
